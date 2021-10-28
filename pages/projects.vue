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
  head: {
    title: `Lokesh | Lokesh's projects 🦾`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Projects and tools for frontend developers.",
      },
    ],
  },
  data: function () {
    return {
      devApps: [
        {
          name: "Qolor",
          description: "Never go wrong with colors!! \n Click to copy color.",
          logo: "qolor",
          route: "dev-apps/qolor/",
          tags: ['Free 🔥', 'Tool 🛠️']
        },
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
@media (max-width: 600px) {
  .apps{
    width: 100%;
    justify-content: center;
  }
}
</style>
