<template>
  <div class="qolor">
    <div class="pallete-list">
      <div class="pallete" v-for="(qolor, i) in qolorList" :key="i">
        <QolorContainer :qolor="qolor" />
      </div>
    </div>
  </div>
</template>
<script>
import QolorContainer from "@/components/dev-apps/qolor/QolorContainer.vue";
export default {
  layout: "devapps",
  components: {
    QolorContainer,
  },
  head: {
    title: `Qolor ✔️`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Never go wrong with colors again qolor. Choose perfect colors from thousands of colors and make great projects.",
      },
    ],
  },
  created() {
    let header = {
      title: "Qolor",
      sub_title: "Never go wrong with colors!",
    };
    this.$store.commit("devAppHeader/SET_HEADER", header);
  },
  data: function () {
    return {
      qolorList: [
        {
          id: 1,
          saved: true,
          colors: ["#FF6263", "#DE4839", "#BF3325", "#E21717"],
        },
        {
          saved: false,
          id: 2,
          colors: ["#EB4D4B", "#EF5354", "#D82E2F", "#B4161B"],
        },
        {
          saved: false,
          id: 3,
          colors: ["#E6425E", "#E83A59", "#B9345A", "#BF3312"],
        },
        {
          saved: false,
          id: 4,
          colors: ["#51E1ED", "#23C4ED", "#12B0E8", "#1B98F5"],
        },
        {
          saved: false,
          id: 5,
          colors: ["#46B2E0", "#3944F7", "#2827CC", "#383CC1"],
        },
        {
          saved: false,
          id: 6,
          colors: ["#51E1ED", "#5DA3FA", "#03203C", "#120E43"],
        },
        {
          saved: false,
          id: 7,
          colors: ["#50DBB4", "#02B290", "#38CC77", "#1FAA59"],
        },
        {
          saved: false,
          id: 8,
          colors: ["#3DBE29", "#4DD637", "#1C8D73", "#66AD47"],
        },
        {
          saved: false,
          id: 9,
          colors: ["#22CB5C", "#00D84A", "#6AC47E", "#6EC72D"],
        },
        {
          saved: false,
          id: 10,
          colors: ["#E5D68A", "#EDBF69", "#EDC126", "#F4BE2C"],
        },
        {
          saved: false,
          id: 11,
          colors: ["#DDD101", "#E8BD0D", "#F7CD2E", "#D9D55B"],
        },
        {
          saved: false,
          id: 12,
          colors: ["#F4CE6A", "#C7C11A", "#A77B06", "#AF9D5A"],
        },
        {
          saved: false,
          id: 13,
          colors: ["#8D3DAF", "#E07C24", "#758283", "#E03B8B"],
        },
        {
          saved: false,
          id: 14,
          colors: ["#FF6666", "#242B2E", "#03C6C7", "#5A20CB"],
        },
        {
          saved: false,
          id: 15,
          colors: ["#6BB251", "#40A819", "#45FF00", "#B2009E"],
        },
        {
          saved: false,
          id: 16,
          colors: ["#FFFFFF", "#FBF37C", "#7F7F7F", "#58555A"],
        },
        {
          saved: false,
          id: 17,
          colors: ["#FFF587", "#FF8C64", "#FF665A", "#7D6B7D"],
        },
        {
          saved: false,
          id: 18,
          colors: ["#95998A", "#BDCC94", "#FFEC67", "#A9B6CC"],
        },
        {
          saved: false,
          id: 19,
          colors: ["#6593A6", "#58595B", "#F2CF63", "#F2C063"],
        },
        {
          saved: false,
          id: 20,
          colors: ["#1E1803", "#9E9D9B", "#FDFAEF", "#EDCA4D"],
        },
        {
          saved: false,
          id: 21,
          colors: ["#037F8C", "#025959", "#F2CEA2", "#F28241"],
        },
        {
          saved: false,
          id: 22,
          colors: ["#BEAAF6", "#9292D4", "#ADBEEB", "#92B5D4"],
        },
        {
          saved: false,
          id: 23,
          colors: ["#D94E73", "#F2994B", "#47B0C5", "#F26457"],
        },
        {
          saved: false,
          id: 24,
          colors: ["#BFF5C8", "#3FD49B", "#A9E7EB", "#8EB4D4"],
        },
        {
          saved: false,
          id: 25,
          colors: ["#F2421B", "#F2C12E", "#A3D9D9", "#2A5CBF"],
        },
      ],
    };
  },
};
</script>
<style scoped>
.qolor {
  width: 100%;
}
.pallete-list {
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
