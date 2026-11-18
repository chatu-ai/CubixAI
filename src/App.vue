<template>
  <div class="min-h-screen flex flex-col bg-surface-base overflow-x-hidden">
    <AppHeader />
    <main class="flex-1 pt-14 md:pt-16">
      <!-- 页面切换：旧页淡出，新页淡入并轻微上浮 -->
      <RouterView v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
    <CookieConsent />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import CookieConsent from './components/CookieConsent.vue'
</script>
