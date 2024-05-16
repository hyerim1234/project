<template>
  <div class="p-6">
    <h1 class="text-lg font-bold">고객 목록</h1>
    <ReusableTable :headers="customerHeaders" :rows="customerRows" />

    <h1 class="text-lg font-bold mt-10">제품 목록</h1>
    <ReusableTable :headers="productHeaders" :rows="productRows" />

    <!-- 다른 테이블 추가 가능 -->
  </div>
</template>

<script>
import ReusableTable from '@/components/ui/ReusableTable.vue'

export default {
  components: {
    ReusableTable
  },
  data () {
    return {
      customerHeaders: ['고객명', '이메일주소', '연락처', '발전소 개수', '총용량', '생성일', '비밀번호'],
      customerRows: [
        ['사용자명1', 're101010@hallsk', '010-1234-1234', 1, '80MW', '2024-04-04', '변경'],
        ['사용자명2', 're101010@hallsk', '010-1234-1234', 1, '80MW', '2024-04-04', '변경']
      ],
      productHeaders: ['제품명', '카테고리', '가격', '재고', '제조사'],
      productRows: [
        ['제품명1', '카테고리1', '₩10000', 50, '제조사1'],
        ['제품명2', '카테고리2', '₩20000', 30, '제조사2']
      ]
    }
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
