<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, useId, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t, locale } = useI18n()
// 二维码是企业微信，只给中文访客显示；外语版本只留邮箱
const isZh = computed(() => locale.value === 'zh-CN')

/** 商务合作邮箱，显示在弹窗底部 */
const CONTACT_EMAIL = 'BD@CubixAI.com'
const copied = ref(false)
let copiedTimer: ReturnType<typeof setTimeout> | null = null
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(CONTACT_EMAIL)
    copied.value = true
    if (copiedTimer) clearTimeout(copiedTimer)
    copiedTimer = setTimeout(() => (copied.value = false), 2000)
  } catch {
    // 浏览器不允许写入剪贴板时，访客仍可点击邮箱直接发邮件
  }
}
const titleId = useId()
const dialogRef = ref<HTMLElement | null>(null)
const closeButtonRef = ref<HTMLButtonElement | null>(null)
let previousFocus: HTMLElement | null = null
let previousOverflow: string | null = null

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function close() {
  emit('update:modelValue', false)
}

function onBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget) {
    close()
  }
}

function onKeydown(event: KeyboardEvent) {
  if (!props.modelValue) return
  if (event.key === 'Escape') {
    event.preventDefault()
    close()
  }
  if (event.key === 'Tab') {
    const focusable = dialogRef.value?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable?.[0]
    const last = focusable?.[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last?.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first?.focus()
    }
  }
}

function onFocusIn(event: FocusEvent) {
  if (
    props.modelValue &&
    event.target instanceof Node &&
    !dialogRef.value?.contains(event.target)
  ) {
    closeButtonRef.value?.focus()
  }
}

function releaseDialog() {
  if (previousOverflow === null) return
  document.body.style.overflow = previousOverflow
  previousOverflow = null
  if (previousFocus?.isConnected) previousFocus.focus()
  previousFocus = null
}

watch(
  () => props.modelValue,
  async (open) => {
    if (open) {
      previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
      previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      await nextTick()
      if (props.modelValue) closeButtonRef.value?.focus()
    } else {
      releaseDialog()
    }
  },
  { immediate: true, flush: 'post' }
)

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('focusin', onFocusIn)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('focusin', onFocusIn)
  if (copiedTimer) clearTimeout(copiedTimer)
  releaseDialog()
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        @click="onBackdropClick"
      >
        <Transition
          enter-active-class="transition-all duration-300"
          leave-active-class="transition-all duration-300"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div
            v-if="modelValue"
            ref="dialogRef"
            role="dialog"
            aria-modal="true"
            :aria-labelledby="titleId"
            class="relative w-full max-w-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <button
              ref="closeButtonRef"
              type="button"
              :aria-label="t('common.close')"
              class="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center text-ink-secondary bg-white/70 backdrop-blur hover:bg-white hover:text-ink-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
              @click="close"
            >
              <Icon icon="lucide:x" class="w-4 h-4" aria-hidden="true" />
            </button>

            <!-- 顶部：客服形象 + 标题 -->
            <div class="relative h-[132px] bg-gradient-to-br from-brand-soft via-[#F1F8F4] to-white overflow-hidden">
              <span class="absolute -top-10 -right-8 w-40 h-40 rounded-full bg-brand/10" aria-hidden="true" />
              <span class="absolute top-16 right-24 w-16 h-16 rounded-full bg-brand/5" aria-hidden="true" />
              <img
                src="@/assets/kf.webp"
                :alt="t('common.consultModal.agentAlt')"
                class="absolute bottom-0 left-5 h-[124px] w-auto object-contain object-bottom select-none"
                draggable="false"
              />
              <div class="absolute inset-y-0 left-[132px] right-12 flex flex-col justify-center">
                <h2 :id="titleId" class="text-xl font-semibold text-ink-primary">{{ t('common.consultModal.title') }}</h2>
                <p class="mt-1.5 text-sm leading-relaxed text-ink-secondary text-balance">{{ t('common.consultModal.message') }}</p>
              </div>
            </div>

            <!-- 中部：二维码（仅中文） -->
            <div v-if="isZh" class="px-6 pt-6 pb-5 flex flex-col items-center">
              <div class="p-3 rounded-2xl bg-white border border-line shadow-card">
                <img
                  src="@/assets/lxwm.webp"
                  :alt="t('common.consultModal.qrAlt')"
                  class="w-40 h-40 object-contain"
                  draggable="false"
                />
              </div>
              <p class="mt-3 inline-flex items-center gap-1.5 text-sm text-ink-secondary">
                <Icon icon="lucide:scan-line" class="w-4 h-4 text-brand" aria-hidden="true" />
                {{ t('common.consultModal.scanHint') }}
              </p>
            </div>

            <!-- 底部：商务邮箱 -->
            <div class="mx-5 mb-5 flex items-center gap-3 rounded-2xl bg-surface-muted px-4 py-3" :class="{ 'mt-5': !isZh }">
              <span class="w-9 h-9 shrink-0 rounded-full bg-brand-soft text-brand-deep flex items-center justify-center">
                <Icon icon="lucide:mail" class="w-4 h-4" aria-hidden="true" />
              </span>
              <div class="min-w-0 flex-1">
                <p class="text-xs text-ink-tertiary">{{ t('common.consultModal.emailLabel') }}</p>
                <a
                  :href="`mailto:${CONTACT_EMAIL}`"
                  class="block truncate text-[15px] font-semibold text-ink-primary hover:text-brand-deep transition-colors"
                >{{ CONTACT_EMAIL }}</a>
              </div>
              <button
                type="button"
                class="shrink-0 inline-flex items-center gap-1 h-8 px-3 rounded-full border border-line bg-white text-xs font-medium transition-colors"
                :class="copied ? 'text-brand-deep border-brand/40' : 'text-ink-secondary hover:text-ink-primary hover:border-ink-tertiary'"
                @click="copyEmail"
              >
                <Icon :icon="copied ? 'lucide:check' : 'lucide:copy'" class="w-3.5 h-3.5" aria-hidden="true" />
                <span aria-live="polite">{{ copied ? t('common.consultModal.copied') : t('common.consultModal.copy') }}</span>
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
