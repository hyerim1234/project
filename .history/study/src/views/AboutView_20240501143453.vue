<template>
  <div class="about">
    <h1 class="italic">This is an about page</h1>
    <HelloWorld />  <!-- HelloWorld 컴포넌트 사용 -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'AboutView',
  components: {
    HelloWorld
  }
}
</script>
