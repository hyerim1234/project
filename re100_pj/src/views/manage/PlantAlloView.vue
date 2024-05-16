<template>

  <div class="flex justify-center space-x-8 rounded-lg bg-[#ffffff]">
    <!-- 발전소 리스트 -->
    <div class="flex-col space-x-4">
      <div class="bg-white flex-col h-[770px] w-[624px] rounded-lg p-8 space-y-4">
        <h1 class="font-bold text-lg">발전소 리스트</h1>
        <div class="flex justify-between space-x-2">
          <!-- 대분류 선택 -->
          <form class="max-w-sm w-1/2">
            <select id="major-category" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option selected>대분류</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>

          <!-- 소분류 선택 -->
          <form class="max-w-sm w-1/2">
            <select id="minor-category" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option selected>소분류</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </div>

        <!-- 검색 폼 -->
        <form @submit.prevent="filterList">
          <div class="flex-col flex">
            <div class="w-full">
              <input v-model="searchQuery" type="search" id="search-input" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="검색어 입력" required />
              <button type="submit" class="w-full h-[46px] mt-4 text-md font-bold text-white bg-gray-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white-100">검색</button>
            </div>
            <!-- 발전소 목록 -->
            <div class="overflow-y-auto h-96 mt-4 border border-gray-300 rounded-md">
              <p class="p-2 text-gray-700">검색결과 24건</p>
              <ul class="mt-3">
                <li v-for="(plant, index) in paginatedPlants" :key="index" class="mb-2">
                  <a href="#" class="block p-2 border rounded bg-white shadow-md hover:bg-gray-100">
                    <div class="text-blue-500 font-semibold">{{ plant.name }}</div>
                    <div class="text-gray-500">{{ plant.details }}</div>
                  </a>
                </li>
              </ul>
            </div>
            <!-- 페이지네이션 -->
            <div class="flex justify-center my-4">
              <pagination></pagination>
              <!-- <button @click="previousPage" :disabled="currentPage === 1" class="px-3 py-1 mx-1 border rounded bg-gray-200 hover:bg-gray-300">이전</button>
              <button v-for="page in totalPages" :key="page" @click="changePage(page)" :class="{'bg-blue-500 text-white': currentPage === page, 'bg-gray-200 hover:bg-gray-300': currentPage !== page}" class="px-3 py-1 mx-1 border rounded">
                {{ page }}
              </button>
              <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-1 mx-1 border rounded bg-gray-200 hover:bg-gray-300">다음</button> -->
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- 발전소 정보 -->
    <div class="bg-white w-[1122px] rounded-lg p-8">
      <h1 class="font-bold text-lg">발전소 A</h1>
      <div class="border-1 bg-white-50 flex align-center justify-around my-6">
        <!-- <ul class="space-y-4">
          <li>주소<button class="text-sm">위치보기</button></li>
          <li>번호</li>
          <li>라씨</li>
          <li>발전용량</li>
          <li>메일주소</li>
        </ul>
        <div class="h-[180px] w-[2px] bg-gray-100 my-6"></div>
        <ul class="space-y-4">
          <li>계량기 개수</li>
          <li>고객사 개수</li>
          <li>비율</li>
          <li>사업주</li>
          <li>인버터</li>
        </ul> -->
        <plant-amount-table></plant-amount-table>
      </div>
      <!-- 탭별 테이블 -->
      <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <ul class="flex flex-wrap">
          <li class="mr-2 inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg">
            <a href="#" class="active" aria-current="page">일별발전량</a>
          </li>
          <li class="mr-2">
            <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300">월별발전량</a>
          </li>
        </ul>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white mt-4">
          <thead class="bg-gray-50">
            <tr>
              <th class="py-2 px-4 border-b border-t">날짜</th>
              <th class="py-2 px-4 border-b  border-t">총 발전량</th>
              <th class="py-2 px-4 border-b  border-t">발전량</th>
              <th class="py-2 px-4 border-b  border-t">예비발생</th>
              <th class="py-2 px-4 border-b  border-t">더보기</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in entries" :key="index" class="hover:bg-gray-100">
              <td class="py-2 px-4 border-b text-center">{{ entry.date }}</td>
              <td class="py-2 px-4 border-b text-center">{{ entry.totalGeneration }}</td>
              <td class="py-2 px-4 border-b text-center">{{ entry.generation }}</td>
              <td class="py-2 px-4 border-b text-center">{{ entry.reserve }}</td>
              <td class="py-2 px-4 border-b text-center">
                <button @click="showDetails(entry)" class=" bg-white border border-2 rounded-xl w-5 h-5">+</button>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from '@/components/ui/pagination.vue'
