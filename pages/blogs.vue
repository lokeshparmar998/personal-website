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
};
</script>
<style scoped>
.blog-list {
  display: flex;
  justify-content: center;
}
</style>
