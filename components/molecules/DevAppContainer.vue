<template>
  <div class="tool-container">
    <div class="tool-image">
      <img src="~/assets/images/dev-apps/qolor.png" alt="" />
    </div>
    <div class="tool-name">
        QOLOR
    </div>
    <div class="tool-description">
        this is the tool description for the dev tool qolor which i will update later.
    </div>
  </div>
</template>
<script>
import Tag from "@/components/atoms/Tag.vue";
export default {
  components: {
    Tag,
  },
  props: {
    tag: Object,
  },
  data: function () {
    return {
      tag: {},
    };
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
.tool-container:hover{
    border: 1px solid #11C0BD;
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
.tool-name{
    text-align: center;
    font-size: 19px;
    font-family: 'inter',sans-serif;
    font-weight: 600;
    color: #eeeeee;
    margin-bottom: 8px;
}
.tool-description{
    color: #eeeeee;
    opacity: 0.8;
    text-align: center;
    font-weight: 500;
    font-family: 'inter',sans-serif;
    font-size: 14px;
}
</style>
