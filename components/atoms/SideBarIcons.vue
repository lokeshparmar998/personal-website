<template>
  <div class="icon-container">
    <fa :icon="icon.icon" class="icon" @click="goto()" />
    <div class="icon-popper">
      {{ icon.name }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    icon: Object,
  },
  methods: {
    goto() {
      this.$router.push({ path: `${this.icon.route}` });
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
.icon-container:hover .icon-popper {
  visibility: visible;
  cursor: pointer;
}
.icon-popper {
  visibility: hidden;
  color: #b2becd;
  font-family: "inter", sans-serif;
  font-size: 14px;
  margin-top: -15px;
}
</style>
