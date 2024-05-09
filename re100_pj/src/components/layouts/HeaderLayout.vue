<template>
  <nav class="bg-[#0B2249] text-white-100 h-[354px]">
    <div class="max-w-full mx-auto flex justify-between items-center px-20 pt-14">
      <!-- Logo and brand name -->
      <div class="flex items-center space-x-4 font-semibold">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="RE100 Logo" />
        <span class="text-xl font-semibold">RE100 관리자 페이지</span>
        <ul class="hidden md:flex space-x-4">
          <li>
            <a href="#"
            :class="['py-2 px-4 text-sm font-medium text-center rounded-full cursor-pointer', currentTab ===! tab ? 'bg-blue-600 text-white-100 rounded-full' : 'text-gray-600 border-transparent']"
              @click="selectTab('실시간 정보')">
              실시간 정보
            </a>
          </li>
          <li>
            <a href="#"
            :class="['py-2 px-4 text-sm font-medium text-center rounded-full cursor-pointer', currentTab ===! tab ? 'bg-blue-600 text-white-100 rounded-full' : 'text-gray-600 border-transparent']"
              @click="selectTab('이행률')">
             이행률
            </a>
          </li>
          <li>
            <a href="#"
            :class="['py-2 px-4 text-sm font-medium text-center rounded-full cursor-pointer', currentTab === tab ? 'bg-blue-600 text-white-100 rounded-full' : 'text-gray-600 border-transparent']"
              @click="selectTab('관리')">
              관리
            </a>
          </li>
          <li>
            <a href="#"
            :class="['py-2 px-4 text-sm font-medium text-center rounded-full cursor-pointer', currentTab ===! tab ? 'bg-blue-600 text-white-100 rounded-full' : 'text-gray-600 border-transparent']"
              @click="selectTab('설정')">
              설정
            </a>
          </li>
        </ul>
      </div>

      <!-- Navigation Links -->
      <ul class="md:flex; justify-end">
        <li><a href="#" class="py-2 px-4 hover:bg-blue-700 rounded transition duration-300">로그인</a></li>
      </ul>
      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>

      <!-- Mobile Menu -->
      <div v-if="showMenu" class="absolute top-full left-0 w-full bg-blue-800 shadow-md md:hidden">
        <ul class="flex flex-col">
          <li><a href="#" class="block py-2 px-4 hover:bg-blue-700">실시간 정보</a></li>
          <li><a href="#" class="block py-2 px-4 hover:bg-blue-700">이행률</a></li>
          <li><a href="#" class="block py-2 px-4 hover:bg-blue-700">관리</a></li>
          <li><a href="#" class="block py-2 px-4 hover:bg-blue-700">설정</a></li>
          <li><a href="#" class="block py-2 px-4 hover:bg-blue-700">로그인</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      showMenu: false,
      selectedTab: null // 선택된 탭의 초기값은 null
    }
  },
  methods: {
    selectTab (tab) {
      this.selectedTab = tab // 사용자가 탭을 클릭할 때 selectedTab을 업데이트
    }
  }
}
</script>
