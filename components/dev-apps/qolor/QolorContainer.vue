<template>
  <div class="qolor-container">
    <div class="color-choices">
      <div
        class="r1"
        :style="`background-color: ${row1}`"
        @mouseenter="showR1 = true"
        @mouseleave="showR1 = false"
      >
        <span class="color-hex" v-show="showR1">
          {{ row1 }}
        </span>
      </div>
      <div
        class="r2"
        :style="`background-color: ${row2}`"
        @mouseenter="showR2 = true"
        @mouseleave="showR2 = false"
      >
        <span class="color-hex" v-show="showR2">
          {{ row1 }}
        </span>
      </div>
      <div
        class="r3"
        :style="`background-color: ${row3}`"
        @mouseenter="showR3 = true"
        @mouseleave="showR3 = false"
      >
        <span class="color-hex" v-show="showR3">
          {{ row1 }}
        </span>
      </div>
      <div
        class="r4"
        :style="`background-color: ${row4}`"
        @mouseenter="showR4 = true"
        @mouseleave="showR4 = false"
      >
        <span class="color-hex" v-show="showR4">
          {{ row1 }}
        </span>
      </div>
    </div>
    <Button :button="saveButton" v-on:operation="saveColorPallete" />
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
      row1: null,
      row2: null,
      row3: null,
      row4: null,
      /*  */
      showR1: false,
      showR2: false,
      showR3: false,
      showR4: false,
    };
  },
  created() {
    [this.row1, this.row2, this.row3, this.row4] = [...this.qolor.colors];
  },
  methods: {
    saveColorPallete() {
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.r2 {
  flex-grow: 2;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.r3 {
  flex-grow: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.r4 {
  flex-grow: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.color-hex {
  background-color: #00000044;
  color: #fff;
  padding: 2px;
  font-family: "lato", sans-serif;
  font-size: 12px;
}
</style>
