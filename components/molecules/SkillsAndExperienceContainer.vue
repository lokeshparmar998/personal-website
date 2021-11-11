<template>
  <section>
    <div class="experience-container">
      <div class="container-header">
        <div class="title">{{ company.title }}</div>
        <div class="company">@{{ company.company }}</div>
      </div>
      <div class="timeline">
        <div class="period">{{ company.start }} - {{ company.end }}</div>
        <div>|</div>
        <div class="employment-type">
          {{ company.type }}
        </div>
      </div>
      <div class="work-list">
        <ul>
          <li v-for="(point, i) in company.pointers" :key="i">{{ point }}</li>
        </ul>
      </div>
      <div class="sub-title">Tools and Tech. Used</div>
      <div class="tech-stack">
        <div v-for="(icon, i) in company.tech" :key="i" class="tech-icon">
          <img
            :src="require(`@/assets/images/skills/${icon.icon}`)"
            :alt="icon.name"
          />
          <div class="tech-name">
            {{ icon.name }}
          </div>
        </div>
        <!-- -->
      </div>
      <div class="sub-title" v-if="company.preview.length!=0">Preview my work</div>
      <div class="tech-stack" v-if="company.preview.length!=0">
        <div v-for="(icon, i) in company.preview" :key="i" class="preview-icon">
          <img
            :src="require(`@/assets/images/skills/${icon.icon}`)"
            :alt="icon.name"
            @click="checkoutWork(icon.link)"
          />
        </div>
        <!-- -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    company: Object,
  },
  methods: {
    checkoutWork(link) {
      window.open(link, '_blank').focus();
    },
  },
};
</script>
<style scoped>
/* section{
    background-color: #2c405a;
    padding: 10px;
} */
.container-header {
  display: flex;
  font-size: 20px;
  font-family: "nunito", sans-serif;
  letter-spacing: 1.5px;
}
.title {
  color: white;
  margin-right: 5px;
}
.company {
  color: #50dbb4;
}
.timeline {
  display: flex;
  color: white;
  font-family: "nunito", sans-serif;
  font-size: 13px;
  margin-top: 5px;
}
.period {
  margin-right: 10px;
}
.employment-type {
  margin-left: 10px;
}
.work-list {
  margin-top: 20px;
}
ul {
  padding-left: 13px;
}
li {
  margin-top: 10px;
  font-family: "lato", sans-serif;
  color: #b2becd;
  font-size: 18px;
}
.sub-title {
  margin-top: 15px;
  color: #b2becd;
  font-size: 20px;
  font-family: "lato", sans-serif;
  
}
.tech-stack {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 15px;
}
.tech-stack img {
  width: 30px;
}
.tech-icon {
  display: grid;
  place-items: center;
}
.preview-icon img {
  width: 60px;
}
.preview-icon img:hover {
  cursor: url("~/assets/images/shared/pointer-cursor.svg"), auto;
}
.tech-name {
  color: white;
  font-size: 12px;
  font-family: "roboto", sans-serif;
  margin-top: 2px;
}
</style>
