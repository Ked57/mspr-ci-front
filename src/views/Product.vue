<template>
  <section
    class="font-sans antialiased w-full flex flex-auto justify-center py-8"
  >
    <div class="my-8 flex w-3/4 flex-auto justify-center">
      <div class="bg-white shadow rounded w-3/4 z-10">
        <div class="py-8 text-center text-green font-semibold uppercase">
          {{ product.name }}
        </div>
        <hr class="py-0 my-0 border border-grey-lighter" />
        <div class="py-8">
          <div class="flex items-top">
            <div v-if="product" class="w-full flex justify-center items-center">
              <Product :product="product" />
            </div>
            <div class="w-full flex justify-center items-center">
              {{ product.description }}
            </div>
          </div>
        </div>
        <a href="/cart" v-on:click="onAddToCartClicked">
          <div
            class="py-8 bg-grey-lighter hover:bg-grey-light text-indigo-darker rounded rounded-t-none text-center uppercase font-bold flex items-center justify-center"
          >
            <span>Add to cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="icon fill-current w-4 h-4 ml-2"
            >
              <path
                d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
                class="heroicon-ui"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Product from "@/components/ProductCard";
import store from "../store";
import router from "../router";
import { ACTIONS } from "../store/actions-definition";
export default {
  name: "Products",
  components: {
    Product
  },
  data() {
    return {};
  },
  computed: {
    product: () =>
      store.state.products.find(p => p.id === router.currentRoute.params.id)
  },
  methods: {
    onAddToCartClicked() {
      store.dispatch(ACTIONS.ADD_PRODUCT_TO_CART, this.product);
    }
  }
};
</script>
