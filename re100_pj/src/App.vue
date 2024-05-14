<template>
  <nav class="bg-[#0B2249] h-[354px]">
    <!-- Header Layout with tab selection event -->
    <HeaderLayoutVue @tab-selected="handleTabChange"/>
    <div v-if="currentTab === tabs.REAL_TIME_INFO">
      <MainContentCardsVue/>
      <EnergyTable/>
    </div>
    <div v-else-if="currentTab === tabs.COMPLIANCE_RATE">
      <ComplianceRateView/>
    </div>
    <div v-else-if="currentTab === tabs.MANAGEMENT">
      <TabContent/>
    </div>
    <div v-else-if="currentTab === tabs.SETTINGS">
      <SettingView/>
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
import SettingView from '@/views/setting/SettingView.vue'

const TABS = {
  REAL_TIME_INFO: '실시간 정보',
  COMPLIANCE_RATE: '이행률',
  MANAGEMENT: '관리',
  SETTINGS: '설정'
}

export default {
  components: {
    HeaderLayoutVue,
    FooterLayoutVue,
    EnergyTable,
    MainContentCardsVue,
    ComplianceRateView,
    TabContent,
    CommonView,
    SettingView
  },
  data () {
    return {
      currentTab: TABS.REAL_TIME_INFO,
      tabs: TABS // 초기 탭 설정 및 TABS 객체 포함
    }
  },
  methods: {
    handleTabChange (tab) {
      console.log('Tab changed to:', tab)
      this.currentTab = tab
    }
  },
  created () {
    console.log('App created with initial tab:', this.currentTab)
  }
}
</script>
