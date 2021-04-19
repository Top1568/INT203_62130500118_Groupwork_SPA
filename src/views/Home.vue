<template>
  <div class="text-center max-w-lg mx-auto">
    <ul>
      <li v-for="article in articles" :key="article.id">
        <router-link :to="{name: 'Article',params: { articleId: article.id }}">
          <base-title-block :title="article.title"> </base-title-block>
        </router-link>
      </li>
    </ul>
    <base-hover-block>
      <router-link to="/articleForm">
        <button class="btnGreen mt-4 ">
          <span class="material-icons text-3xl font-extrabold">
            add
          </span>
        </button>
      </router-link>
    </base-hover-block>
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
