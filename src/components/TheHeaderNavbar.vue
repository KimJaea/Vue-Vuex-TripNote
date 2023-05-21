<template>
  <div>
    <b-navbar type="dark">
      <b-navbar-nav>
        <b-nav-item href="#">
          <router-link :to="{ name: 'home' }">처음으로</router-link>
        </b-nav-item>
        <b-nav-item href="#">
          <router-link :to="{ name: 'mypage' }">마이페이지</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TheHeaderNavbar",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style></style>
