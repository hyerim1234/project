<template>
  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
    <table class="min-w-full divide-y divide-gray-300">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="py-3 px-6 text-left text-sm font-semibold text-gray-900">이름</th>
          <th scope="col" class="py-3 px-6 text-left text-sm font-semibold text-gray-900">계약</th>
          <th scope="col" class="py-3 px-6 text-left text-sm font-semibold text-gray-900">300MW</th>
          <th scope="col" class="py-3 px-6 text-left text-sm font-semibold text-gray-900">자가소비 (종량)</th>
          <th scope="col" class="py-3 px-6 text-left text-sm font-semibold text-gray-900">76%</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="py-4 px-6 text-sm font-medium text-gray-900">발전소 A</td>
          <td class="py-4 px-6 text-sm font-medium text-gray-900">2개소</td>
          <td class="py-4 px-6 text-sm font-medium text-gray-900">300MW</td>
          <td class="py-4 px-6 text-sm font-medium text-gray-900">자가소비 (종량)</td>
          <td class="py-4 px-6 text-sm font-medium text-gray-900">76%</td>
        </tr>
      </tbody>
    </table>
    <input type="checkbox" id="expand" class="hidden" @change="toggleTable">
    <label for="expand" class="cursor-pointer">더 보기</label>
    <div v-if="showSecondTable">
      <table class="min-w-full divide-y divide-gray-300 mt-4">
        <!-- 두 번째 테이블의 내용 -->
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSecondTable: false
    };
  },
  methods: {
    toggleTable() {
      this.showSecondTable = !this.showSecondTable;
    }
  }
}
</script>

<style scoped>
/* Tailwind CSS is already being applied within class attributes */
</style>
