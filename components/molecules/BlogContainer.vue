<template>
  <div class="blog-container bg-primary" @click="goto">
    <div class="blog-image">
      <img :src="blog.coverImage" alt="" srcset="" />
    </div>
    <div class="blog-details">
      <div class="tilte">{{ blog.title }}</div>
      <div class="sub-title">
        {{ sub_title }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    blog: Object,
  },
  data: function () {
    return {
      sub_title: "",
    };
  },
  created() {
    this.sub_title = this.blog.brief;
    if (this.sub_title.length > 30)
      this.sub_title = this.sub_title.substring(0, 130) + "...";
  },
  methods: {
    goto() {
      window.open(`https://blog.lokeshparmar998.tech/${this.blog.slug}`);
    },
  },
};
</script>
<style scoped>
.blog-container {
  width: 20%;
  min-width: 200px;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: url("~/assets/images/shared/pointer-cursor.svg"),auto;
}
.blog-image {
  width: 100%;
  display: flex;
  justify-content: center;
}
.blog-image img {
  width: 100%;
}
.tilte {
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-family: "raleway", sans-serif;
  font-weight: bold;
  margin-top: 15px;
  padding: 10px 0px 10px 0px;
}
.sub-title {
  text-align: center;
  font-size: 15px;
  color: #b2becd;
  font-family: "raleway", sans-serif;
  font-weight: 500;
  padding: 0px 0px 10px 0px;
}
@media (max-width: 600px) {
  .blog-container {
    width: 80%;
  }
}
</style>
