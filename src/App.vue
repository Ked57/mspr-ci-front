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
export default {
  name: "App",
  components: {
    Navbar
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
