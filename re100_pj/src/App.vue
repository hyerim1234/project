<template>
  <HeaderLayoutVue @tab-selected="handleTabChange"/>
  <div v-if="currentTab === '실시간 정보'">
    <main-content-cards-vue/>
    <EnergyTable/>
  </div>
  <div v-else-if="currentTab === '이행률'">
    <ComplianceRateView/>
  </div>
  <div v-else-if="currentTab === '관리'">
    <TabContent/>
  </div>

  <div v-else-if="currentTab === '설정'">
    <EnergyTable/>
  </div>
  <FooterLayoutVue/>
</template>

<script>
import HeaderLayoutVue from '@/components/layouts/HeaderLayout.vue'
import FooterLayoutVue from '@/components/layouts/FooterLayout.vue'
import EnergyTable from '@/components/widget/EnergyTable.vue'
import ComplianceRateView from '@/views/ComplianceRateView.vue'
import MainContentCardsVue from '@/components/ui/MainContentCards.vue'
import TabContent from '@/components/ui/TabContent.vue'
import CommonView from '@/views/CommonView.vue'

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
      currentTab: '관리' // 애플리케이션 로드 시 '실시간 정보' 탭이 기본적으로 선택되도록 설정
    }
  },
  methods: {
    handleTabChange (tab) {
      this.currentTab = tab
    }
  }
}
</script>

<style scoped>
/* Tailwind CSS is utility-first, so most styling is done in the template via class bindings */
</style>
