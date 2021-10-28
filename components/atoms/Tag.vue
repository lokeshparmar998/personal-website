<template>
  <div class="tag">
    {{ tag }}
  </div>
</template>
<script>
export default {
  props: {
    tag: String,
  },
};
</script>
<style scoped>
.tag {
  margin: 5px;
  border: 1px solid #3f536e;
  padding: 3px 6px 3px 6px;
  border-radius: 8px;
  color: white;
  font-family: "inter", sans-serif;
  font-size: 15px;
}
</style>
