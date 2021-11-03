<template>
  <div class="qolor">
    <div class="qolor-menu">
      <div class="items" :class="[console == 'home' ? 'selected' : '']" @click="goto('home')">Home</div>
      <div class="items" :class="[console == 'saved' ? 'selected' : '']" @click="goto('saved')">Saved</div>
      <div class="items" :class="[console == 'create' ? 'selected' : '']" @click="goto('create')">Create</div>
    </div>
    <component v-bind:is="selectedSubHeader" ></component>
  </div>
</template>
<script>
import Home from "@/components/dev-apps/qolor/Home.vue";
import Saved from "@/components/dev-apps/qolor/Saved.vue";
import Create from "@/components/dev-apps/qolor/Create.vue";

export default {
  layout: "devapps",

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
  components: {
    Home,
    Saved,
    Create,
  },
  created() {
    let header = {
      title: "Qolor",
      sub_title: "Never go wrong with colors!",
    };
    this.$store.commit("devAppHeader/SET_HEADER", header);
    if (this.console == "create") {
      this.selectedSubHeader = Create;
    } else if (this.console == "saved") {
      this.selectedSubHeader = Saved;
    } else {
      this.selectedSubHeader = Home;
    }
  },
  data: function () {
    return {
      selectedSubHeader: null,
      console: this.$route.params.console,
    };
  },
  methods: {
    goto(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style scoped>
.qolor {
  width: 100%;
}
.qolor-menu {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.items {
  font-size: 18px;
  font-family: "nunito", sans-serif;
  padding: 10px;
  color: white;
}
.items:hover {
  cursor: url("~/assets/images/shared/pointer-cursor.svg"), auto;
}
.selected{
  background: url("~/assets/images/shared/highlight.svg");
  background-repeat: no-repeat;
  background-size: 120% 100%;
}
</style>
