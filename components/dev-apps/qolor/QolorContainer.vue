<template>
  <div class="qolor-container">
    <div class="color-choices">
      <div class="r1" :style="`background-color: ${row1}`"></div>
      <div class="r2" :style="`background-color: ${row2}`"></div>
      <div class="r3" :style="`background-color: ${row3}`"></div>
      <div class="r4" :style="`background-color: ${row4}`"></div>
    </div>
    <Button :button="saveButton" v-on:operation="saveColor" />
  </div>
</template>
<script>
import Button from "@/components/atoms/Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    qolor: Object,
  },
  data: function () {
    return {
      saveButton: {
        class: "secondary size100 nunito_font",
        text: "Save Pallete 😁",
        route: false,
        navigation: "none",
        operation: true,
      },
    row1:null,
    row2:null,
    row3:null,
    row4:null
    };
  },
  created(){
      [this.row1,this.row2,this.row3,this.row4] = [...this.qolor.colors]
  },
  methods: {
    saveColor() {
      console.log("saving color");
    },
  },
};
</script>
<style scoped>
.qolor-container {
  width: 20%;
  min-width: 200px;
  background-color: white;
  height: 290px;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.color-choices {
  display: flex;
  flex-direction: column;
  height: 230px;
}
.r1 {
  flex-grow: 3;
  cursor: pointer;
}
.r2 {
  flex-grow: 2;
  cursor: pointer;
}
.r3 {
  flex-grow: 1;
  cursor: pointer;
}
.r4 {
  flex-grow: 1;
  cursor: pointer;
}
</style>
