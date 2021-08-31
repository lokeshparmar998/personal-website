<template>
  <div class="side-nav bg-secondary">
    <div
      class="custom-logo"
      @mouseenter="handleShowGif"
      @mouseleave="showGif = false"
      @click="goto"
    >
      <img v-show="showGif" style="height:70px; width:70px" :src="gif" alt="" />
      <svg
        v-show="!showGif"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="70"
        height="70"
        viewBox="0 0 200 200"
      >
        <defs>
          <clipPath id="clip-Custom_Size_1">
            <rect width="200" height="200" />
          </clipPath>
        </defs>
        <g
          id="Custom_Size_1"
          data-name="Custom Size – 1"
          clip-path="url(#clip-Custom_Size_1)"
        >
          <g id="Group_1" data-name="Group 1">
            <g id="website-logo-1" transform="translate(-156 -150)">
              <text
                id="L"
                transform="translate(193 260)"
                fill="#11c0bd"
                font-size="120"
                font-family="SegoeScript, Segoe Script"
              >
                <tspan x="0" y="0">L</tspan>
              </text>
              <text
                id="P."
                transform="translate(225 313)"
                fill="#11c0bd"
                font-size="120"
                font-family="SegoeScript, Segoe Script"
              >
                <tspan x="0" y="0">P.</tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    </div>

    <SideBarIcons :icon="icons.about" route="/" />
    <SideBarIcons :icon="icons.skills" route="skills" />
    <SideBarIcons :icon="icons.projects" route="projects" />
    <SideBarIcons :icon="icons.contact" route="contact" />
    <SideBarIcons :icon="icons.dev_tools" route="tools" />
    <SideBarIcons :icon="icons.blog" route="blogs" />
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
    SideBarIcons
  },
  data: function() {
    return {
      icons: {
        about: "user",
        skills: "terminal",
        projects: "project-diagram",
        contact: "envelope",
        dev_tools: "qrcode",
        blog: "cubes"
      },
      gif: null,
      showGif: false
    };
  },
  methods: {
    goto() {
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
    }
  }
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
  cursor: pointer;
}
</style>
