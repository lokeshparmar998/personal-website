<template>
  <div class="skills">
    <div class="page-header">My Skill set</div>
    <div class="skill-set">
      <img src="~/assets/images/skills/html.svg" alt="html icon" />
      <img src="~/assets/images/skills/css.svg" alt="css icon" />
      <img src="~/assets/images/skills/javascript.svg" alt="js icon" />
      <img src="~/assets/images/skills/nuxt.svg" alt="nuxt icon" />
      <img src="~/assets/images/skills/vue.svg" alt="vue icon" />
      <img src="~/assets/images/skills/git.svg" alt="git icon" />
      <img src="~/assets/images/skills/github.svg" alt="github icon" />
      <img src="~/assets/images/skills/adobexd.svg" alt="adobexd icon" />
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
