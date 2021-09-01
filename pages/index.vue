<template>
  <div class="about">
    <div class="about-container">
      <div class="profile-pic">
        <img src="~/assets/images/lokesh-profile.png" alt="" />
      </div>
      <div class="profile-container">
        <div class="profile-header">
          Hello World! This is Lokesh.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.about{
  display: flex;
  justify-content: center;
}
.about-container{
  margin-top: 80px;
}
.profile-pic{
  display: flex;
  justify-content: center;
}
.profile-pic img {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: -50px;
}
.profile-container{
  width: 493px;
  height: 427px;
  background-color: #2c405a;
  padding-top: 40px;
}
.profile-header{
  margin-top: 35px;
  margin-bottom: 20px;
  font-size: 30px;
  text-align: center;
  font-family: 'nunito',sans-serif;
  letter-spacing: -0.47px;
  color: #ffffff;
  font-weight: 600;
  line-height: 50px;
}
</style>
