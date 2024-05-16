<template>
  <div class="flex justify-between items-center">
    <div v-for="card in cards" :key="card.title" class="relative z-20 rounded-lg shadow-lg w-1/4 mx-2 h-[280px] text-gray-500 pt-6 pl-6 bg-white">
      <h3 class="text-lg font-semibold mt-2">{{ card.title }}</h3>
      <ProgressCircle :percentage="card.percentage" class="mt-4"/>
    </div>
  </div>
</template>

<script>
import ProgressCircle from '@/components/chart/ProgressCircle.vue';

export default {
  components: {
    ProgressCircle
  },
  data() {
    return {
      cards: [
        { title: 'RE100 이행률', percentage: 50 },
        { title: '이행현황', percentage: 40 },
        { title: '전력 사용량', percentage: 16 },
        { title: '발전소 개소수', percentage: 20 }
      ]
    };
  }
};
</script>

<style scoped>
/* 필요한 경우 여기에 사용자 정의 스타일을 추가하세요 */
</style>
