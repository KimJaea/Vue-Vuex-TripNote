<template>
  <div class="mypage">
    <the-header-navbar />
    <h1>My Page</h1>
    <h6>이름, 비번, 메일 등등</h6>
  </div>
</template>

<script>
import TheHeaderNavbar from "@/components/TheHeaderNavbar";

export default {
  name: "MyPageView",
  components: {
    TheHeaderNavbar,
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

