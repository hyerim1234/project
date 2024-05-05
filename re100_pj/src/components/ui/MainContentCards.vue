<template>
    <div class="flex flex-wrap justify-center items-center gap-6 p-6 bg-gray-50">
      <div v-for="card in cards" :key="card.title" class="bg-white rounded-lg shadow-md p-4 w-64 flex flex-col items-center">
        <ProgressCircle :percentage="card.percentage" />
        <h3 class="text-lg font-semibold mt-2">{{ card.title }}</h3>
        <p class="text-gray-600">{{ card.subtitle }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import ProgressCircle from '@/components/widget/ProgressCircle.vue'; // Asumming you have a ProgressCircle component
  
  export default {
    components: {
      ProgressCircle
    },
    data() {
      return {
        cards: [
          { title: "RE100 이행률", subtitle: "56%", percentage: 56 },
          { title: "이행현황", subtitle: "20개", percentage: 56 },
          { title: "전력 사용량", subtitle: "300.3 MW", percentage: 25 },
          { title: "발전소 개소수", subtitle: "20개", percentage: 56 },

        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .circular-chart {
    width: 100%; /* Adjust to control size of the circle */
    max-width: 150px; /* Maximum size */
  }
  .circle-bg {
    stroke: #eee; /* Background circle color */
  }
  .circle {
    transition: stroke-dasharray 0.6s ease; /* Animation effect */
  }
  </style>
  