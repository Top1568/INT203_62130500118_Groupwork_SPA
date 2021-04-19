<template>
  <div
    class="w-5/6 mx-auto bg-yellow-50 text-center mt-4 shadow-lg p-6 relative"
  >
    <form @submit.prevent="addNewArticle" class="flex flex-col">
        <input id="title" type="text" v-model="title"  class="text-2xl w-96 mx-auto"/>
  

      <textarea name="information" v-model="information" class="mt-4 h-screen w-11/12 mx-auto"></textarea>

   
      <input type="submit" value="Send Request" class="mx-auto mt-4 w-40 text-lg font-extrabold text-white bg-green-400 rounded-full border-white border-4 px-3 py-2 shadow-lg transform hover:scale-110 motion-reduce:transform-none">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      information: "",
      urlArticles: "http://localhost:3000/Article",
    };
  },
  props: {
    articleId: {
      type: Number,
    },
  },
  methods: {
    async addNewArticle() {
      if (this.articleId) {
        fetch(`${this.urlArticles}/${this.articleId}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            title: this.title,
            information: this.information,
          }),
        }).catch((error) => console.log(error));
      } else {
        fetch(this.urlArticles, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            title: this.title,
            information: this.information,
          }),
        }).catch((error) => console.log(error));
      }

      this.$router.push("/");
    },
  },
};
</script>

<style></style>
