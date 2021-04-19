<template>
  <div class="bg-green-200 m-3 p-3 rounded-3xl shadow-md transform hover:scale-110 motion-reduce:transform-none hover:bg-green-300">
    <p class="text-xl font-semibold text-green-900">{{ this.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
};
</script>

<style></style>
