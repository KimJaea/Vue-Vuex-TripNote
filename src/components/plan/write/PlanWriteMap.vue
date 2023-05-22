<template>
  <div>
    여기서 맵 보여야 함
    
    <div>
      <b-button v-b-modal.modal-unselect>미선택 관광지 세부 정보</b-button>

      <b-modal id="modal-unselect" centered title="관광지 세부 정보">
        <p class="my-4">이거 등록해야 하니까 취소 등록</p>
      </b-modal>
    </div>
    <br /><br /><br />
    <div>
      <b-button v-b-modal.modal-select>기선택 관광지 세부 정보</b-button>

      <b-modal id="modal-select" centered title="관광지 세부 정보">
        <p class="my-4">이거 취소해야 하니까 삭제 확인</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanWriteMap",
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