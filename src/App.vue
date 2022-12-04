<template>
  <header-vue></header-vue>
  <router-view/>
</template>


<script>
import HeaderVue from "@/components/layout/Header.vue";

export default {
  name: 'app',
  components: {
    HeaderVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
