<template>
  <div class="error-page">
    <div class="error-content">
      <div class="error-text" v-if="error.statusCode === 404">
        Error 404
      </div>
      <div class="error-text-small">
        That page does not exist
      </div>
      <div class="error-icon">
        <fa icon="spider" class="icon" />
      </div>
      <div class="navigation">
        <Button :button="primaryButton" />
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/atoms/Button.vue";
export default {
  props: ["error"],
  layout: "fullheight",
  components: {
    Button
  },
  data: function() {
    return {
      primaryButton: {
        class: "primary size20 nunito_font",
        text: "Back to home 👾"
      }
    };
  }
};
</script>
<style scoped>
.error-page {
  display: flex;
  justify-content: center;
}
.error-content{
  width: 100%;
  margin-top: 50px;
}
.error-text {
  color: #fff;
  font-size: 30px;
  font-family: "nunito", sans-serif;
  text-align: center;
  font-weight: 800;
  margin-bottom: 50px;
}
.error-text-small {
  color: #b2becd;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  font-family: "nunito", sans-serif;
}
.error-icon {
  display: flex;
  justify-content: center;
}
.icon {
  color: #b2becd;
  font-size: 200px;
}
.navigation {
  margin: 50px 0px 50px 0px;
  display: flex;
  justify-content: center;
}
</style>
