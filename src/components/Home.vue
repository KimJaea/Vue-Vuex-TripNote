<template>
  <div class="home">
    4개 div 만들어서 배치 후 ㅂ보여주기
    <div>관광지 정보</div>
    <div>여행 계획</div>
    <div>핫 플레이스</div>

  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String, //
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
