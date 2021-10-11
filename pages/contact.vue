<template>
  <div class="contact">
    <div class="page-header">Connect with me</div>
    <div class="contact-form">
      <div class="form">
        <div class="field">
          <div class="label">
            Name
          </div>
          <input type="text" class="input" placeholder="Enter full name">
        </div>
        <div class="field">
          <div class="label">
            Email
          </div>
          <input type="text" class="input" placeholder="Enter email">
        </div>
        <div class="field">
          <div class="label">
            Message
          </div>
          <textarea class="text-area" placeholder="Enter message"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    formSubmission(){
      let url = 'https://formspree.io/f/xbjqbekv'
      this.$axios.$post('https://formspree.io/f/xbjqbekv',{
        name: 'test',
        email: 'testing@gmail.com'
      }).then(res=>{
        console.log('submitted')
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
.contact-form{
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.form{
  width: 60%;
  background-color: #2c405a;
  border: 1px solid #3f536e;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
}
.field{
  width: 100%;
  margin-bottom: 25px;
}
.label{
  color: white;
  font-size: 16px;
  font-family: "nunito", sans-serif;
  margin-bottom: 5px;
}
.input{
  width: 40%;
  height: 30px;
  background-color: #2c405a;
  color: white;
  outline: 0;
  border: none;
  border-bottom: 2px solid white;
  font-family: "nunito", sans-serif;
}
.text-area{
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
@media (max-width: 600px) {
.contact-form{
  width: 100%;
}
.form{
  width: 80%;
}
.input{
  width: 100%;
}
.text-area{
  width: 100%;
}
}
</style>