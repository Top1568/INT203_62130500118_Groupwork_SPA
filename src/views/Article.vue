<template>
  <div class="w-5/6 mx-auto bg-yellow-50 text-center mt-4 shadow-lg p-6 relative">
    <h1 class="text-2xl">{{ this.article.title }}</h1>
    <div id="information" class="mt-4"></div>
    <div class="absolute bottom-2 right-2 flex space-x-3">
      <router-link
        :to="{
          name: 'ArticleForm',
          params: {
            articleId: this.article.id,
            articleTitle: this.article.title,
            articleInformation: this.article.information,
          },
        }"
      >
        <button @click="editArticle">
          <span class="material-icons">
            edit
          </span>
        </button>
      </router-link>

      <button @click="deleteArticle" class="btn">
        <span class="material-icons">
          delete_forever
        </span>
      </button>
    </div>
    <button @click="closeArticle" class="absolute top-2 right-2">
      <span class="material-icons">
        close
      </span>
    </button>
  </div>
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
    editArticle() {
      this.activeEdit = true;
      this.activeRead = false;
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
    let doc = document.querySelector("#information");
    let arrDoc = await this.article.information.split("\n");
    for (let i = 0; i < arrDoc.length; i++) {
      doc.innerHTML += `<p>${arrDoc[i]}</p>`;
    }
  },
};
</script>