import PlantAmountTable from '@/components/ui/PlantAmountTable.vue'
export default {
  components: {
    pagination,
    PlantAmountTable
  },
  data () {
    return {
      plants: [
        { name: '발전소 A', details: '용량: 80MW / 이행률: 10%' },
        { name: '발전소 B', details: '용량: 90MW / 이행률: 20%' },
        { name: '발전소 C', details: '용량: 70MW / 이행률: 30%' },
        { name: '발전소 D', details: '용량: 60MW / 이행률: 40%' },
        { name: '발전소 E', details: '용량: 50MW / 이행률: 50%' },
        { name: '발전소 F', details: '용량: 40MW / 이행률: 60%' },
        { name: '발전소 G', details: '용량: 30MW / 이행률: 70%' },
        { name: '발전소 H', details: '용량: 20MW / 이행률: 80%' },
        { name: '발전소 I', details: '용량: 10MW / 이행률: 90%' },
        { name: '발전소 J', details: '용량: 5MW / 이행률: 95%' }
      ],
      searchQuery: '', // 검색어 저장할 변수
      currentPage: 1, // 현재 페이지 번호
      pageSize: 5, // 페이지당 항목 수
      entries: [
        { date: '2024-04-02', totalGeneration: '10MW', generation: '10MW', reserve: '에러' },
        { date: '2024-04-03', totalGeneration: '10MW', generation: '10MW', reserve: '없음' },
        { date: '2024-04-04', totalGeneration: '10MW', generation: '10MW', reserve: '없음' },
        { date: '2024-04-05', totalGeneration: '10MW', generation: '10MW', reserve: '없음' },
        { date: '2024-04-06', totalGeneration: '10MW', generation: '10MW', reserve: '없음' },
        { date: '2024-04-03', totalGeneration: '10MW', generation: '10MW', reserve: '없음' }
      ]
    }
  },
  computed: {
    filteredPlants () {
      // 검색어 없으면 전체 리스트 반환
      if (!this.searchQuery) {
        return this.plants
      }
      // 검색어 포함된 발전소 리스트 반환
      return this.plants.filter((plant) =>
        plant.name.includes(this.searchQuery)
      )
    },
    totalPages  () {
      // 총 페이지 수 계산
      return Math.ceil(this.filteredPlants.length / this.pageSize)
    },
    paginatedPlants () {
      // 현재 페이지에 해당하는 발전소 리스트 반환
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return this.filteredPlants.slice(start, end)
    }
  },
  methods: {
    changePage (page) {
      // 페이지 번호 변경
      this.currentPage = page
    },
    previousPage () {
      // 이전 페이지로 이동
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage () {
      // 다음 페이지로 이동
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    filterList () {
      // 검색어 입력 시 페이지를 첫 페이지로 설정
      this.currentPage = 1
    },
    showDetails (entry) {
      // 더보기 버튼 클릭 시 처리할 로직을 여기에 추가
      alert(
        `날짜: ${entry.date}\n총 발전량: ${entry.totalGeneration}\n발전량: ${entry.generation}\n예비발생: ${entry.reserve}`
      )
    }
  }
}
</script>

<style scoped>
/* 필요한 경우 여기에 사용자 정의 스타일을 추가하세요 */
</style>
