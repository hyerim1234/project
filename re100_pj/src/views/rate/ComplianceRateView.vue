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
    <div v-if="currentTab === '대시보드'" class="bg-[#f2f4f7]">
      <!-- '고객사 관리' 탭의 내용을 검사하고, 데이터가 없으면 메시지 표시 -->
      <div v-if="!hasCustomerData">
        <div class="max-h-[600px] p-10">
          <CommonView/>
        </div>
      </div>
      <!-- 데이터가 있으면 데이터를 표시하는 컴포넌트 렌더링 -->
      <div v-else-if="hasCustomerData">
        <div  class="max-h-[600px] p-10">
          <rate-dashboard-tab></rate-dashboard-tab>
        </div>
      </div>
    </div>

    <div v-else-if ="currentTab === '발전소 정보'">
      <div v-if="!hasCustomerData">
        <div class="max-h-[600px] p-10">
          <CommonView/>
        </div>
      </div>
      <div v-else-if="hasCustomerData">
        <div  class="max-h-[600px] p-10">
          <rate-plant-info-tab></rate-plant-info-tab>
        </div>
      </div>
    </div>

    <div v-else-if ="currentTab === '이행현황'">
      <div v-if="!hasCustomerData">
        <div class="max-h-[600px] p-10">
          <CommonView/>
        </div>
      </div>
      <div v-else-if="hasCustomerData">
        <div  class="max-h-[600px] p-10">
          <rate-current-tab></rate-current-tab>
        </div>
      </div>
    </div>

    <div v-else-if ="currentTab === '리포트'">
      <div v-if="!hasCustomerData">
        <div class="max-h-[600px] p-10">
          <CommonView/>
        </div>
      </div>
      <div v-else-if="hasCustomerData">
        <div  class="max-h-[600px] p-10">
          <rate-report-tab></rate-report-tab>
        </div>
      </div>
    </div>

    <div v-else-if ="currentTab === '이행관리'">
      <div v-if="!hasCustomerData">
        <div class="max-h-[600px] p-10">
          <CommonView/>
        </div>
      </div>
      <div v-else-if="hasCustomerData">
        <div  class="max-h-[600px] p-10">
          <rate-manage-tab></rate-manage-tab>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RateDashboardTab from '@/components/tabs/RateDashboardTab.vue'
import RatePlantInfoTab from '@/components/tabs/RatePlantInfoTab.vue'
import RateReportTab from '@/components/tabs/RateReportTab.vue'
import RateManageTab from '@/components/tabs/RateManageTab.vue'
import RateCurrentTab from '@/components/tabs/RateCurrentTab.vue'
// 가정: CommonView 컴포넌트가 존재하고, 이를 가져옵니다.

export default {
  components: {
    RateDashboardTab,
    RatePlantInfoTab,
    RateReportTab,
    RateManageTab,
    RateCurrentTab
  },
  data () {
    return {
      showModal: false,
      currentTab: '대시보드',
      tabs: ['대시보드', '발전소 정보', '이행현황' , '리포트', '이행관리'],
      hasCustomerData: true
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
