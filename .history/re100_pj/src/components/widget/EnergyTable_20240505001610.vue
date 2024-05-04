<template>
  <div class="bg-white shadow rounded-lg p-4">
    <div class="flex flex-col">
      <!-- Table Header -->
      <div class="flex justify-between text-gray-700 uppercase bg-gray-50 p-3">
        <div class="w-1/6"></div>
        <div class="w-1/6">이름</div>
        <div class="w-1/6">개소수</div>
        <div class="w-1/6">용량</div>
        <div class="w-1/6">형태</div>
        <div class="w-1/6">달성률</div>
        <div class="w-1/6">위치</div>
      </div>
      <!-- Table Body -->
      <div @click="toggleDetails" class="flex justify-between items-center bg-white p-3 cursor-pointer">
        <svg class="w-6 h-6 transition-transform duration-300" :class="{'rotate-180': showDetails}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
        <div class="w-1/6">이름</div>
        <div class="w-1/6">300MW</div>
        <div class="w-1/6">76%</div>
        <div class="w-1/6">자가소비 (종량)</div>
        <div class="w-1/6">자가소비 (종량)</div>
        <div class="w-1/6">자가소비 (종량)</div>
      </div>
      <!-- Expandable Row Detail -->
      <div v-if="showDetails" class="flex flex-col bg-gray-100 p-3">
        <div>상세 정보</div>
        <div class="flex justify-between">
          <div class="w-1/6">300MW</div>
          <div class="w-1/6">가동</div>
          <div class="w-1/6">300MW</div>
          <div class="w-1/6">역송병렬</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
}
</script>

<style scoped>
/* Tailwind CSS is used directly in the class attributes for responsive and visual styles */
.rotate-180 {
  transform: rotate(180deg);
}
</style>
