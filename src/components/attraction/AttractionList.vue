<template>
  <div>
    <h1>관광지 정보 검색하기</h1>

    <div>
      <b-button v-b-modal.modal-view>관광지 상세 정보 모달 창</b-button>

      <b-modal id="modal-view" centered title="관광지 세부 정보">
        <p class="my-4">필요 정보 다수,,, 그리고 div도</p>
      </b-modal>
    </div>
    <br /><br /><br />
    <div>
      <b-button v-b-modal.modal-modify>관광지 정보 수정 요청 모달 창</b-button>

      <b-modal id="modal-modify" centered title="관광지 정보 수정">
        <p class="my-4">수정 요청 후 확인 누르면 사라지면서 등록되애,,,</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "AttractionList",
  components: {},
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