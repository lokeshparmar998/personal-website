<template>
  <div class="qolor-container">
    <div class="color-choices">
      <div class="c1"></div>
      <div class="c2"></div>
      <div class="c3"></div>
      <div class="c4"></div>
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
    };
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
.c1 {
  flex-grow: 3;
  cursor: pointer;
  background-color: teal;
}
.c2 {
  flex-grow: 2;
  cursor: pointer;
  background-color: thistle;
}
.c3 {
  flex-grow: 1;
  cursor: pointer;
  background-color: tomato;
}
.c4 {
  flex-grow: 1;
  cursor: pointer;
  background-color: turquoise;
}
</style>
