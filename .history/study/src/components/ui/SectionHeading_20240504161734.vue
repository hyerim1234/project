<template>
    <h2 class="text-2xl font-bold text-gray-800 my-4">
      <!-- Prop을 통해 제목 텍스트를 전달 받음 -->
      {{ title }}
    </h2>
  </template>
  
  <script>
  export default {
    props: {
      title: String
    }
  }
  </script>
  