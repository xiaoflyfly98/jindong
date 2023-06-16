<template>
  <div class="wrapper">
    <Toparea />
    <ProductList />
    <Order />
  </div>
</template>

<script>
import ProductList from "./ProductList";
import Toparea from "./Toparea";
import Order from "./Order";
export default {
  name: "Orderconfirmation",
  components: { Toparea, ProductList ,Order},
  setup() {

  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: scroll;
}
</style>