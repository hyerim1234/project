<template>
  <div class="bg-[#ffffff] p-5 rounded-md h-[770px]">
    <h1 class="font-bold text-lg">내정보수정</h1>

    <form @submit.prevent="updateProfile" class="max-w-sm mt-5">
      <div class="mb-5 flex align-center justify-center">
        <label for="id" class="w-20 block  text-sm font-medium text-gray-900">아이디</label>
        <input v-model="userId" type="text" id="id" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your ID" required />
      </div>
      <div class="mb-5 flex align-center">
        <label for="password"  class="w-25  text-sm font-medium text-gray-900">비밀번호</label>
        <button type="button" @click="changePassword" class="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">변경하기</button>
      </div>
      <div class="mb-5 flex align-center justify-center">
        <label for="username"  class="w-20 block  text-sm font-medium text-gray-900">사용자명</label>
        <input v-model="username" type="text" id="username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Username" required />
      </div>
      <div class="mb-5 flex align-center justify-center">
        <label for="contact"  class="w-20 block  text-sm font-medium text-gray-900">연락처</label>
        <input v-model="contact" type="text" id="contact" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Contact" required />
      </div>
      <div class="mb-5 flex align-center justify-center">
        <label for="email"  class="w-20 block  text-sm font-medium text-gray-900">이메일</label>
        <input v-model="email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
      </div>
      <div class="flex justify-end">
        <button type="button" @click="cancel" class="text-gray-800 bg-[#ffffff] hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">취소</button>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">저장</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: '',
      password: '',
      username: '',
      contact: '',
      email: ''
    }
  },
  methods: {
    updateProfile () {
      // 여기에 프로필 업데이트 로직을 추가합니다.
      console.log('Profile updated:', {
        userId: this.userId,
        password: this.password,
        username: this.username,
        contact: this.contact,
        email: this.email
      })
    },
    changePassword () {
      // 비밀번호 변경 로직을 추가합니다.
      console.log('Password change requested for:', this.userId)
    },
    cancel () {
      // 취소 버튼 클릭 시 동작을 추가합니다.
      console.log('Profile update cancelled')
    }
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
