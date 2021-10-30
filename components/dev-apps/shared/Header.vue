<template>
  <header>
    <div class="header-branding">
      <div class="logo">
        <img src="~/assets/images/dev-apps/qolor.png" alt="" />
      </div>
      <div class="buy-me-coffee">
        <a href="https://www.buymeacoffee.com/lokeshparmar998" target="_blank">
          <img
            class="bmc-logo"
            src="https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/10/61a02a6a61422f1718b2dfc60db93592.png@100w_0e.webp"
            alt="Buy me a coffee"
          />
        </a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    header: Object,
  },
  data: function () {
    return {
      coffeeLink: "https://www.buymeacoffee.com/lokeshparmar998",
    };
  },
};
</script>
<style scoped>
header {
  width: 100wh;
  padding: 15px;
}
.header-branding {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.buy-me-coffee a img {
  border-radius: 50%;
  width: 50px;
}
.logo img {
  width: 150px;
  cursor: url("~/assets/images/shared/pointer-cursor.svg"),auto;
}
</style>
