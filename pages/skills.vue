<template>
  <div class="skills">
    <div class="page-header">My Tech. Journey</div>
    <div class="skill-set">
      <div class="navigatior">this is navigator</div>
      <div class="result">
        <ExperienceContainer :company="experiance[0]" />
      </div>
    </div>
  </div>
  <!-- <img
        :src="require(`@/assets/images/skills/${name}.svg`)"
        alt="adobexd icon"
      /> -->
</template>
<script>
import ExperienceContainer from '@/components/molecules/SkillsAndExperienceContainer.vue'
export default {
  head: {
    title: `Lokesh | Lokesh's journey 👷🏽‍♂️`,
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
  components:{
    ExperienceContainer
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
          icon: "express.svg",
          name: "Express.js",
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
        {
          icon: "capacitor.svg",
          name: "Capacitor",
        },
        {
          icon: "android.svg",
          name: "Android",
        },
        {
          icon: "ios.svg",
          name: "IOS",
        },
      ],
      experiance: [
        {
          company: "Avrio Energy Pvt. Ltd.",
          start: "Jan 2020",
          end: "Present",
          type: "Full Time",
          title: "Frontend Engineer",
          pointers: [
            `Designed, developed and maintained app for android and ios using nuxt.js and ionic capacitor.`,
            `Design, development and maintenance of SaaS platform and related features - CMMS / ticketing, instant messaging, energy management, alerts and notifications.`,
            `Built a configuration app to configure Avrio Energy Smart Hardware. App uses Wifi state to connect hardware to the currently available wifi.`,
            `Created custom charts using d3.js to meet the visualization requirement. Also worked with other charting libraries such as flot charts, apexcharts, amcharts.`,
          ],
          tech: [
            {
              icon: "nuxt.svg",
              name: "Nuxt.js",
            },
            {
              icon: "capacitor.svg",
              name: "Capacitor",
            },
            {
              icon: "android.svg",
              name: "Android",
            },
            {
              icon: "ios.svg",
              name: "IOS",
            },
            {
              icon: "flutter.svg",
              name: "Flutter",
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
          preview: [
            {
              icon: "android.svg",
              link: "https://play.google.com/store/apps/details?id=com.avrioenergy.buildingmanager",
              name: "Building Manager",
            },
            {
              icon: "ios.svg",
              link: "https://apps.apple.com/au/app/avrio-building-manager/id1576846148",
              name: "Avrio - Building Manager",
            },
            {
              icon: "flutter.svg",
              link: "https://play.google.com/store/apps/details?id=com.avrioenergy.buildingmanager_device_config",
              name: "Building Manager Config",
            },
            {
              icon: "website.svg",
              link: "https://drive.google.com/file/d/1lXDcp-8YAKtVgCzbizTd-igxseJdHIA8/view?usp=sharing",
              name: "Swadeshi Microprocessor Challenge",
            },
          ],
        },
        {
          company: "Menteechain Pvt. Ltd.",
          start: "Jan 2019",
          end: "July 2019",
          type: "Intern",
          title: "Full Stack Engineer",
          pointers: [
            `Designed the workflow of the website.`,
            `Created APIs for the frontend team in express.js.`,
            `Created a booking system for booking slots for summer camp.`,
          ],
          tech: [
            {
              icon: "nodejs.svg",
              name: "Node.js",
            },
            {
              icon: "express.svg",
              name: "Express.js",
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
          preview: [],
        },
      ],
    };
  },
};
</script>
<style scoped>
.skill-set {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.navigator{
  width: 30%;
}
.result{
  width: 70%
}
</style>
