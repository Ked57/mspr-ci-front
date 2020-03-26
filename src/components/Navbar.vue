<template>
  <nav class="bg-white px-8 pt-2 shadow-md">
    <div class="-mb-px flex justify-center">
      <a
        class="no-underline text-grey-dark text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
        :class="{
          'text-red-500': page === 'Home',
          'border-red-500': page === 'Home'
        }"
        href="/"
      >
        Home
      </a>
      <a
        class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
        :class="{
          'text-red-500': page === 'Products',
          'border-red-500': page === 'Products'
        }"
        href="/#/products"
      >
        Products
      </a>
      <a
        class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
        :class="{
          'text-red-500': page === 'Cart',
          'border-red-500': page === 'Cart'
        }"
        href="/#/cart"
      >
        Cart
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      page: this.$router.currentRoute.name
    };
  }
};
</script>

<style scoped lang="scss"></style>
