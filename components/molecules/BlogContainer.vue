<template>
  <div class="blog-container bg-primary" @click="goto">
    <div class="blog-image">
      <img :src="blog.coverImage" alt="" srcset="" />
    </div>
    <div class="blog-details">
      <div class="tilte">{{ blog.title }}</div>
      <div class="sub-title">
        {{ blog.brief }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    blog: Object,
  },
  methods:{
    goto(){
      window.open(`https://blog.lokeshparmar998.tech/${this.blog.slug}`)
    }
  }
};
</script>
<style scoped>
.blog-container {
  width: 50%;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.blog-image {
  width: 100%;
  display: flex;
  justify-content: center;
}
.blog-image img {
  width: 80%;
}
.tilte {
  text-align: center;
  font-size: 25px;
  color: #fff;
  font-family: "raleway", sans-serif;
  font-weight: bold;
  margin-top: 15px;
  padding: 10px 0px 10px 0px;
}
.sub-title {
  text-align: center;
  font-size: 20px;
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
