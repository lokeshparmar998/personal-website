<template>
  <div class="tools">
    <div class="page-header">Developer tools</div>
    <div class="apps">
      <DevAppContainer />
    </div>
  </div>
</template>
<script>
import DevAppContainer from '@/components/molecules/DevAppContainer.vue'
export default {
  components:{
    DevAppContainer
  }
}
</script>
<style scoped>
.apps{
  padding-top: 50px;
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap; 
}
</style>
