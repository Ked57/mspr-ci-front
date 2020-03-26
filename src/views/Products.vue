<template>
  <div class="product">
    <h1>Check out our products</h1>
    <div class="p-24 flex flex-wrap items-center justify-center">
      <div v-for="product in products">
        <a :href="`/#/product/${product.id}`"><Product :product="product"/></a>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/ProductCard";
import store from "../store";
export default {
  name: "Products",
  components: {
    Product
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.products = store.state.products;
  }
};
</script>
