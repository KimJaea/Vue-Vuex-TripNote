<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="faded">
      <router-link :to="{ name: 'home' }">
        <b-navbar-brand href="">
          <img
            src="@/assets/img/travel-bag.png"
            alt="TripNote"
            id="tripnote-logo"
          />
          TripNote
        </b-navbar-brand>
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-nav>
        <b-collapse id="nav-collapse" is-nav>
          <b-nav-item href="#">
            <router-link :to="{ name: 'home' }">처음으로</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'attraction' }">관광지 정보</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'plan' }">여행 계획</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'hotplace' }">핫 플레이스</router-link>
          </b-nav-item>

          <b-nav-item-dropdown text="마이페이지" right>
            <b-dropdown-item href="#">
              <router-link :to="{ name: 'mypage' }"> 로그인 </router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">회원가입</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-collapse>
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

<style scoped>
#tripnote-logo {
  width: 26px;
  height: 26px;
}
</style>
