<template>
  <div class="w-screen h-screen">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> 
  </div>
  

  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data() {
    return {
      urlArticle: "http://localhost:3000/Article",
      articles: [],
    };
  },
  methods: {},
};


</script>

<style>

</style>
