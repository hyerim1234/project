<template>
  <div class="bg-white shadow rounded-lg p-4">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th class="py-3 px-6"></th> <!-- Empty column for space -->
          <th scope="col" class="py-3 px-6">이름</th>
          <th scope="col" class="py-3 px-6">개소수</th>
          <th scope="col" class="py-3 px-6">용량</th>
          <th scope="col" class="py-3 px-6">형태</th>
          <th scope="col" class="py-3 px-6">달성률</th>
          <th scope="col" class="py-3 px-6">위치</th>
        </tr>
      </thead>

      <tbody class="bg-white-100 divide-y divide-gray-300">
        <tr class="bg-white">
          <td @click="toggleDetails" class="cursor-pointer p-4">
            <!-- Toggle Icon -->
            <svg class="transform w-8 h-8" :class="{'rotate-180': showDetails}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>

          </td>
          <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">이름</td>
          <td class="py-4 px-6">300MW</td>
          <td class="py-4 px-6">76%</td>
          <td class="py-4 px-6">자가소비 (종량)</td>
          <td class="py-4 px-6">자가소비 (종량)</td>
          <td class="py-4 px-6">자가소비 (종량)</td>
        </tr>
        <!-- Expandable row detail -->
        <tr v-if="showDetails" class="bg-white-100">
          <table>
            <thead class="text-xs text-gray-700 uppercase bg-white-50">
              <tr>
                <th class="py-3 px-6"></th> <!-- Empty column for space -->
                <th scope="col" class="py-3 px-6">이름</th>
                <th scope="col" class="py-3 px-6">전력</th>
                <th scope="col" class="py-3 px-6">상태</th>
                <th scope="col" class="py-3 px-6">가동</th>
                <th scope="col" class="py-3 px-6">발전량</th>
                <th scope="col" class="py-3 px-6">병렬타입</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">발전소 1</td>
                <td class="py-4 px-6">300MW</td>
                <td class="py-4 px-6">가동</td>
                <td class="py-4 px-6">300MW</td>
                <td class="py-4 px-6">역송병렬</td>
              </tr>
            </tbody>
          </table>
        </tr>
      </tbody>
    </table>
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
