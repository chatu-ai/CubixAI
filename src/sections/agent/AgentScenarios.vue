<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

const scenarios = [
  { image: new URL('../../assets/zft/cj1.webp', import.meta.url).href, title: '邮件助理', desc: '自动分类、摘要、起草回复，重要邮件不再漏看' },
  { image: new URL('../../assets/zft/cj2.webp', import.meta.url).href, title: '自媒体助理', desc: '从选题、成稿到排版，一条龙产出图文、视频' },
  { image: new URL('../../assets/zft/cj3.webp', import.meta.url).href, title: '资讯舆情监控', desc: '定时追踪行业新闻与竞品动态，自动生成简报' },
  { image: new URL('../../assets/zft/cj4.webp', import.meta.url).href, title: '数据分析师', desc: '合并表格、整理报表，生成可视化报告' },
  { image: new URL('../../assets/zft/cj5.webp', import.meta.url).href, title: 'PPT 助理', desc: '一句话生成大纲与演示文稿，会议资料随手出' },
  { image: new URL('../../assets/zft/cj6.webp', import.meta.url).href, title: '更多场景，持续解锁中', desc: '你的工作流还能怎么用智方体？欢迎告诉我们，下一个场景就为你做出来' },
]

const audiences = [
  { title: '内容创作者', desc: '写稿、改稿、头脑风暴，选题库和素材永远在自己手里' },
  { title: '自由职业者', desc: '客户资料、合同、报价在本地处理，对客户有交代' },
  { title: '学生与研究者', desc: '论文、文献、数据分析，不上传、不限次数' },
  { title: '企业团队', desc: '经验沉淀为团队 Skills，多设备统一管理，权限可控' },
]
</script>

<template>
  <section ref="sectionRef" class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          应用场景
        </h2>
        <p class="mt-4 text-lg text-ink-secondary">
          重复工作交给 AI，你只做判断
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="s in scenarios"
          :key="s.title"
          class="flex flex-col p-6 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="aspect-video rounded-xl overflow-hidden mb-4">
            <img
              :src="s.image"
              :alt="s.title"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-lg font-semibold text-ink-primary">{{ s.title }}</h3>
          <p class="mt-2 text-sm text-ink-secondary flex-1">{{ s.desc }}</p>
        </div>
      </div>

      <!-- 适用人群 -->
      <div class="mt-16 md:mt-20">
        <h3 class="text-center text-2xl md:text-3xl font-semibold text-ink-primary tracking-tight mb-8">
          谁在用智方体
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="a in audiences"
            :key="a.title"
            class="p-6 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <h4 class="text-base font-semibold text-ink-primary">{{ a.title }}</h4>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed">{{ a.desc }}</p>
          </div>
        </div>
      </div>

      <!-- 底部条 -->
      <div class="mt-10 p-5 rounded-2xl bg-[#E6F5FB] border border-[#2DB4E6]/20 text-center text-base md:text-lg font-medium text-[#1A8BC4] leading-relaxed">
        手里有敏感资料、又不想被技术门槛拦住——一人公司（OPC）的必备工具
      </div>
    </div>
  </section>
</template>
