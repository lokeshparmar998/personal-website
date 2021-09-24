<template>
  <div class="tool-container" @click="goto">
    <div class="tool-image">
      <img :src="`${toolImage}`" alt="tool logo" />
    </div>
    <div class="tool-name">
      {{ tool.name }}
    </div>
    <div class="tool-description">
      {{ tool.description }}
    </div>
  </div>
</template>
<script>
import Tag from "@/components/atoms/Tag.vue";
const Qolor = require("~/assets/images/dev-apps/qolor.png");
export default {
  components: {
    Tag,
  },
  props: {
    tool: Object,
  },
  data: function () {
    return {
      toolImage: null,
    };
  },
  created() {
    let myHash = new Map([["qolor", Qolor]]);
    this.toolImage = myHash.get(this.tool.logo);
  },
  methods: {
    goto() {
      const routeData = this.$router.resolve({ path: this.tool.route });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>
<style scoped>
.tool-container {
  width: 20%;
  min-width: 200px;
  background-color: #2c405a;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #2c405a;
  cursor: pointer;
}
.tool-container:hover {
  border: 1px solid #11c0bd;
}
.tool-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 15px;
}
.tool-image img {
  width: 150px;
}
.tool-name {
  text-align: center;
  font-size: 19px;
  font-family: "inter", sans-serif;
  font-weight: 600;
  color: #eeeeee;
  margin-bottom: 8px;
}
.tool-description {
  color: #eeeeee;
  opacity: 0.8;
  text-align: center;
  font-weight: 500;
  font-family: "inter", sans-serif;
  font-size: 14px;
}
</style>
