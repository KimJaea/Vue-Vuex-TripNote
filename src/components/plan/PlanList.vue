<template>
  <div>
    <the-header-navbar />
    계획 리스트

    <router-link :to="{ name: 'planwrite' }">여행 계획</router-link>
  </div>
</template>
  
  <script>
import TheHeaderNavbar from "@/components/TheHeaderNavbar";

export default {
  name: "PlanList",
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
  
  <style scoped></style>