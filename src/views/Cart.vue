<template>
  <div class="cart">
    <h1>Your cart</h1>
    <div class="w-2/3 mx-auto">
      <div class="bg-white shadow-md rounded my-6">
        <table class="text-center w-full border-collapse">
          <thead>
            <tr>
              <th
                class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
              >
                Product
              </th>
              <th
                class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
              >
                Prix
              </th>
              <th
                class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" class="hover:bg-grey-lighter">
              <td class="py-4 px-6 border-b border-grey-light">
                {{ product.name }}
              </td>
              <td class="py-4 px-6 border-b border-grey-light">
                {{
                  parseFloat(product.unitPrice * product.quantity).toFixed(2)
                }}
                €
              </td>
              <td class="py-4 px-6 border-b border-grey-light">
                <a
                  href="#"
                  class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark"
                  >X</a
                >
                <a
                  href="#"
                  class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark"
                  >-</a
                >
                <span>{{ product.quantity }}</span>
                <a
                  href="#"
                  class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark"
                  >+</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      products: [
        {
          name: "Product 1",
          unitPrice: 10,
          quantity: 1
        },
        {
          name: "Product 2",
          unitPrice: 4.9,
          quantity: 3
        },
        {
          name: "Product 3",
          unitPrice: 19.9,
          quantity: 2
        }
      ]
    };
  }
};
</script>
