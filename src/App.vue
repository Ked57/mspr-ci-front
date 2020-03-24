<template>
  <div id="app">
    <Navbar />
    <div class="p-6">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import "@/assets/css/tailwind.css";
import Navbar from "./components/Navbar.vue";
import { ACTIONS } from "./store/actions-definition";
import store from "./store";
export default {
  name: "App",
  components: {
    Navbar
  },
  mounted() {
    store.dispatch(ACTIONS.SET_PRODUCTS);
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
