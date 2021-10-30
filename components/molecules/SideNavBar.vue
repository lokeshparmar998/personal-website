<template>
  <div class="side-nav bg-secondary">
    <div
      class="custom-logo"
      @mouseenter="handleShowGif"
      @mouseleave="showGif = false"
      @click="goto"
    >
      <img v-show="showGif" :src="gif" alt="" />
      <img v-show="!showGif" src="~/assets/images/logo.svg" alt="" />
    </div>

    <div v-for="(icon, i) in icons" :key="i">
      <SideBarIcons :icon="icon" />
    </div>
  </div>
</template>
<script>
import SideBarIcons from "@/components/atoms/SideBarIcons.vue";

import zero from "~/assets/gifs/0.gif";
import one from "~/assets/gifs/1.gif";
import two from "~/assets/gifs/2.gif";
import three from "~/assets/gifs/3.gif";
import four from "~/assets/gifs/4.gif";
import five from "~/assets/gifs/5.gif";
import six from "~/assets/gifs/6.gif";
import seven from "~/assets/gifs/7.gif";
import eight from "~/assets/gifs/8.gif";
export default {
  components: {
    SideBarIcons,
  },
  data: function () {
    return {
      icons: [
        {
          icon: "user",
          name: "About",
          route: "/",
        },
        /* {
          icon: "terminal",
          name: "Skills",
          route: "skills",
        }, */
        {
          icon: "project-diagram",
          name: "Projects",
          route: "projects",
        },
        {
          icon: "envelope",
          name: "Contact",
          route: "contact",
        },
        {
          icon: "cubes",
          name: "Blogs",
          route: "blogs",
        },
      ],
      gif: null,
      showGif: false,
    };
  },
  methods: {
    goto() {
      this.handleShowGif();
      this.$router.push({ path: "/" });
    },
    handleShowGif() {
      let random = Math.floor(Math.random() * 8);
      let myRandomGif = new Map([
        [0, zero],
        [1, one],
        [2, two],
        [3, three],
        [4, four],
        [5, five],
        [6, six],
        [7, seven],
        [8, eight],
      ]);
      this.gif = myRandomGif.get(random);
      this.showGif = true;
    },
  },
};
</script>
<style scoped>
.side-nav {
  width: 70px;
  height: 100vh;
}
.custom-logo {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  cursor: url("~/assets/images/shared/pointer-cursor.svg"), auto;
}
.custom-logo img {
  height: 70px;
  width: 70px;
}
@media screen and (max-width: 600px) {
  .side-nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
  }
}
</style>
