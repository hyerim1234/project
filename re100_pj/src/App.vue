<template>
  <div class="bg-[#f2f4f7]">
    <nav class="flex space-x-4 bg-[#0b2549] py-4">
      <a v-for="tab in tabs" :key="tab"
         :class="['py-2 px-4 text-sm font-medium text-center rounded-full cursor-pointer',
                  currentTab === tab ? 'bg-blue-600 text-white-100 rounded-full' : 'text-gray-600 border-transparent']"
         @click="currentTab = tab">
        {{ tab }}
      </a>
    </nav>

    <!-- 조건부 렌더링을 사용한 컴포넌트 표시 -->
    <div v-if="currentTab === '실시간 정보'">
      <main-content-cards-vue></main-content-cards-vue>
      <energy-table></energy-table>
    </div>

    <div v-else-if="currentTab === '관리'">
      <TabContent></TabContent>
    </div>
  </div>
</template>

<script>
import MainContentCardsVue from '@/components/ui/MainContentCards.vue';
import EnergyTable from '@/components/widget/EnergyTable.vue';
import TabContent from '@/components/ui/TabContent.vue';

export default {
  components: {
    MainContentCardsVue,
    EnergyTable,
    TabContent
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
