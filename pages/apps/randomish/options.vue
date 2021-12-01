<template>
  <div class="randomish">hello</div>
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
      title: "Qolor",
      sub_title: "Never go wrong with colors!",
      show_bmc: false,
      icon: 'qolor.png'
    };
    this.$store.commit("devAppHeader/SET_HEADER", header);
  },
};
</script>
