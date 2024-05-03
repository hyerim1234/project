<template>
  <div>
     <!-- 'G' 역할을 가진 일반 사용자의 경우, '조회' 버튼만 표시됩니다. -->
    <div v-if="userRole === 'G'">
      <button>조회</button>
    </div>
     <!-- 'M' 역할을 가진 매니저의 경우, '조회'와 '생성' 버튼이 표시됩니다. -->
    <div v-else-if="userRole === 'M'">
      <button>조회</button>
      <button>생성</button>
    </div>
     <!-- 그 외의 경우 (여기서는 'A' 역할인 관리자를 가정), '조회', '생성', '삭제' 버튼 모두 표시됩니다. -->
    <div v-else>
      <button>조회</button>
      <button>생성</button>
      <button>삭제</button>
    </div>

     <!--
    이 아래의 주석 처리된 코드들은 다른 방식의 조건부 렌더링 예제들입니다.
    이 코드들은 현재 비활성화되어 있으며, 필요에 따라 참고하거나 사용할 수 있습니다.
    -->
    <!-- <div v-if="userRole === 'A'">
      <button>조회</button>
      <button>생성</button>
      <button>삭제</button>
    </div>
    <div v-else-if="userRole === 'M'">
      <button>조회</button>
      <button>생성</button>
    </div>
    <div v-else>
      <button>조회</button>
    </div> -->
    <!-- <button v-if="userRole === 'A' || userRole === 'M' || userRole === 'G'">
      조회
    </button>
    <button v-if="userRole === 'A' || userRole === 'M'">생성</button>
    <button v-if="userRole === 'A'">삭제</button> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userRole: 'M' // A(Admin) - 관리자, M(Manager) - 매니저, G(General) - 일반사용자
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
