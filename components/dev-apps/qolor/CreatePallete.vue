<template>
  <div>
    <div class="qolor-container">
      <div class="color-choices">
        <div
          class="r1"
          :style="`background-color: ${row1}`"
          @mouseenter="showR1 = true"
          @mouseleave="showR1 = false"
          @click="copyToClipboard('row1')"
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
          @click="copyToClipboard('row2')"
        >
          <span class="color-hex" v-show="showR2">
            {{ row2 }}
          </span>
        </div>
        <div
          class="r3"
          :style="`background-color: ${row3}`"
          @mouseenter="showR3 = true"
          @mouseleave="showR3 = false"
          @click="copyToClipboard('row3')"
        >
          <span class="color-hex" v-show="showR3">
            {{ row3 }}
          </span>
        </div>
        <div
          class="r4"
          :style="`background-color: ${row4}`"
          @mouseenter="showR4 = true"
          @mouseleave="showR4 = false"
          @click="copyToClipboard('row4')"
        >
          <span class="color-hex" v-show="showR4">
            {{ row4 }}
          </span>
        </div>
      </div>
      <input
        type="color"
        id="head"
        name="head"
        style="display: none"
        v-model="row1"
        ref="row1"
      />
      <input
        type="color"
        id="head"
        name="head"
        style="display: none"
        v-model="row2"
        ref="row2"
      />
      <input
        type="color"
        id="head"
        name="head"
        style="display: none"
        ref="row3"
        v-model="row3"
      />
      <input
        type="color"
        id="head"
        name="head"
        style="display: none"
        ref="row4"
        v-model="row4"
      />
      <Button :button="saveButton" v-on:operation="saveColorPallete" />
    </div>
  </div>
</template>
<script>
import Button from "@/components/atoms/Button.vue";
export default {
  components: {
    Button,
  },
  data: function () {
    return {
      saveButton: {
        class: "primary size100 nunito_font",
        text: "Create Pallete 😁",
        route: false,
        navigation: "none",
        operation: true,
      },
      row1: "#AAAAAA",
      row2: "#BBBBBB",
      row3: "#cccccc",
      row4: "#DDDDDD",
      /*  */
      showR1: false,
      showR2: false,
      showR3: false,
      showR4: false,
    };
  },
  computed: {
    qolorList() {
      return this.$store.state.localStorage.qolorList;
    },
  },
  methods: {
    saveColorPallete() {
      let index = this.qolorList[this.qolorList.length - 1].id;
      index += 1;
      let color = {
        id: index,
        saved: false,
        colors: [this.row1, this.row2, this.row3, this.row4],
      };
      this.$store.commit("localStorage/SET_QOLOR_LIST", color);
      this.$router.go(-1);
    },
    async copyToClipboard(row) {
      if (row == "row1") this.$refs.row1.click();
      else if (row == "row2") this.$refs.row2.click();
      else if (row == "row3") this.$refs.row3.click();
      else if (row == "row4") this.$refs.row4.click();
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
.r1,
.r2,
.r3,
.r4 {
  cursor: url("~/assets/images/shared/pointer-cursor.svg"), auto;
  position: relative;
}
.r1 {
  flex-grow: 3;
}
.r2 {
  flex-grow: 2;
}
.r3 {
  flex-grow: 1;
}
.r4 {
  flex-grow: 1;
}
.color-hex {
  background-color: #00000044;
  color: #fff;
  padding: 2px;
  font-family: "lato", sans-serif;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
