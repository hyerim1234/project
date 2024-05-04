<template>
  <section>
      <section-heading title="Welcome to Our Service"></section-heading>
    </section>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Login">Login</router-link> |
    <router-link to="/databinding">databinding</router-link> |
    <router-link to="/event/click">event click</router-link> |
    <router-link to="/extra/if">RenderingIfView</router-link> |
    <router-link to="/extra/computed">computed</router-link> |
    <router-link to="/extra/watch">watch</router-link> |
  </nav>
  <router-view/>
</template>
<script>
import SectionHeading from '@/components/ui/SectionHeading.vue';

export default {
  components: {
    SectionHeading
  }
}
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
