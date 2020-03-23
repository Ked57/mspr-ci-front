<template>
  <div class="home">
    <h1>Please login</h1>
    <div class="flex flex-auto justify-center">
      <input
        class="bg-white focus:outline-none flex-grow-0 focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 m-6 block appearance-none leading-normal"
        type="email"
        placeholder="your@email.here"
      />
      <a
        class="bg-white focus:outline-none flex-grow-0 hover:shadow-outline border border-gray-300 rounded-lg py-2 px-4 m-6 block appearance-none leading-normal"
        href="#"
        >Login</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
