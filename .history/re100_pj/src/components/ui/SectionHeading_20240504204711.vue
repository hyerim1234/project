<template>
    <div class="border-b-2">
      <nav class="flex space-x-4">
        <a v-for="tab in tabs" :key="tab" 
           :class="['py-2 px-4 text-sm font-medium text-center rounded-full border-b-2  cursor-pointer', 
                   currentTab === tab ? 'bg-blue-600 cursor-pointer text-white-100  rounded-full ' : 'text-gray-600 border-transparent']"
           @click="currentTab = tab">
          {{ tab }}
        </a>
      </nav>
    </div>
    <!-- 조건부 렌더링을 사용한 컴포넌트 표시 -->
    <div v-if="currentTab === '실시간 정보'">
      <progress-circle></progress-circle>
    </div>
  </div>
  </template>
  
  <script>
  export default {
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
  