<template>
  <div class="blogs">
    <div class="page-header">Blogs</div>
    <div class="blog-list" v-for="(blog, x) in blogs" :key="x">
      <BlogContainer :blog="blog" />
    </div>
  </div>
</template>
<script>
import BlogContainer from "@/components/molecules/BlogContainer.vue";
export default {
  components: {
    BlogContainer,
  },
  head: {
    title: `Lokesh | Lokesh's blogs 🤖`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Blogs on javascript and related topics.",
      },
    ],
  },
  data: function () {
    return {
      blogs: [],
      show: false,
    };
  },
  async fetch() {
    let that = this;
    await this.$axios({
      url: "https://api.hashnode.com/graphql",
      method: "post",
      data: {
        query: `{user(username: "lokeshparmar998") {
                      publication {
                      posts(page: 0) {
                      title
                      brief
                      slug
                      coverImage
                    }
    }
  }}`,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: this.$config.hashnodeApiKey,
      },
    })
      .then((res) => {
        that.blogs = res.data.data.user.publication.posts;
      })
      .catch((err) => {
        that.$toast.error("Something went wrong 😅", {
          position: "top-center",
          duration: 2000,
        });
      });
  },
};
</script>
<style scoped>
.blog-list {
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
</style>
