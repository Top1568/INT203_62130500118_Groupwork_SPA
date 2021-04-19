<template>
  <div class="bg-green-50 h-screen">
    <nav
      class="bg-green-800 w-screen flex items-center justify-between h-16 px-6 text-3xl text-white font-medium"
    >
      <router-link to="/">Home</router-link>
      <router-link to="/about" class="text-xl">About</router-link>
    </nav>
   <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      urlArticle: "http://localhost:3000/Article",
      articles: [],
    };
  },
  methods: {},
};
</script>

<style></style>
