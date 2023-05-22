<template>
  <div class="attraction">
    <the-header-navbar />
    <router-view />
  </div>
</template>
    
<script>
import TheHeaderNavbar from "@/components/TheHeaderNavbar";

export default {
  name: "AttractionView",
  components: {
    TheHeaderNavbar,
  },
};
</script>
    
<style scoped></style>
    