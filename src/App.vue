<template>
  <div id="app">
    <!-- <the-header-navbar /> -->
    <router-view />
  </div>
</template>

<script>
// import TheHeaderNavbar from "./components/TheHeaderNavbar";

export default {
  name: "App",
  components: {
    // TheHeaderNavbar,
  },
};
</script>

<style scoped>
/* @import "@/assets/css/base.css"; */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
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
