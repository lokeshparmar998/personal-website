<template>
  <div class="qolor">
    <div class="pallete-list">
      <div class="pallete" v-for="(qolor, i) in qolorList" :key="i">
        <QolorContainer :qolor="qolor" />
      </div>
    </div>
  </div>
</template>
<script>
import QolorContainer from "@/components/dev-apps/qolor/QolorContainer.vue";
export default {
  layout: "devapps",
  components: {
    QolorContainer,
  },
  head: {
    title: `Qolor ✔️`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Never go wrong with colors again qolor. Choose perfect colors from thousands of colors and make great projects.",
      },
    ],
  },
  created() {
    let header = {
      title: "Qolor",
      sub_title: "Never go wrong with colors!",
    };
    this.$store.commit("devAppHeader/SET_HEADER", header);
  },
  computed:{
    qolorList(){
      return this.$store.state.localStorage.qolorList
    }
  }
};
</script>
<style scoped>
.qolor {
  width: 100%;
}
.pallete-list {
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
