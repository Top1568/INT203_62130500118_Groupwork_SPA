<template>

  <button @click="buttonClick" class="btn">
    <span class="material-icons">
      delete_forever
    </span>
  </button>
  <button @click="buttonClick" class="btn">
    <span class="material-icons">
      edit
    </span>
  </button>
</template>

<script>
export default {
  props: {
    article : Object
  }
};
</script>

<style></style>
