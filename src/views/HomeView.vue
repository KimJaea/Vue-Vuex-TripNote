<template>
  <div class="home">
    <the-header-navbar />
    <h1>Home Page for This Web Site!!!</h1>

    <home-page />
  </div>
</template>

<script>
import TheHeaderNavbar from "@/components/TheHeaderNavbar";
import HomePage from "@/components/Home.vue";

export default {
  name: "HomeView",
  components: {
    TheHeaderNavbar,
    HomePage,
  },
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>
