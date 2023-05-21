<template>
  <div class="home">
    <h1>Home Page for This Web Site!!!</h1>
    <div>관광지 정보</div>
    <div>여행 계획</div>
    <div>핫 플레이스</div>
    <home-page />
  </div>
</template>

<script>
import HomePage from "@/components/Home.vue";

export default {
  name: "HomeView",
  components: {
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
