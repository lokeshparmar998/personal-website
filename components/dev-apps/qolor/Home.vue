<template>
  <div class="pallete-list">
    <div class="pallete" v-for="(qolor, i) in qolorList" :key="i">
      <QolorContainer :qolor="qolor" />
    </div>
  </div>
</template>
<script>
import QolorContainer from "@/components/dev-apps/qolor/QolorContainer.vue";
export default {
  components: {
    QolorContainer,
  },
  computed: {
    qolorList() {
      return this.$store.state.localStorage.qolorList;
    },
  },
};
</script>
<style scoped>
.pallete-list {
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
