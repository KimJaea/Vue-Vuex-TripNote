<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <!-- 직전으로 돌아가는 거 잇으면 그거 사용하기 -->
      <router-link :to="{ name: 'plan' }">
        <b-navbar-brand href="">
          <b-icon icon="arrow-left"></b-icon>
          
          돌아가기
        </b-navbar-brand>
      </router-link>
      <b-nav-item href="#">새 여행 계획 등록하기</b-nav-item>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-nav>
        <b-collapse id="nav-collapse" is-nav>
          <b-nav-item href="#">
            <router-link :to="{ name: 'planwritemap' }"
              >방문 일정 등록</router-link
            >
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'planwritememo' }"
              >여행 계획 작성</router-link
            >
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'planwritemember' }"
              >멤버 관리</router-link
            >
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'plan' }">등록</router-link>
          </b-nav-item>
        </b-collapse>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
  
  <script>
export default {
  name: "PlanNavbar",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
  
  <style scoped>
</style>
  