<template>
  <div class="skills">
    <div class="page-header">My Tech. Journey</div>
    <div class="skill-set">
      <div class="navigator">
        <div
          class="options"
          :class="[active == i ? 'active' : '']"
          v-for="(option, i) in experiance"
          :key="i"
          @click="navigate(option, i)"
        >
          {{ option.company }}
        </div>
      </div>
      <div class="result">
        <component :is="currentComponent" v-bind:company="selectedCompany">
        </component>
      </div>
    </div>
  </div>
</template>
<script>
import ExperienceContainer from "@/components/molecules/SkillsAndExperienceContainer.vue";
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
  components: {
    ExperienceContainer,
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
          company: "Avrio Energy",
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
          company: "Menteechain",
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
      currentComponent: ExperienceContainer,
      selectedCompany: null,
      active: 0,
    };
  },
  created() {
    this.selectedCompany = this.experiance[0];
  },
  methods: {
    navigate(option, active) {
      this.selectedCompany = option;
      this.active = active;
    },
  },
};
</script>
<style scoped>
.skill-set {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.navigator {
  width: 25%;
}
.options {
  background-color: #2c405a;
  border-left: solid 3px #b2becd;
  padding: 20px 10px 20px 15px;
  font-family: "lato", sans-serif;
  font-size: 15px;
  color: white;
}
.active {
  border-left: solid 3px #11c0bd;
}
.result {
  width: 70%;
}
@media screen and (max-width: 800px) {
  .skill-set {
    display: block;
    width: 100%;
  }
  .result {
    width: 90%;
    margin: auto;
  }
  .navigator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .options {
    border-bottom: solid 3px #b2becd;
    border-left: none
  }
  .active {
    border-bottom: solid 3px #11c0bd;
    border-left: none
  }
}
</style>
