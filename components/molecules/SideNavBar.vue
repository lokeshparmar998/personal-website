<template>
  <div class="side-nav bg-secondary">
    <div
      class="custom-logo"
      @mouseover="showGif = true"
      @mouseleave="showGif = false"
      @click="goto"
    >
      <img
        v-show="showGif"
        style="height:70px; width:70px"
        src="~/assets/gifs/gif.gif"
        alt=""
      />
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
      showGif: false
    };
  },
  methods: {
    goto() {
      this.$router.push({ path: "/" });
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
