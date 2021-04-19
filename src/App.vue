<template>
  <div class="h-screen bg-gradient-to-b from-green-50">
    <navigation-bar/>
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "../src/components/NavigationBar.vue"
export default {
  name: "App",
  components: {
    NavigationBar
  }
};
</script>
