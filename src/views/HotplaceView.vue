<template>
  <div class="hotplace">
    <the-header-navbar />
    <router-view />
  </div>
</template>
  
<script>
import TheHeaderNavbar from "@/components/TheHeaderNavbar";

export default {
  name: "HotplaceView",
  components: {
    TheHeaderNavbar,
  },
};
</script>
  
<style scoped></style>
  