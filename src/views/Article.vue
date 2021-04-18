<template>
  <p>{{ this.article.title }}</p>
  <p>{{ this.article.information }}</p>
  <button @click="deleteArticle" class="btn">
    <span class="material-icons">
      delete_forever
    </span>
  </button>
  <button @click="editArticle">
    <span class="material-icons">
      edit
    </span>
  </button>
  <button @click="closeArticle" class="btn">
    <span class="material-icons">
      close
    </span>
  </button>
  <article-form v-show="activeEdit" :articleId="this.articleId"></article-form>
</template>

<script>
import ArticleForm from '../views/ArticleForm.vue'

export default {
  components: {
    ArticleForm
  },
  data() {
    return {
      article: Object,
      urlArticle: `http://localhost:3000/Article/${this.articleId}`,
      activeEdit: false
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
    editArticle() {
      this.activeEdit = true
    },
    closeArticle() {
      this.$router.push("/");
    },
    async deleteArticle() {
      fetch(this.urlArticle, { method: "DELETE" })
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },
  },
  async created() {
    this.article = await this.getArticles();
  },
};
</script>

<style></style>
