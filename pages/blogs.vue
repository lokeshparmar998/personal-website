<template>
  <div class="blogs">
    <div class="page-header">Blogs</div>
    <div class="blog-list">
      <BlogContainer />
    </div>
    <div class="blog-list">
      <BlogContainer />
    </div>
  </div>
</template>
<script>
import BlogContainer from "@/components/molecules/BlogContainer.vue";
export default {
  components: {
    BlogContainer,
  },
  async fetch() {
    let query = `{
  user(username: "lokeshparmar998") {
    publication {
      posts(page: 0) {
        title
        brief
        slug
        coverImage
      }
    }
  }
}
`;
    /* await this.$axios.$post('https://api.hashnode.com',{
      body:
        JSON.stringify({
          query:
        }),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': '90101ee6-ddff-40e0-a121-4e44f9682bcc'
        },
    }).then(res =>{
      console.log(res.data)
    }).catch(err =>{
      console.log(err)
    }) */
  },
};
</script>
<style scoped>
.blog-list {
  display: flex;
  justify-content: center;
}
</style>
