<template>
  <div class="default">
    <SideNavBar class="side-nav-bar" />
    <Nuxt class="main-content" />
  </div>
</template>
<script>
import SideNavBar from '@/components/molecules/SideNavBar.vue'
export default {
  components: {
    SideNavBar
  }
}
</script>
<style scoped>
.default{
  background-image: url('../assets/background/background.svg');
  background-size: 100%;
  background-color: #25374f;
  background-position: center top;
  height: 100vh;
  display: flex;
}
.side-nav-bar{
  width: 6%
}
.main-content{
  widows: 94%;
}
</style>
