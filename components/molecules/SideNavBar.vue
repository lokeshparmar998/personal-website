<template>
  <div class="side-nav bg-secondary">
    <div class="custom-logo">
      
    </div>
    <SideBarIcons :icon="icons.about" />
    <SideBarIcons :icon="icons.skills" />
    <SideBarIcons :icon="icons.projects" />
    <SideBarIcons :icon="icons.contact" />
    <SideBarIcons :icon="icons.dev_tools" />
  </div>
</template>
<script>
import SideBarIcons from "@/components/atoms/SideBarIcons.vue";
export default {
  components: {
    SideBarIcons
  },
  data: function() {
    return {
      icons: {
        about: "user",
        skills: "terminal",
        projects: "project-diagram",
        contact: "envelope",
        dev_tools: "qrcode"
      }
    };
  }
};
</script>
<style scoped>
.side-nav {
  width: 70px;
  height: 100vh;
}
.custom-logo{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
    background-color: #11C0BD;
}
svg{
    height: 30px;
    width: 30px;
}
</style>
