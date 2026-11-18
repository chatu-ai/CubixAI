<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="min-h-screen bg-surface-base relative overflow-hidden">
    <!-- 装饰光晕 -->
    <div class="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(85,173,115,0.06) 0%, transparent 70%); filter: blur(80px);" />
    <div class="absolute top-[40%] -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(85,173,115,0.04) 0%, transparent 70%); filter: blur(80px);" />

    <!-- Hero -->
    <section class="relative pt-14 md:pt-20 pb-8 md:pb-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl md:text-4xl lg:text-[44px] font-semibold text-ink-primary tracking-tight">
          AI 洞察 · 预见未来
        </h1>
        <p class="mt-3 text-lg text-ink-secondary">
          行业前沿、公司动态、产品进化
        </p>
      </div>
    </section>

    <!-- 订阅入口 -->
    <section class="relative pb-16 md:pb-24">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- ChatU -->
          <div class="group flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white border border-line shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-4">
              <Icon icon="lucide:box" class="w-6 h-6 text-[#2563EB]" />
            </div>
            <h3 class="text-lg font-semibold text-ink-primary">ChatU 产品资讯</h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed max-w-[240px]">
              获取产品更新、功能亮点与最佳实践
            </p>
            <div class="mt-5 w-[150px] h-[150px] rounded-xl bg-surface-muted overflow-hidden border border-line/50 flex items-center justify-center">
              <img src="@/assets/chatU.webp" alt="ChatU 公众号" class="w-full h-full object-cover" />
            </div>
            <p class="mt-4 text-xs text-ink-tertiary">扫码关注，掌握产品动态</p>
          </div>

          <!-- PEC -->
          <div class="group flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white border border-line shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-[#E8F5EE] flex items-center justify-center mb-4">
              <Icon icon="lucide:flame" class="w-6 h-6 text-[#2E8B57]" />
            </div>
            <h3 class="text-lg font-semibold text-ink-primary">AI 行业热点</h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed max-w-[240px]">
              追踪前沿技术、行业趋势与深度解读
            </p>
            <div class="mt-5 w-[150px] h-[150px] rounded-xl bg-surface-muted overflow-hidden border border-line/50 flex items-center justify-center">
              <img src="@/assets/PEC.webp" alt="PEC 公众号" class="w-full h-full object-cover" />
            </div>
            <p class="mt-4 text-xs text-ink-tertiary">扫码关注，洞悉 AI 风向</p>
          </div>

          <!-- 软积木 -->
          <div class="group flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white border border-line shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-[#FFF3E0] flex items-center justify-center mb-4">
              <Icon icon="lucide:building-2" class="w-6 h-6 text-[#D97706]" />
            </div>
            <h3 class="text-lg font-semibold text-ink-primary">公司动态</h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed max-w-[240px]">
              了解企业新闻、活动资讯与成长故事
            </p>
            <div class="mt-5 w-[150px] h-[150px] rounded-xl bg-surface-muted overflow-hidden border border-line/50 flex items-center justify-center">
              <img src="@/assets/rjm.webp" alt="软积木公众号" class="w-full h-full object-cover" />
            </div>
            <p class="mt-4 text-xs text-ink-tertiary">扫码关注，见证每一步成长</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
