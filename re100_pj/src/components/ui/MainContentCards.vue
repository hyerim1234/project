<template>
  <div class="justify-between items-center  bg-gray-50 flex ">
    <div v-for="card in cards" :key="card.title" class="rounded-lg shadow-md w-full  pl-4 mx-6 h-[280px] relative  z-1">
      <h3 class="text-lg font-semibold mt-2">{{ card.title }}</h3>
      <ProgressCircle :percentage="card.percentage" />
      <!-- <p class="text-gray-600">{{ card.subtitle }}</p> -->
    </div>
  </div>
</template>

<script>
import ProgressCircle from '@/components/widget/ProgressCircle.vue'

export default {
  components: {
    ProgressCircle
  },
  data () {
    return {
      currentTab: '',
      cards: [
        { title: "RE100 이행률", subtitle: "56%", percentage: 56 },
        { title: "이행현황", subtitle: "20개", percentage: 56 },
        { title: "전력 사용량", subtitle: "300.3 MW", percentage: 25 },
        { title: "발전소 개소수", subtitle: "20개", percentage: 56 }
      ]
    }
  }
}
</script>
