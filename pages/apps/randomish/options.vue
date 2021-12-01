<template>
  <div class="randomish">
    
  </div>
</template>
<script>
export default {
  layout: "devapps",
  data:function(){
      return{

      }
  },
  created() {
    let header = {
      title: "Randomish",
      sub_title: "Never get bored, see random things!",
      show_bmc: false,
      icon: 'randomish.png'
    };
    this.$store.commit("devAppHeader/SET_HEADER", header);
  },
};
</script>
