<template>
  <div class="p-6">
    <h1 class="text-lg font-bold">고객목록</h1>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
      <table class="w-full text-sm text-center text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-300">
          <tr>
            <th scope="col" class="px-6 py-3">고객목록</th>
            <th scope="col" class="px-6 py-3">이메일주소</th>
            <th scope="col" class="px-6 py-3">연락처</th>
            <th scope="col" class="px-6 py-3">발전소 개수</th>
            <th scope="col" class="px-6 py-3">총용량</th>
            <th scope="col" class="px-6 py-3">생성일</th>
            <th scope="col" class="px-6 py-3">비밀번호</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-50" v-for="(customer, index) in customers" :key="index">
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ customer.name }}</td>
            <td class="px-6 py-4">{{ customer.email }}</td>
            <td class="px-6 py-4">{{ customer.phone }}</td>
            <td class="px-6 py-4">{{ customer.plants }}</td>
            <td class="px-6 py-4">{{ customer.capacity }}</td>
            <td class="px-6 py-4">{{ customer.created }}</td>
            <td class="px-6 py-4">
              <button @click="openPasswordModal" class="text-gray-800 font-bold text-lg-center hover:underline border border-2 border-blue-400 rounded-md p-2">
                변경
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <nav class="flex items-center justify-between pt-4 mx-auto" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">100</span></span>
        <ul class="inline-flex -space-x-px text-sm h-8">
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 leading-tight text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
          </li>
        </ul>
      </nav>
    </div>
    <PasswordResetModal :show="showPasswordModal" @close="closePasswordModal" />
  </div>
</template>

<script>
import PasswordResetModal from '../modal/PwModal.vue'

export default {
  components: {
    PasswordResetModal
  },
  data () {
    return {
      customers: [
        { name: '사용자명1', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명2', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명3', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명4', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명5', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명6', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명7', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명8', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명9', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명10', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명11', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' },
        { name: '사용자명12', email: 're101010@hallsk', phone: '010-1234-1234', plants: 1, capacity: '80MW', created: '2024-04-04' }
      ],
      showPasswordModal: false
    }
  },
  methods: {
    openPasswordModal () {
      this.showPasswordModal = true
    },
    closePasswordModal () {
      this.showPasswordModal = false
    },
    cancel () {
      console.log('Profile update cancelled')
    }
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
