<template>
  <p>{{ this.article.title }}</p>
  <p>{{ this.article.information }}</p>
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
  <button @click="closeArticle" class="btn">
    <span class="material-icons">
      close
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      article: Object,
      urlArticle: `http://localhost:3000/Article/${this.articleId}`,
    };
  },
  props: {
    articleId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    async getArticles() {
      return fetch(this.urlArticle)
        .then((res) => res.json())
        .catch((error) => console.log(error));
    },
    buttonClick() {
      this.$router.push("/");
    },
    closeArticle() {
      this.$router.push("/");
    },
  },
  async created() {
    this.article = await this.getArticles();
  },
};
</script>

<style></style>
