<template>
  <div class="flex justify-center space-x-8 rounded-lg">
    <div class="flex-col space-x-4">
      <div class="bg-[#ffffff] flex-col  h-[770px] w-[624px] rounded-lg p-8 space-y-4">
        <h1 class="font-medium text-lg"> 발전소 할당</h1>
        <div class="flex justify-between space-x-2">
          <!-- First form for country selection -->
          <form class="max-w-sm w-1/2">
            <select id="countries" class="border border-gray-300 text-grey-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option selected>조건1</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>

          <!-- Second form for country selection -->
          <form class="max-w-sm w-1/2">
            <select id="countries" class="border border-gray-300 text-grey-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option selected>조건2</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </div>

        <div>
        <!-- Dropdown menu and search form -->
        <form >
          <div class="flex-col flex">
            <div class="relative w-full">
              <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="내용" required />
              <button type="submit" class="absolute top-0 right-0 p-2.5  text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white-100">
                검색
                <!-- <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg> -->
              </button>
            </div>

            <div class="w-full mx-2 pt-16 bg-grey-400">
              <h1 class="text-lg font-medium mb-[34px]">고객사 리스트</h1>
              <ul class="w-full bg-white-400 text-center">
                <li v-for="customer in customers" :key="customer.id">
                    <input type="radio" :id="'customer_' + customer.id" :value="customer.id" v-model="selectedCustomer" class="mr-4">
                    <label :for="'customer_' + customer.id">{{ customer.name }}</label>
                </li>
              </ul>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>

    <div class="bg-[#fff] w-[1122px] rounded-lg p-8">
      <button class="bg-blue-700 p-2 rounded-md relative left-[89%] mb-10 font-semibold text-white-100"> + 발전소 할당</button>
      <energy-table></energy-table>
    </div>
  </div>
</template>

<script>
import EnergyTable from '@/components/ui/EnergyTable.vue'

export default {
  components: {
    EnergyTable
  },
  data () {
    return {
      customers: [ // 이 데이터는 실제 데이터로 채워야 함
        { id: 1, name: '고객사 1' },
        { id: 2, name: '고객사 2' },
        { id: 3, name: '고객사 3' },
        { id: 4, name: '고객사 3' },
        { id: 5, name: '고객사 3' },
        { id: 6, name: '고객사 3' }
      ],
      selectedCustomer: null // 선택된 고객사를 저장할 변수
    }
  }

}
</script>

<style  scoped>

</style>
