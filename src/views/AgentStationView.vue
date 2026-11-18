<script setup lang="ts">
import { ref, provide } from 'vue'
import AgentHero from '../sections/agent/AgentHero.vue'
import AgentPainPoint from '../sections/agent/AgentPainPoint.vue'
import AgentSimplicity from '../sections/agent/AgentSimplicity.vue'
import AgentHighlights from '../sections/agent/AgentHighlights.vue'
import AgentHardwareSpec from '../sections/agent/AgentHardwareSpec.vue'
import AgentModes from '../sections/agent/AgentModes.vue'
import AgentEcosystem from '../sections/agent/AgentEcosystem.vue'
import AgentScenarios from '../sections/agent/AgentScenarios.vue'
import AgentCompare from '../sections/agent/AgentCompare.vue'
import AgentVersions from '../sections/agent/AgentVersions.vue'
import AgentPricing from '../sections/agent/AgentPricing.vue'
import AgentFinalCTA from '../sections/agent/AgentFinalCTA.vue'
import EnterpriseModal from '../components/EnterpriseModal.vue'

const showModal = ref(false)

function openModal() {
  showModal.value = true
}

provide('agentStationOpenModal', openModal)
</script>

<template>
  <div>
    <AgentHero />
    <AgentPainPoint />
    <AgentSimplicity />
    <AgentHighlights />
    <AgentEcosystem />
    <AgentHardwareSpec />
    <AgentModes />
    <AgentScenarios />
    <AgentCompare />
    <AgentVersions />
    <AgentPricing />
    <AgentFinalCTA />

    <EnterpriseModal v-model="showModal" />
  </div>
</template>
