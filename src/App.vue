<template>
  <div class="min-h-screen flex flex-col bg-surface-base overflow-x-hidden">
    <AppHeader />
    <main class="flex-1 pt-16 md:pt-20">
      <RouterView />
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
