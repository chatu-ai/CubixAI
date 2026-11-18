<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { SupportedLocale } from '@/i18n'
import { PRIVACY_EMAIL, privacyPolicy } from '@/data/privacyPolicy'
import {
  type ConsentStatus,
  consentStatus,
  setConsent,
  shouldLoadAnalytics,
} from '@/utils/cookieConsent'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value as SupportedLocale)
const policy = computed(() => privacyPolicy[currentLocale.value] ?? privacyPolicy.en)

const analyticsOn = computed(() => shouldLoadAnalytics(currentLocale.value, consentStatus.value))
const justSaved = ref(false)

function choose(status: ConsentStatus) {
  setConsent(status)
  justSaved.value = true
}

/** 把正文里的邮箱拆出来渲染成 mailto 链接 */
function splitEmail(text: string) {
  const parts = text.split(PRIVACY_EMAIL)
  return parts.flatMap((part, i) =>
    i < parts.length - 1 ? [{ text: part }, { text: PRIVACY_EMAIL, email: true }] : [{ text: part }],
  )
}
</script>

<template>
  <div class="bg-surface-base">
    <article class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <header class="pb-8 border-b border-line">
        <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-ink-primary">{{ policy.title }}</h1>
        <p class="mt-3 text-sm text-ink-tertiary">{{ policy.lastUpdated }}</p>
        <p class="mt-6 text-base leading-relaxed text-ink-secondary">{{ policy.intro }}</p>
      </header>

      <section
        v-for="(section, si) in policy.sections"
        :id="section.id"
        :key="section.id"
        class="pt-10 scroll-mt-24"
      >
        <h2 class="text-xl md:text-2xl font-semibold text-ink-primary">
          {{ si + 1 }}. {{ section.title }}
        </h2>

        <template v-for="(block, bi) in section.blocks" :key="bi">
          <p v-if="block.type === 'p'" class="mt-4 text-base leading-relaxed text-ink-secondary">
            <template v-for="(seg, k) in splitEmail(block.text)" :key="k">
              <a
                v-if="seg.email"
                :href="`mailto:${seg.text}`"
                class="font-medium text-brand-deep underline underline-offset-2 hover:text-brand"
              >{{ seg.text }}</a>
              <template v-else>{{ seg.text }}</template>
            </template>
          </p>

          <ul v-else-if="block.type === 'list'" class="mt-4 space-y-3 list-disc pl-5 marker:text-brand">
            <li
              v-for="(item, ii) in block.items"
              :key="ii"
              class="text-base leading-relaxed text-ink-secondary pl-1"
            >
              <strong v-if="item.lead" class="font-semibold text-ink-primary">{{ item.lead }}</strong>
              {{ item.text }}
            </li>
          </ul>

          <div v-else-if="block.type === 'cookies'" class="mt-5 grid gap-3">
            <div
              v-for="cookie in policy.cookies"
              :key="cookie.name"
              class="rounded-xl border border-line bg-surface-card p-4"
            >
              <div class="flex flex-wrap items-center gap-2">
                <code class="font-mono text-sm font-semibold text-ink-primary break-all">{{ cookie.name }}</code>
                <span
                  class="rounded-full px-2.5 py-0.5 text-xs font-medium"
                  :class="cookie.name === 'locale' || cookie.name === 'cookie-consent'
                    ? 'bg-surface-muted text-ink-secondary'
                    : 'bg-brand-soft text-brand-deep'"
                >{{ cookie.category }}</span>
              </div>
              <p class="mt-2 text-sm leading-relaxed text-ink-secondary">{{ cookie.purpose }}</p>
              <dl class="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-ink-tertiary">
                <div class="flex gap-1.5">
                  <dt>{{ policy.cookieLabels.storage }}:</dt>
                  <dd class="text-ink-secondary">{{ cookie.storage }}</dd>
                </div>
                <div class="flex gap-1.5">
                  <dt>{{ policy.cookieLabels.duration }}:</dt>
                  <dd class="text-ink-secondary">{{ cookie.duration }}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div
            v-else-if="block.type === 'settings'"
            id="cookie-settings"
            class="mt-6 rounded-2xl border border-line bg-surface-card shadow-card p-5 md:p-6 scroll-mt-24"
          >
            <h3 class="text-base font-semibold text-ink-primary">{{ policy.settings.title }}</h3>
            <p class="mt-2 text-sm text-ink-secondary">
              {{ policy.settings.statusLabel }}:
              <span
                class="ml-1 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold"
                :class="analyticsOn ? 'bg-brand-soft text-brand-deep' : 'bg-surface-muted text-ink-secondary'"
              >
                <span class="w-1.5 h-1.5 rounded-full" :class="analyticsOn ? 'bg-brand' : 'bg-ink-tertiary'" />
                {{ analyticsOn ? policy.settings.on : policy.settings.off }}
              </span>
            </p>
            <div class="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                type="button"
                class="h-10 px-5 rounded-full border border-line bg-surface-card text-sm font-medium text-ink-primary transition-colors hover:border-brand hover:text-brand"
                @click="choose('rejected')"
              >
                {{ policy.settings.reject }}
              </button>
              <button
                type="button"
                class="h-10 px-5 rounded-full bg-brand-gradient text-sm font-medium text-white shadow-card transition-opacity hover:opacity-90"
                @click="choose('accepted')"
              >
                {{ policy.settings.allow }}
              </button>
            </div>
            <p class="mt-3 min-h-[1.25rem] text-xs text-brand-deep" role="status" aria-live="polite">
              {{ justSaved ? policy.settings.saved : '' }}
            </p>
          </div>
        </template>
      </section>
    </article>
  </div>
</template>
