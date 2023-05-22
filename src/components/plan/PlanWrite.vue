<template>
  <div>
    <plan-navbar />
    여기가 플랜 작성하는 곳
    <router-view />
  </div>
</template>
  
  <script>
import PlanNavbar from "./PlanNavbar";

export default {
  name: "PlanWrite",
  components: { PlanNavbar },
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>
  
  <style scoped></style>