<template>
  <div class="bg-[#f2f4f7] min-h-screen">
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
        <div  class="max-h-[600px] p-10">
          <CommonView/>
        </div>
      </div>
      <!-- 데이터가 있으면 데이터를 표시하는 컴포넌트 렌더링 -->
      <div v-else>

      </div>
    </div>
  </div>
</template>

<script>
// 가정: CommonView 컴포넌트가 존재하고, 이를 가져옵니다.
import CommonView from '@/views/CommonView.vue';

export default {
  components: {
    CommonView
  },
  data() {
    return {
      currentTab: '고객사 관리',
      tabs: ['고객사 관리', '발전소 관리', '발전소 할당'],
      hasCustomerData: false // 고객사 관리 데이터의 유무
    };
  }
}
</script>

<style scoped>
/* 필요에 따른 스타일 추가 */
body{
  background: #f2f4f7;

}
</style>
