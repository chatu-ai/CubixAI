<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'

const titleRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)
const transitionRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(cardsRef, { y: 30, delay: 0.15 })
useScrollReveal(transitionRef, { y: 20, delay: 0.3 })

const pains1 = [
  '环境配置、依赖冲突，一步卡住就放弃',
  'API、模型、Agent 部署全得自己摸索',
  '新工具层出不穷，升级维护跟不上',
]

const pains2 = [
  '企业资料上传云端，心里没底',
  '担心数据泄露与系统不稳定',
  '出了问题不知道找谁',
]

const pains3 = [
  '不知道 Agent 能做什么',
  '不知道如何把工具组合起来',
  '不清楚这些能力如何用于自己的工作',
]

const pains4 = [
  '学习成本高，上手慢',
  '升级维护麻烦，故障难排查',
  '新工具还在不断出现，跟进太累',
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-12 md:mb-16">
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink-primary tracking-tight whitespace-nowrap"
        >
          <span class="text-[#2DB4E6]">"</span>不会装、不敢装、不会用、不想折腾<span class="text-[#2DB4E6]">"</span>
        </h2>
        <p class="mt-6 text-2xl md:text-[28px] text-ink-secondary italic">
          AI 不该只是极客的玩具
        </p>
      </div>

      <div ref="cardsRef" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 卡 01 · 不会装 -->
        <div
          class="p-8 rounded-3xl bg-surface-card border border-line shadow-card"
        >
          <div class="flex items-center gap-2 mb-5">
            <span class="w-2 h-2 rounded-full bg-red-500" />
            <span class="text-sm font-semibold text-red-500">不会装</span>
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-5">
            技术门槛劝退
          </h3>
          <ul class="space-y-3">
            <li
              v-for="p in pains1"
              :key="p"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <Icon
                icon="lucide:x"
                class="w-4 h-4 text-red-400 shrink-0 mt-0.5"
              />
              {{ p }}
            </li>
          </ul>
        </div>

        <!-- 卡 02 · 不敢装 -->
        <div
          class="p-8 rounded-3xl bg-surface-card border border-line shadow-card"
        >
          <div class="flex items-center gap-2 mb-5">
            <span class="w-2 h-2 rounded-full bg-orange-500" />
            <span class="text-sm font-semibold text-orange-500">不敢装</span>
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-5">
            安全顾虑难消
          </h3>
          <ul class="space-y-3">
            <li
              v-for="p in pains2"
              :key="p"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <Icon
                icon="lucide:x"
                class="w-4 h-4 text-orange-400 shrink-0 mt-0.5"
              />
              {{ p }}
            </li>
          </ul>
        </div>

        <!-- 卡 03 · 不会用 -->
        <div
          class="p-8 rounded-3xl bg-surface-card border border-line shadow-card"
        >
          <div class="flex items-center gap-2 mb-5">
            <span class="w-2 h-2 rounded-full bg-amber-500" />
            <span class="text-sm font-semibold text-amber-500">不会用</span>
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-5">
            场景无从下手
          </h3>
          <ul class="space-y-3">
            <li
              v-for="p in pains3"
              :key="p"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <Icon
                icon="lucide:x"
                class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"
              />
              {{ p }}
            </li>
          </ul>
        </div>

        <!-- 卡 04 · 不想折腾 -->
        <div
          class="p-8 rounded-3xl bg-surface-card border border-line shadow-card"
        >
          <div class="flex items-center gap-2 mb-5">
            <span class="w-2 h-2 rounded-full bg-violet-500" />
            <span class="text-sm font-semibold text-violet-500">不想折腾</span>
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-5">
            维护成本太高
          </h3>
          <ul class="space-y-3">
            <li
              v-for="p in pains4"
              :key="p"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <Icon
                icon="lucide:x"
                class="w-4 h-4 text-violet-400 shrink-0 mt-0.5"
              />
              {{ p }}
            </li>
          </ul>
        </div>
      </div>

      <div ref="transitionRef" class="mt-12 text-center">
        <p class="text-xl md:text-2xl font-medium text-ink-primary">
          既要隐私安全，又要开箱即用——智方体，为此而生。
        </p>
      </div>
    </div>
  </section>
</template>
