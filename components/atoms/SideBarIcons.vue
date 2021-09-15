<template>
  <div class="icon-container">
    <fa :icon="icon" class="icon" @click="goto()" />
  </div>
</template>
<script>
export default {
  props: {
    icon: String,
    route: String,
  },
  methods: {
    goto() {
      this.$router.push({ path: `${this.route}` });
    },
  },
};
</script>
<style scoped>
.icon-container {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  display: grid;
  place-items: center;
}
.icon {
  color: #b2becd;
  font-size: 30px;
}
.icon:hover {
  color: #11c0bd;
  cursor: pointer;
}
</style>
