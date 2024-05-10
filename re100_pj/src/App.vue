<template>
  <nav class="bg-[#0B2249] h-[354px]">
    <!-- Header Layout with tab selection event -->
    <HeaderLayoutVue @tab-selected="handleTabChange"/>

    <div v-if="currentTab === '실시간 정보'">
      <MainContentCardsVue/>
      <EnergyTable/>
    </div>
    <div v-else-if="currentTab === '이행률'">
      <ComplianceRateView/>
    </div>
    <div v-else-if="currentTab === '관리'">
      <TabContent/>
    </div>
    <div v-else-if="currentTab === '설정'">
      <ComplianceRateView/>
    </div>
    <FooterLayoutVue/>
  </nav>
</template>

<script>
import HeaderLayoutVue from '@/components/layouts/HeaderLayout.vue'
import FooterLayoutVue from '@/components/layouts/FooterLayout.vue'
import EnergyTable from '@/components/ui/EnergyTable.vue'
import ComplianceRateView from '@/views/rate/ComplianceRateView.vue'
import MainContentCardsVue from '@/components/ui/MainContentCards.vue'
import TabContent from '@/components/ui/TabContent.vue'
import CommonView from '@/views/manage/CommonView.vue'

export default {
  components: {
    HeaderLayoutVue,
    FooterLayoutVue,
    EnergyTable,
    MainContentCardsVue,
    ComplianceRateView,
    TabContent,
    CommonView
  },
  data () {
    return {
      currentTab: '실시간 정보', // 초기 탭 설정
      //tabs: ['실시간 정보', '이행률', '관리', '설정']
    }
  },
  // 예를 들어, HeaderLayoutVue에서 탭을 클릭했을 때 다음과 같은 메소드가 호출됩니다.
  methods: {
    // onTabClick (tabName) {
    //   console.log(tabName)
    //   this.$emit('tab-selected', tabName)
    // }
    handleTabChange (tab) {
      this.currentTab = tab
    }
  }
}
</script>
