<template>
  <div class="fullheight">
    <Header :header="header" />
    <Nuxt />
  </div>
</template>
<script>
import Header from "@/components/dev-apps/shared/Header.vue";
export default {
  components:{
    Header
  },
  computed:{
    header(){
      return this.$store.state.devAppHeader.header
    }
  }
};
</script>
<style scoped>
.fullheight {
  width: 100%;
  background-color: #12181b;
}
</style>
