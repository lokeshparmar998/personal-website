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
  position: relative;
}
.icon {
  color: #b2becd;
  font-size: 30px;
}
.icon:hover {
  color: #11c0bd;
  cursor: url("~/assets/images/shared/pointer-cursor.svg"), auto;
}
.icon-container:hover .icon-popper {
  visibility: visible;
  cursor: url("~/assets/images/shared/pointer-cursor.svg"), auto;
}
.icon-popper {
  visibility: hidden;
  color: #b2becd;
  font-family: "inter", sans-serif;
  font-size: 14px;
  z-index: 2;
  position: absolute;
  background-color: black;
  padding: 2px 4px 2px 4px;
  border-radius: 5px;
  left: 65px;
}
.icon-popper::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent black transparent transparent;
}
@media screen and (max-width: 600px) {
  .icon-popper {
    top: 60px;
    left: 10px;
  }
  .icon-popper::after {
    content: "";
    position: absolute;
    top: 0%;
    right: 50%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent black transparent transparent;
  }
}
</style>
