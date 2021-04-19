<template>
  <base-hover-block>
    <div class="bg-green-200 m-3 p-3 rounded-3xl shadow-md hover:bg-green-300">
      <h1 class="title">{{ this.title }}</h1>
    </div>
  </base-hover-block>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
