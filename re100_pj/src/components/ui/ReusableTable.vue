<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
    <table class="w-full text-sm text-center text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-300">
        <tr>
          <th v-for="header in headers" :key="header" scope="col" class="px-6 py-3">
            {{ header }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(row, index) in rows" :key="index" class="bg-white border-b hover:bg-gray-50">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
