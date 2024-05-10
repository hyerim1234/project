<template>
  <div class="bg-[#f2f4f7]">
    <nav class="flex space-x-4 bg-[#0b2549]">
      <a v-for="tab in tabs" :key="tab"
         :class="['py-2 px-4 text-sm font-medium text-center rounded-full cursor-pointer',
                  currentTab === tab ? 'bg-blue-600 text-white rounded-full' : 'text-gray-600 border-transparent']"
         @click="currentTab = tab">
        {{ tab }}
      </a>
    </nav>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      currentTab: '실시간 정보',
      tabs: ['실시간 정보', '이행률', '관리', '설정']
    }
  }
}
</script>
