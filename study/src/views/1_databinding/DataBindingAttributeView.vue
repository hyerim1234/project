<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl">
      <div class="flex">
        <input type="text" class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500" v-bind:value="userId" readonly />
        <input type="text" class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 mx-2" :value="userId" readonly />
      </div>

      <div class="flex justify-center my-6">
        <img :src="imgSrc" alt="Vue.js logo" class="w-24 h-auto" />
      </div>
      <div class="mb-6">
        <input type="search" class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500" v-model="txt1" placeholder="Enter search term" />
      </div>
      <div class="flex justify-center">
        <button class="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 disabled:opacity-50" :disabled="txt1 === ''">조회</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: 'hyerim',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
      txt1: ''
    }
  }
}
</script>
