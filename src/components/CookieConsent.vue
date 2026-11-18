<script setup lang="ts">
import { computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import type { SupportedLocale } from '@/i18n'
import {
  type ConsentStatus,
  consentStatus,
  needsConsentPrompt,
  setConsent,
  syncAnalytics,
} from '@/utils/cookieConsent'

const { t, locale } = useI18n()
const currentLocale = computed(() => locale.value as SupportedLocale)

// 海外版本（英/日/韩）首次访问弹出 Cookie 确认；中文版不弹
const visible = computed(() => needsConsentPrompt(currentLocale.value, consentStatus.value))

// 统计脚本按语言和访客选择决定是否加载/上报，切换语言或改变选择后即时生效
watch([currentLocale, consentStatus], ([loc]) => syncAnalytics(loc), { immediate: true })

function choose(status: ConsentStatus) {
  setConsent(status)
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    leave-active-class="transition duration-200 ease-in"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-if="visible"
      class="fixed inset-x-0 bottom-0 z-[60] p-4 md:p-6 pointer-events-none"
    >
      <section
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-message"
        class="pointer-events-auto mx-auto max-w-4xl rounded-2xl border border-line bg-surface-card shadow-card p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
      >
        <div class="flex items-start gap-3 flex-1 min-w-0">
          <div class="shrink-0 w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center">
            <Icon icon="lucide:cookie" class="w-5 h-5 text-brand-deep" />
          </div>
          <div class="min-w-0">
            <h2 id="cookie-consent-title" class="text-base font-semibold text-ink-primary">
              {{ t('cookieConsent.title') }}
            </h2>
            <p id="cookie-consent-message" class="mt-1 text-sm leading-relaxed text-ink-secondary">
              {{ t('cookieConsent.message') }}
              <RouterLink
                to="/privacy"
                class="font-medium text-brand-deep underline underline-offset-2 hover:text-brand"
              >
                {{ t('common.privacyPolicy') }}
              </RouterLink>
            </p>
          </div>
        </div>
        <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            class="h-10 px-5 rounded-full border border-line bg-surface-card text-sm font-medium text-ink-primary transition-colors hover:border-brand hover:text-brand"
            @click="choose('rejected')"
          >
            {{ t('cookieConsent.reject') }}
          </button>
          <button
            type="button"
            class="h-10 px-5 rounded-full bg-brand-gradient text-sm font-medium text-white shadow-card transition-opacity hover:opacity-90"
            @click="choose('accepted')"
          >
            {{ t('cookieConsent.accept') }}
          </button>
        </div>
      </section>
    </div>
  </Transition>
</template>
