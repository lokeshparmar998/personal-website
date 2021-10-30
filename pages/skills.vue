<template>
  <div class="skills">
    <div class="page-header">My Skill set</div>
    <div class="skill-set">
      <!-- <img
        :src="require(`@/assets/images/skills/${name}.svg`)"
        alt="adobexd icon"
      /> -->
      <div
        class=""
        style="background-color: yellow"
        v-for="(skill, i) in skills"
        :key="i"
      >
        <div>
          {{ skill.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: `Lokesh | Lokesh's skills 👷🏽‍♂️`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Tools and technology lokesh is familiar with.",
      },
    ],
  },
  data: function () {
    return {
      skills: [
        {
          icon: "html.svg",
          name: "Html",
        },
        {
          icon: "css.svg",
          name: "CSS",
        },
        {
          icon: "javascript.svg",
          name: "Javascript",
        },
        {
          icon: "nodejs.svg",
          name: "Node.js",
        },
        {
          icon: "vue.svg",
          name: "Vue.js",
        },
        {
          icon: "nuxt.svg",
          name: "Nuxt.js",
        },
        {
          icon: "git.svg",
          name: "Git",
        },
        {
          icon: "github.svg",
          name: "Github",
        },
        {
          icon: "adobexd.svg",
          name: "Adobe XD",
        },
        {
          icon: "chrome.svg",
          name: "Chrome Dev Tool",
        },
        {
          icon: "vscode.svg",
          name: "VScode",
        },
      ],
    };
  },
};
</script>
<style scoped>
.skill-set {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 50px;
}
.skill-set img {
  width: 80px;
  margin-top: 20px;
}
</style>
