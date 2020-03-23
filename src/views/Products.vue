<template>
  <div class="product">
    <h1>Check out our products</h1>
    <div class="p-24 flex flex-wrap items-center justify-center">
      <div v-for="product in products">
        <a :href="`/product/${product.id}`"><Product :product="product"/></a>
      </div>
    </div>
  </div>
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
      products: [
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
      ]
    };
  }
};
</script>
