<template>
  <div class="bg-[#f2f4f7] min-h-screen mt-[-180px]">
    <nav class="flex space-x-4 bg-[#0b2549] pt-4 pl-8">
      <a v-for="tab in tabs" :key="tab"
         :class="['py-2 px-4 text-sm font-medium text-center cursor-pointer',
                  currentTab === tab ? 'bg-[#f2f4f7] text-[#0b2549] font-bold rounded-t-lg' : 'text-gray-600 border-transparent']"
         @click="currentTab = tab">
        {{ tab }}
      </a>
    </nav>

    <!-- 조건부 렌더링을 사용한 컴포넌트 또는 메시지 표시 -->
    <div v-if="currentTab === '고객사 관리'" class="bg-[#f2f4f7]">
      <!-- '고객사 관리' 탭의 내용을 검사하고, 데이터가 없으면 메시지 표시 -->
      <div v-if="!hasCustomerData">
        <div class="max-h-[600px] p-10">
          <CommonView/>
        </div>
      </div>
      <!-- 데이터가 있으면 데이터를 표시하는 컴포넌트 렌더링 -->
      <div v-else-if="hasCustomerData">
        <div  class="max-h-[600px] p-10">
          <energy-table></energy-table>
        </div>
      </div>
    </div>

    <div v-else-if ="currentTab === '발전소 관리'">
      <div v-if="!hasCustomerData">
        <div class="max-h-[600px] p-10">
          <CommonView/>
        </div>
      </div>
      <div v-else-if="hasCustomerData">
        <div  class="max-h-[600px] p-10">
          <arrange-plant-view></arrange-plant-view>
        </div>
      </div>
    </div>

    <div v-else-if ="currentTab === '발전소 할당'">
      <div v-if="!hasCustomerData">
        <div class="max-h-[600px] p-10">
          <CommonView/>
        </div>
      </div>
      <div v-else-if="hasCustomerData">
        <div  class="max-h-[600px] p-10">
          <plant-allo-view></plant-allo-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 가정: CommonView 컴포넌트가 존재하고, 이를 가져옵니다.
import CommonView from '@/views/manage/CommonView.vue'
import EnergyTable from './EnergyTable.vue'
import PlantAlloView from '@/views/manage/PlantAlloView.vue'
import ArrangePlantView from '@/views/manage/ArrangePlantView.vue'

export default {
  components: {
    CommonView,
    EnergyTable,
    PlantAlloView,
    ArrangePlantView
  },
  data () {
    return {
      showModal: false,
      currentTab: '고객사 관리',
      tabs: ['고객사 관리', '발전소 관리', '발전소 할당'],
      hasCustomerData: true
    }
  },
  computed: {
    title () {
      switch (this.currentTab) {
        case '고객사 관리':
          return '고객사 관리'
        case '발전소 관리':
          return '발전소 관리'
        case '발전소 할당':
          return '발전소 할당'
        default:
          return '타이틀 없음'
      }
    }
  }

}
</script>

<style scoped>
/* 필요에 따른 스타일 추가 */
body{
  background: #f2f4f7;
}
</style>
