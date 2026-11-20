<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { stripLocale } from '../i18n/paths'
import { useLocalePath } from '../composables/useLocalePath'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import beiIcon from '@/assets/icon/bei.webp'
import logo2Zh from '@/assets/logo2.webp'
import logo2En from '@/assets/logo2-en.webp'

const { t, locale } = useI18n()

// 中文用「软积木」logo，其他语言用英文 CubixAI logo（白字版，适配深色页脚）
const isChinese = computed(() => locale.value === 'zh-CN')
const footerLogoSrc = computed(() => (isChinese.value ? logo2Zh : logo2En))
const footerLogoAlt = computed(() => (isChinese.value ? '软积木' : 'CubixAI'))
const route = useRoute()
const lp = useLocalePath()
/** 去掉语言前缀后的页面路径（/en/cases → /cases） */
const basePath = computed(() => stripLocale(route.path))

const greenRoutes = ['/', '/solutions', '/cases', '/ai-insight', '/contact']
const isGreenBg = computed(() => greenRoutes.includes(basePath.value))
const showLogo2 = computed(() => ['/', '/products/agentstation', '/products/chatu', '/ecosystem', '/ai-insight', '/contact', '/cases', '/solutions', '/opc-hub', '/training', '/privacy'].includes(basePath.value))
</script>

<template>
  <footer :class="isGreenBg ? 'bg-[#1F6B45] text-white/80' : 'bg-brand-ink text-white/80'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
        <!-- Brand -->
        <div class="md:col-span-1">
          <template v-if="showLogo2">
            <img
              :src="footerLogoSrc"
              :alt="footerLogoAlt"
              class="h-12 w-auto mb-4"
            />
          </template>
          <template v-else>
            <div class="flex items-center gap-2.5 mb-4">
              <div
                class="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center"
              >
                <Icon icon="lucide:hexagon" class="w-5 h-5 text-white" />
              </div>
              <span class="text-lg font-semibold text-white tracking-tight">
                {{ t('common.siteName') }}
              </span>
            </div>
          </template><p class="text-sm text-white/75 leading-relaxed">
            {{ t('common.siteTagline') }}
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">{{ t('footer.products') }}</h4>
          <ul class="space-y-2.5">
            <li>
              <RouterLink
                :to="lp('/products/chatu')"
                class="text-sm text-white/75 hover:text-white transition-colors"
              >
                {{ t('footer.chatu') }}
              </RouterLink>
            </li>
            <li>
              <!-- <RouterLink
                :to="lp('/products/agentstation')"
                class="text-sm text-white/75 hover:text-white transition-colors"
              >
                {{ t('footer.agentStation') }}
              </RouterLink> -->
            </li>
            <li>
              <RouterLink
                :to="lp('/opc-hub')"
                class="text-sm text-white/75 hover:text-white transition-colors"
              >
                {{ t('footer.opcHub') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="lp('/training')"
                class="text-sm text-white/75 hover:text-white transition-colors"
              >
                {{ t('footer.training') }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-white mb-4">{{ t('footer.company') }}</h4>
          <ul class="space-y-2.5">
            <li>
              <RouterLink
                :to="lp('/contact')"
                class="text-sm text-white/75 hover:text-white transition-colors"
              >
                {{ t('footer.aboutUs') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="lp('/cases')"
                class="text-sm text-white/75 hover:text-white transition-colors"
              >
                {{ t('footer.customerCases') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="lp('/contact')"
                class="text-sm text-white/75 hover:text-white transition-colors"
              >
                {{ t('footer.contactUs') }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-white mb-4">{{ t('footer.resources') }}</h4>
          <ul class="space-y-2.5">
            <li>
              <RouterLink
                :to="lp('/solutions')"
                class="text-sm text-white/75 hover:text-white transition-colors"
              >
                {{ t('footer.solutions') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="lp('/ecosystem')"
                class="text-sm text-white/75 hover:text-white transition-colors"
              >
                {{ t('footer.ecosystem') }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p class="text-sm text-white/60 flex items-center gap-2 flex-wrap">
          <span>{{ t('common.copyright') }}</span>
          <!-- ICP 备案号只在中文版显示 -->
          <a
            v-if="isChinese"
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1 text-white/60"
          >
            <img
              :src="beiIcon"
              alt="ICP备案"
              class="w-4 h-auto"
            />
            <span>京ICP备2023016063号</span>
          </a>
          <RouterLink :to="lp('/privacy')" class="text-white/60 hover:text-white hover:underline underline-offset-2">
            {{ t('common.privacyPolicy') }}
          </RouterLink>
        </p>
      </div>
    </div>
  </footer>
</template>





