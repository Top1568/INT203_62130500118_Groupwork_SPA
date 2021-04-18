<template>
  <form @submit.prevent="submitForm">
    <label>Title </label>
    <input id="title" type="text" v-model="title" />

    <h2>information</h2>

    <textarea name="information" v-model="information"></textarea>
    <button @click="addNewArticle">
      Submit
    </button>
  </form>
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
          fetch(`${this.urlArticles}/${this.articleId}`,{
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            title: this.title,
            information: this.information
          }),
        }).catch(error => console.log(error));
      } else {
        fetch(this.urlArticles, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            title: this.title,
            information: this.information
          }),
        }).catch((error) => console.log(error));
      }

      this.$router.push("/");
    },
  },
};
</script>

<style></style>
