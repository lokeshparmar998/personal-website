<template>
  <div class="tools">
    <div class="page-header">Tools & Projects</div>
    <div class="apps">
      <div v-for="(app, i) in devApps" :key="i" style="width: min-content">
        <DevAppContainer :tool="app" />
      </div>
    </div>
  </div>
</template>
<script>
import DevAppContainer from "@/components/molecules/DevAppContainer.vue";
export default {
  components: {
    DevAppContainer,
  },
  data: function () {
    return {
      devApps: [
        {
          name: "Qolor",
          description: "Never go wrong with colors!! \n Click to copy color.",
          logo: "qolor",
          route: "dev-apps/qolor/",
        }
      ],
    };
  },
};
</script>
<style scoped>
.apps {
  padding-top: 50px;
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
