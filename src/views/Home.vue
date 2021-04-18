<template>
  <div class="home">
    <ul>
      <li v-for="article in articles" :key="article.id">
        <router-link
          :to="{
            name: 'Article',
            params: { articleId: article.id },
          }"
        >
          <base-title-block :title="article.title"> </base-title-block>
        </router-link>
      </li>
    </ul>
    <button>
      <router-link to="/articleForm">
        <span class="material-icons">
          add
        </span>
      </router-link>
    </button>
  </div>
</template>

<script>
import BaseTitleBlock from "../components/BaseTitleBlock.vue";

export default {
  name: "Home",
  components: {
    BaseTitleBlock,
  },
  data() {
    return {
      urlArticle: "http://localhost:3000/Article",
      articles: [],
    };
  },
  methods: {
    async getArticles() {
      return fetch(this.urlArticle)
        .then((res) => res.json())
        .catch((error) => console.log(error));
    },
    openArticle(title) {
      this.$router.push(`/article/${title}`);
    },
  },
  async created() {
    this.articles = await this.getArticles();
  },
};
</script>
