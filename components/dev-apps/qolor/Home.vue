<template>
  <div>
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
      return this.$store.getters["localStorage/reversedQolorList"];
    },
  },
};
</script>
<style scoped></style>
