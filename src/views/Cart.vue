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
            <tr
              v-for="productItem in cart.products"
              class="hover:bg-grey-lighter"
            >
              <td class="py-4 px-6 border-b border-grey-light">
                {{ productItem.product.name }}
              </td>
              <td class="py-4 px-6 border-b border-grey-light">
                {{
                  parseFloat(
                    productItem.product.price * productItem.quantity
                  ).toFixed(2)
                }}
                €
              </td>
              <td class="py-4 px-6 border-b border-grey-light">
                <a
                  href="#"
                  v-on:click="e => onDeleteItemClicked(e, productItem)"
                  class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark"
                  >X</a
                >
                <a
                  href="#"
                  v-on:click="e => onSubstractItemClicked(e, productItem)"
                  class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark"
                  >-</a
                >
                <span>{{ productItem.quantity }}</span>
                <a
                  href="#"
                  v-on:click="e => onAddItemClicked(e, productItem)"
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
import store from "../store/index";
import { ACTIONS } from "../store/actions-definition";
export default {
  name: "Cart",
  data() {
    return {
      cart: store.state.cart
    };
  },
  methods: {
    onDeleteItemClicked(e, productItem) {
      e.stopPropagation();
      store.dispatch(ACTIONS.REMOVE_PRODUCT_FROM_CART, productItem.product);
    },
    onSubstractItemClicked(e, productItem) {
      e.stopPropagation();
      store.dispatch(ACTIONS.SUBSTRACT_PRODUCT_FROM_CART, productItem.product);
    },
    onAddItemClicked(e, productItem) {
      e.stopPropagation();
      store.dispatch(ACTIONS.ADD_PRODUCT_TO_CART, productItem.product);
    }
  }
};
</script>
