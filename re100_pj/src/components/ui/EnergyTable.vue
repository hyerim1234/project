<template>
  <div class="bg-white shadow rounded-lg">
    <h1>실시간 총전력현황</h1>
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3"></th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이름</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">개소수</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">용량</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">형태</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">달성률</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">위치</th>
        </tr>
      </thead>

      <tbody class="bg-white divide-y divide-gray-200">
        <tr @click="toggleDetails" class="cursor-pointer">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ item.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ item.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.count }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.capacity }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.type }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.achievement }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.location }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDetails: false,
      item: {
        name: '이름',
        count: '300MW',
        capacity: '76%',
        type: '자가소비 (종량)',
        achievement: '50%',
        location: '자가소비 (종량)'
      },
      item2: {
        name: '이름',
        count: '300MW',
        status: '가동%',
        amount: '300MW',
        type: '역송병렬%'
      }
    }
  },
  methods: {
    toggleDetails () {
      this.showDetails = !this.showDetails
    }
  }
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
