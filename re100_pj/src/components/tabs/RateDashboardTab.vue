<template>

  <div class="flex flex-wrap justify-between items-center gap-6  bg-gray-50">
    <div v-for="card in cards" :key="card.title" class="bg-white rounded-lg shadow-md  flex flex-col items-center">
      <progress-circle :percentage="card.percentage" />
      <h3 class="text-lg font-semibold mt-2">{{ card.title }}</h3>
      <p class="text-gray-600">{{ card.subtitle }}</p>
    </div>
  </div>

  <div class="mt-10">
    <!-- <energy-table></energy-table> -->
    발전소 리스트 테이블 준비중...
  </div>

</template>

<script>
import ProgressCircle from '@/components/chart/ProgressCircle.vue'
import EnergyTable from '../ui/EnergyTable.vue'

export default {
  components: {
    ProgressCircle,
    EnergyTable
  },
  data () {
    return {
      // currentTab: '',
      // tabs: ['실시간 정보', '이행률', '관리', '설정', 'Hired'],
      cards: [
        { title: "RE100 이행률", subtitle: "56%", percentage: 56 },
        { title: "이행현황", subtitle: "20개", percentage: 56 },
        { title: "전력 사용량", subtitle: "300.3 MW", percentage: 25 }
      ]
    }
  }
}
</script>
