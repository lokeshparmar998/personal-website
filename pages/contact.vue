<template>
  <div class="contact">
    <div class="page-header">Connect with me</div>
    <div class="contact-form">
      <div class="form">
        <div class="field">
          <div class="controller">
            <div class="label required">First name</div>
            <input
              type="text"
              class="input"
              placeholder="Enter first name"
              v-model="first_name"
            />
          </div>
          <div class="controller">
            <div class="label">Last name</div>
            <input
              type="text"
              class="input"
              placeholder="Enter last name"
              v-model="last_name"
            />
          </div>
        </div>
        <div class="field">
          <div class="controller">
            <div class="label required">Email</div>
            <input
              type="text"
              class="input"
              placeholder="Enter email"
              v-model="email"
            />
          </div>
          <div class="controller">
            <div class="label">Mobile</div>
            <input
              type="text"
              class="input"
              placeholder="Enter mobile"
              v-model="mobile"
            />
          </div>
        </div>
        <div class="area-field">
          <div class="label required">Message</div>
          <textarea
            class="text-area"
            placeholder="Enter message"
            v-model="message"
          ></textarea>
        </div>
        <Button :button="submissionButton" v-on:operation="formSubmission" />
        <div class="divider">
          <hr />
          Or
          <hr />
        </div>

        <div class="social-media">
          <a href="https://www.linkedin.com/in/lokesh-parmar/" target="_blank"
            ><img src="~/assets/images/social/linkedin.svg" alt=""
          /></a>
          <a href="https://twitter.com/lokeshparmar998" target="_blank"
            ><img src="~/assets/images/social/twitter.svg" alt=""
          /></a>
          <a href="https://github.com/lokeshparmar998" target="_blank"
            ><img src="~/assets/images/social/github.svg" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/atoms/Button.vue";
export default {
  components: {
    Button,
  },
  head: {
    title: `Connect with me 👋🏻`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Connect with lokesh through social media or by writing a message.'
      }
    ]
  },
  data: function () {
    return {
      first_name: null,
      last_name: null,
      mobile: null,
      email: null,
      message: null,
      submissionButton: {
        class: "secondary size45 nunito_font",
        text: "Submit  🚀",
        route: false,
        operation: true,
      },
    };
  },
  methods: {
    formSubmission() {
      let that = this;
      const pattern = RegExp("[a-zA-Z0-9._-]+@[a-z]+");
      if (this.first_name == null || this.first_name == "") {
        this.$toast.error("Please enter first name!!", {
          position: "top-center",
          duration: 2000,
        });
        return;
      }
      if (this.email == null || this.email == "") {
        this.$toast.error("Please enter email!!", {
          position: "top-center",
          duration: 2000,
        });
        return;
      }
      if (this.email == "test@gmail.com" || this.email == "testing@gmail.com") {
        this.$toast.error("No test email allowed 😜", {
          position: "top-center",
          duration: 2000,
        });
        return;
      }
      if (!pattern.test(this.email)) {
        this.$toast.error("Invalid email!!", {
          position: "top-center",
          duration: 2000,
        });
        return;
      }
      if (this.message == null || this.message == "") {
        this.$toast.error("Please enter message", {
          position: "top-center",
          duration: 2000,
        });
        return;
      }
      this.$axios
        .$post(this.$config.formspeerUrl, {
          first_name: this.first_name,
          last_name: this.last_name,
          mobile: this.mobile,
          email: this.email,
          message: this.message,
        })
        .then((res) => {
          that.$toast.success("Message sent!", {
            theme: "toasted-primary",
            position: "top-right",
            duration: 1000,
          });
        })
        .catch((err) => {
          that.$toast.error("Something went wrong!!!", {
            position: "top-center",
            duration: 2000,
          });
        });
    },
  },
};
</script>
<style scoped>
.contact-form {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.form {
  width: 60%;
  background-color: #2c405a;
  border: 1px solid #3f536e;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
}
.field {
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
}
.area-field {
  width: 100%;
  margin-bottom: 25px;
}
.controller {
  width: 45%;
}
.label {
  color: white;
  font-size: 16px;
  font-family: "nunito", sans-serif;
  margin-bottom: 5px;
}
.input {
  width: 100%;
  height: 30px;
  background-color: #2c405a;
  color: white;
  outline: 0;
  border: none;
  border-bottom: 2px solid white;
  font-family: "nunito", sans-serif;
}
.text-area {
  background-color: #2c405a;
  width: 100%;
  height: 30px;
  resize: none;
  color: white;
  border: none;
  border-bottom: 2px solid white;
  font-family: "nunito", sans-serif;
  outline: 0;
}
.required::after {
  content: "  *";
  color: red;
}
.divider {
  display: flex;
  width: 100%;
  color: white;
  margin-top: 40px;
  margin-bottom: 20px;
  justify-content: space-between;
}
hr {
  width: 45%;
  border: 1px solid #3f536e;
}
.social-media {
  margin: 30px 0px 10px 0px;
  display: flex;
  justify-content: center;
}
.social-media img {
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-right: 10px;
}
@media (max-width: 600px) {
  .contact-form {
    width: 100%;
  }
  .form {
    width: 80%;
  }
  .input {
    width: 100%;
  }
  .text-area {
    width: 100%;
  }
  .field {
    width: 100%;
    margin-bottom: 25px;
    display: block;
  }
  .controller {
    width: 100%;
    margin-top: 25px;
  }
}
</style>
