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
    SideNavBar
  }
};
</script>
<style scoped>
.default {
  background-image: url("../assets/background/background.svg");
  background-size: 100%;
  background-color: #25374f;
  background-position: center top;
  height: 100vh;
  width: 100vw;
  display: flex;
}
.side-nav-bar {
  width: 70px;
  -webkit-box-shadow: 6px 3px 5px 0px rgba(39, 57, 80, 1);
  -moz-box-shadow: 6px 3px 5px 0px rgba(39, 57, 80, 1);
  box-shadow: 6px 3px 5px 0px rgba(39, 57, 80, 1);
}
.main-content {
  width: calc(100% - 70px);
}
@media (max-width: 600px) {
  .default {
    background-image: url("../assets/background/background.svg");
    background-size: 100%;
    background-color: #25374f;
    background-position: center top;
    /* height: 100vh; */
    width: 100%;
    display: block;
  }
  .side-nav-bar {
    width: 100%;
    height: 60px;
    -webkit-box-shadow: 6px 3px 5px 0px rgba(39, 57, 80, 1);
    -moz-box-shadow: 6px 3px 5px 0px rgba(39, 57, 80, 1);
    box-shadow: 6px 3px 5px 0px rgba(39, 57, 80, 1);
  }
  .main-content {
    width: 100%;
  }
}

</style>
