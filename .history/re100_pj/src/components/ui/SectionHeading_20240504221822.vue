<template>
  <div class="px-4">
    <nav class="flex space-x-4">
      <a v-for="tab in tabs" :key="tab"
         :class="['py-2 px-4 text-sm font-medium text-center rounded-fullcursor-pointer',
                  currentTab === tab ? 'bg-blue-600 text-white-100 rounded-full' : 'text-gray-600 border-transparent']"
         @click="currentTab = tab">
        {{ tab }}
      </a>
    </nav>
    <!-- 조건부 렌더링을 사용한 컴포넌트 표시 -->
    <div v-if="currentTab === '실시간 정보'" class="grid grid-rows-2 gap-4">
      <div class="">
        <progress-circle></progress-circle>
        <energy-chart></energy-chart>
        <power-usage></power-usage>
        <site-count></site-count>
      </div>

      <div>
      <energy-table></energy-table>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import ProgressCircle from '@/components/widget/ProgressCircle.vue';
  import EnergyChart from '@/components/widget/EnergyChart.vue';
  import PowerUsage from '@/components/widget/PowerUsage.vue';
  import SiteCount from '@/components/widget/SiteCount.vue';
  import EnergyTable from '@/components/widget/EnergyTable.vue';

  export default {
    components: {
      ProgressCircle,
      EnergyChart,
      PowerUsage,
      SiteCount,
      EnergyTable  
    },

    data() {
      return {
        currentTab: '실시간 정보',
        tabs: ['실시간 정보', '이행률', '관리', '설정', 'Hired']
      };
    }
  }
  </script>
  
  <style scoped>
  /* Tailwind CSS is utility-first, so most styling is done in the template via class bindings */
  </style>
  