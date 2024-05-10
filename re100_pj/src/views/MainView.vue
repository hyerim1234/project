<template>
    <div class="bg-[#f2f4f7]">
      <!-- Header Section -->
      <!-- <nav class="flex space-x-4 bg-[#0b2549]">
        <a v-for="tab in tabs" :key="tab"
           :class="['py-2 px-4 text-sm font-medium text-center rounded-full cursor-pointer',
                    currentTab === tab ? 'bg-blue-600 text-white rounded-full' : 'text-gray-600 border-transparent']"
           @click="currentTab = tab">
          {{ tab }}
        </a>
      </nav> -->
      <!-- Main Content Section -->
      <div class="flex flex-wrap justify-between items-center gap-6  bg-gray-50">
        <div v-for="card in cards" :key="card.title" class="bg-white rounded-lg shadow-md  flex flex-col items-center">
          <progress-circle :percentage="card.percentage" />
          <h3 class="text-lg font-semibold mt-2">{{ card.title }}</h3>
          <p class="text-gray-600">{{ card.subtitle }}</p>
        </div>
      </div>
    </div>
  </template>

<script>
import ProgressCircle from '@/components/chart/ProgressCircle.vue'

export default {
  components: {
    ProgressCircle
  },
  data () {
    return {
      // currentTab: '',
      // tabs: ['실시간 정보', '이행률', '관리', '설정', 'Hired'],
      cards: [
        { title: "RE100 이행률", subtitle: "56%", percentage: 56 },
        { title: "이행현황", subtitle: "20개", percentage: 56 },
        { title: "전력 사용량", subtitle: "300.3 MW", percentage: 25 },
        { title: "발전소 개소수", subtitle: "20개", percentage: 56}
      ]
    }
  }
}
</script>
