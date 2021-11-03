<template>
  <div>
    <div class="pallete" v-for="(qolor, i) in savedPallete" :key="i">
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
  data: function () {
    return {
      savedPallete: [],
    };
  },
  created() {
    this.fetchList();
  },
  methods: {
    fetchList() {
      for (let item of this.qolorList) {
        if (item.saved) this.savedPallete.push(item);
      }
      if (this.savedPallete.length == 0)
        this.$toast.error("No saved Pelletes ☹️", {
          position: "bottom-center",
          duration: 3000,
        });
    },
  },
};
</script>
<style scoped></style>
