<template>
  <div class="bg-white shadow rounded-lg pt-10">
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
          <td>
            <!-- Toggle Icon -->
            <svg class="w-6 h-6 transform" :class="{'rotate-180': showDetails}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ item.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.count }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.capacity }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.type }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.achievement }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.location }}</td>
        </tr>

        <!-- toggle exapnd row table -->
        <tr v-if="showDetails" class="bg-white">
          <td colspan="7">
            <table class="py-4 px-6 w-full">
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

              <tbody>
                <tr @click="toggleDetails" class="cursor-pointer">
                
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ item2.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item2.count }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item2.status }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item2.type }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item2.amount }}</td>
              </tr>
              </tbody>
            </table>
          </td>
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
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  }
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
