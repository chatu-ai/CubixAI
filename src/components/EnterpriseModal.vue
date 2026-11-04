<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, useId, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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
            class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden p-4 pt-10"
          >
            <h2 :id="titleId" class="sr-only">{{ t('common.contactUs') }}</h2>
            <button
              ref="closeButtonRef"
              type="button"
              :aria-label="t('common.close')"
              class="absolute top-2 right-2 w-8 h-8 rounded-full hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
              @click="close"
            >
              <span aria-hidden="true" class="text-xl">&times;</span>
            </button>
            <!-- Content -->
            <div class="flex gap-4 items-stretch">
              <div class="w-28 shrink-0 rounded-xl overflow-hidden">
                <img
                  src="@/assets/kf.webp"
                  alt="客服"
                  class="w-full h-40 object-cover"
                />
              </div>
              <div class="flex-1 flex flex-col gap-2 min-w-0">
                <p class="text-xs text-ink-secondary text-center leading-snug whitespace-nowrap">
                  有任何问题或需求，欢迎随时联系我们
                </p>
                <div class="rounded-xl overflow-hidden bg-surface-muted h-40 flex items-center justify-center">
                  <img
                    src="@/assets/lxwm.webp"
                    alt="联系我们"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
