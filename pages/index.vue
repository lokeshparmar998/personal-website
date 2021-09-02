<template>
  <div class="about">
    <div class="about-container">
      <div class="profile-pic">
        <img src="~/assets/images/lokesh-profile.png" alt="" />
      </div>
      <div class="profile-container">
        <div class="">
          <div class="profile-header">
            Hello World! This is Lokesh.
          </div>
          <div class="profile-content">
            I am a javascript developer based in Gurugram (India) 😎
          </div>
          <div class="profile-content">
            I love working with Nuxt.js and Vue.js 🦾
          </div>
          <div class="profile-content">
            Ping me if you need help (or just wanna' chat) 🤖
          </div>
          <div class="social-media">
            <a href="https://www.linkedin.com/in/lokesh-parmar/" target="_blank"
              ><img src="~/assets/images/social/linkedin.svg" alt=""
            /></a>
            <a href="https://github.com/lokeshparmar998" target="_blank"
              ><img src="~/assets/images/social/github.svg" alt=""
            /></a>
            <a href="https://twitter.com/lokeshparmar998" target="_blank"
              ><img src="~/assets/images/social/twitter.svg" alt=""
            /></a>
          </div>
        </div>
        <div class="profile-footer">
          <Button :button="primaryButton" />
          <Button :button="secondaryButton" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/atoms/Button.vue";
export default {
  components: {
    Button
  },
  data: function() {
    return {
      primaryButton: {
        class: "primary size45 nunito_font",
        text: "Checkout my projects 👨‍💻"
      },
      secondaryButton: {
        class: "secondary size45 nunito_font",
        text: "Connect with me 🤓"
      }
    };
  }
};
</script>
<style scoped>
.about {
  display: flex;
  justify-content: center;
}
.about-container {
  margin-top: 80px;
}
.profile-pic {
  display: flex;
  justify-content: center;
}
.profile-pic img {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: -50px;
  -webkit-box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.75);
box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.75);
}
.profile-container {
  width: 493px;
  height: 427px;
  background-color: #2c405a;
  padding-top: 40px;
  border: 1px solid #3f536e;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.profile-header {
  margin-top: 35px;
  margin-bottom: 20px;
  font-size: 30px;
  text-align: center;
  font-family: "nunito", sans-serif;
  letter-spacing: -0.47px;
  color: #ffffff;
  font-weight: 600;
  line-height: 50px;
}
.profile-content {
  margin: 10px 0px;
  font-size: 16px;
  color: #a8c6df;
  font-family: "nunito", sans-serif;
  text-align: center;
}
.social-media {
  margin: 30px 0px 45px 0px;
  display: flex;
  justify-content: center;
}
.social-media img {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.profile-footer {
  background-color: #273950;
  padding: 10px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: space-around;
  padding: 30px 0px;
}
</style>
