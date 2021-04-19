<template>
  <div class="text-center max-w-lg mx-auto">
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
    <router-link to="/articleForm">
      <button class="bg-green-400 rounded-full border-white border-4 mt-4 px-3 py-2 shadow-lg transform hover:scale-110 motion-reduce:transform-none">
        <span class="material-icons text-3xl font-extrabold text-white">
          add
        </span>
      </button>
    </router-link>
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
