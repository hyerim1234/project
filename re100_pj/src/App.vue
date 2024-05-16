<template>
  <div id="app" class="bg-[#f2f4f7] min-h-screen">
    <!-- Header Layout with tab selection event -->
    <HeaderLayoutVue @tab-selected="handleTabChange"/>
    <!-- 실시간 정보 -->
    <div v-if="currentTab === tabs.REAL_TIME_INFO" class="relative z-20 bottom-[100px]">
      <MainContentCardsVue/>
      <EnergyTable/>
    </div>
    <!-- 이행률 -->
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import HeaderLayoutVue from '@/components/layouts/HeaderLayout.vue';
import FooterLayoutVue from '@/components/layouts/FooterLayout.vue';
import MainContentCardsVue from '@/components/ui/MainContentCards.vue';
import EnergyTable from '@/components/ui/EnergyTable.vue';
import ComplianceRateView from '@/views/rate/ComplianceRateView.vue';
import TabContent from '@/components/ui/TabContent.vue';
import SettingView from '@/views/setting/SettingView.vue';

const TABS = {
  REAL_TIME_INFO: '실시간 정보',
  COMPLIANCE_RATE: '이행률',
  MANAGEMENT: '관리',
  SETTINGS: '설정'
};

export default {
  name: 'App',
  components: {
    HeaderLayoutVue,
    FooterLayoutVue,
    MainContentCardsVue,
    EnergyTable,
    ComplianceRateView,
    TabContent,
    SettingView
  },
  computed: {
    ...mapGetters(['currentTab']),
    tabs() {
      return TABS;
    }
  },
  methods: {
    ...mapActions(['changeTab']),
    handleTabChange(tab) {
      this.changeTab(tab);
    }
  },
  created() {
    console.log('App created with initial tab:', this.currentTab);
  }
};
</script>

<style>
/* 전역 스타일은 index.css에 추가 */
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  
  #app {
    background-color: #f2f4f7;
    min-height: 100vh;
  }
  
  .table-container {
    width: 100%;
    overflow-x: auto;
  }
  
  .bg-white {
    background-color: #ffffff;
  }
  
  .shadow-lg {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  .rounded-lg {
    border-radius: 0.5rem;
  }
  
  .p-6 {
    padding: 1.5rem;
  }
  
  .mt-4 {
    margin-top: 1rem;
  }
  
  .pt-6 {
    padding-top: 1.5rem;
  }
  
  .pl-6 {
    padding-left: 1.5rem;
  }
  
</style>
