<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 login">
      <div class="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <form @submit.prevent="loginSubmit" class="space-y-6">
          <div>
            <label for="userId" class="sr-only">User ID</label>
            <div class="flex items-center border-2 border-gray-300 rounded-lg px-3 py-2">
              <i class="fas fa-user text-gray-500"></i>
              <input id="userId" v-model="userId" type="text" required class="ml-2 p-1 flex-1 w-full outline-none" placeholder="UserId">
            </div>
          </div>
          <div>
            <label for="userPassword" class="sr-only">Password</label>
            <div class="flex items-center border-2 border-gray-300 rounded-lg px-3 py-2">
              <i class="fas fa-lock text-gray-500"></i>
              <input id="userPassword" v-model="userPassword" type="password" required class="ml-2 p-1 flex-1 w-full outline-none" placeholder="Password">
            </div>
          </div>
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-blue active:bg-blue-700 transition duration-150 ease-in-out">
            Login
          </button>
        </form>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      userId: '',
      userPassword: '',
    };
  },
  methods: {
    loginSubmit() {
      let saveData = {
        userId: this.userId,
        userPassword: this.userPassword,
      };

      try {
        this.$axios.post('/signin', JSON.stringify(saveData), {
          headers: { "Content-Type": "application/json" },
        })
        .then(response => {
          if (response.status === 200) {
            // 로그인 성공시 처리 로직
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

  