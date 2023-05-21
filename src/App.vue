<template>
  <div id="app">
    <the-header-navbar />
    <router-view />
  </div>
</template>

<script>
import TheHeaderNavbar from "./components/TheHeaderNavbar";

export default {
  name: "App",
  components: {
    TheHeaderNavbar,
  },
};
</script>

<style>
@import "@/assets/css/base.css";
</style>
