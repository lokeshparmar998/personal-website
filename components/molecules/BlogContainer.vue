<template>
  <div class="blog-container bg-primary">
    <div class="blog-image">
      <img
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1631614145296/VPSeT3V51.png"
        alt=""
        srcset=""
      />
    </div>
    <div class="blog-details">
      <div class="tilte">This is a center aligned title</div>
      <div class="sub-title">
        These are sub title which will give a little more about the blog.
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.blog-container {
  width: 60%;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
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
</style>
