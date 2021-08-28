<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
  </div>
</template>
<script>
export default {
  props: ["error"],
  layout: "fullheight" // you can set a custom layout for the error page
};
</script>
