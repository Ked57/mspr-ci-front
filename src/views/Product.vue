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
            <div class="w-full flex justify-center items-center">
              <Product :product="product" />
            </div>
            <div class="w-full flex justify-center items-center">
              {{ product.description }}
            </div>
          </div>
        </div>
        <a href="#">
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
export default {
  name: "Products",
  components: {
    Product
  },
  data() {
    return {
      // this needs to be move to the store ASAP
      product: [
        {
          id: 1,
          name: "Peace Lily",
          unitPrice: 30,
          description: "A nice plant",
          category: "Indoor Plant",
          color: "red",
          logoUrl:
            "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
        },
        {
          id: 2,
          name: "Hand Sanitizer",
          unitPrice: 3000,
          description: "Rare remaining of hand sanitizer",
          category: "Healthcare",
          color: "blue",
          logoUrl:
            "https://mspr-ci-products.s3.fr-par.scw.cloud/person-holding-hand-sanitizer-3962331-removebg-preview.png"
        },
        {
          id: 3,
          name: "Plate",
          unitPrice: 10,
          description: "A nice plate",
          category: "Kitchen",
          color: "orange",
          logoUrl:
            "https://mspr-ci-products.s3.fr-par.scw.cloud/flatlay-photography-of-white-ceramic-bowl-2611817-removebg-preview.png"
        }
      ].filter(p => p.id === Number(this.$router.currentRoute.params.id))[0]
    };
  },
  mounted() {
    console.log("id", this.$router.currentRoute.params.id);
  }
};
</script>
