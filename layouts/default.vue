<template>
  <div class="default">
    <SideNavBar class="side-nav-bar" />
    <Nuxt class="main-content" />
  </div>
</template>
<script>
import SideNavBar from "@/components/molecules/SideNavBar.vue";
export default {
  components: {
    SideNavBar,
  },
};
</script>
<style scoped>
.default {
  height: 100vh;
  width: 100%;
  display: flex;
}
.side-nav-bar {
  width: 70px;
  position: fixed;
  -webkit-box-shadow: 6px 3px 5px 0px rgba(39, 57, 80, 1);
  -moz-box-shadow: 6px 3px 5px 0px rgba(39, 57, 80, 1);
  box-shadow: 6px 3px 5px 0px rgba(39, 57, 80, 1);
}
.main-content {
  width: 100%;
}
@media (max-width: 600px) {
  .default {
    width: 100%;
    display: block;
  }
  .side-nav-bar {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    -webkit-box-shadow: 6px 3px 5px 0px rgba(39, 57, 80, 1);
    -moz-box-shadow: 6px 3px 5px 0px rgba(39, 57, 80, 1);
    box-shadow: 6px 3px 5px 0px rgba(39, 57, 80, 1);
  }
  .main-content {
    width: 100%;
    margin-top: 100px;
  }
}
</style>
