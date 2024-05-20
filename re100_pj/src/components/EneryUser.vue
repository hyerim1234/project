<template>
  <div class="p-4 bg-white shadow-md rounded-lg">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-bold">RE100 시나리오</h2>
      <button class="text-sm text-white-800 border border-blue-500 rounded px-3 py-1 0 hover:font-bold transition">
        조건 설정
      </button>
    </div>
   <div class="bg-white-25 border rounded-md p-4">
      <ul class="gap-2 grid grid-cols-3">
          <li class="grid grid-cols-2">
            <span class="text-white-500">참여년도</span>
            <span class="text-md text-white-900">2022년</span>
          </li>
          <li class="grid grid-cols-2">
            <span class="text-gray-500">이행목표율</span>
            <span class="text-md ">100%</span>
          </li>

          <li class="grid grid-cols-2">
            <span class="text-gray-500">현재 이행률</span>
            <span class="text-md ">12.2%</span>
          </li>
      </ul>
      <ul class="gap-2 grid grid-cols-3">
        <li class="grid grid-cols-2">
          <span class="text-gray-500">이행목표년도</span>
          <span class="text-md ">2050년</span>
        </li>
        <li class="grid grid-cols-2">
          <span class="text-gray-500">필요 재생에너지</span>
          <span class="text-md ">연 3,800MW</span>
        </li>
        <li class="grid grid-cols-2">
          <span class="text-gray-500">예상 이행비용</span>
          <span class="text-md ">약 34,000만원</span>
        </li>
      </ul>
    </div>

    <!-- 재생에너지 사용량 -->
    <h2 class="text-lg font-bold mt-[34px]">재생 에너지 사용량</h2>
    <div class="space-y-4">
      <div class="p-4 border rounded-lg">
        <span class="text-purple-500 font-bold">자가소비</span>
        <div class="grid grid-cols-2">
          <span>이행률</span>
          <span class="font-bold grid grid-cols-2">42.4</span>
        </div>
        <div>
          <span>이행비용</span>
          <span>2.4억원</span>
          <span></span>
          <span>단가 278.1원/MW</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RE100Scenario'
}
</script>

<style scoped>
/* 스타일을 추가할 수 있습니다. */
</style>
