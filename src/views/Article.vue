<template>
  <base-article>
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
        ><base-hover-block>
          <button @click="editArticle">
            <span class="material-icons">
              edit
            </span>
          </button>
        </base-hover-block>
      </router-link>
      <base-hover-block>
        <button @click="deleteArticle" class="btn">
          <span class="material-icons">
            delete_forever
          </span>
        </button>
      </base-hover-block>
    </div>
  </base-article>
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
    async deleteArticle() {
      let confirm = window.confirm("Are you sure?");
      if (confirm) {
        fetch(this.urlArticle, { method: "DELETE" })
          .then(() => {
            this.$router.push("/");
          })
          .catch((error) => console.log(error));
      }
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
