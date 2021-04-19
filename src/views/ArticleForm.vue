<template>
  <base-article>
    <form @submit.prevent="addArticle" class="flex flex-col">
      <input
        id="title"
        type="text"
        v-model="title"
        class="text-2xl w-96 mx-auto"
      />
      <textarea
        name="information"
        v-model="information"
        class="mt-4 h-screen w-11/12 mx-auto"
      ></textarea>
      <base-hover-block>
        <input
          type="submit"
          value="Send Request"
          class="cursor-pointer mx-auto mt-4 w-40 text-lg font-extrabold btnGreen"
        />
      </base-hover-block>
    </form>
  </base-article>
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
    articleTitle: {
      type: String,
    },
    articleInformation: {
      type: String,
    },
  },
  methods: {
    async addArticle() {
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
  created() {
    if (this.articleId) {
      this.title = this.articleTitle;
      this.information = this.articleInformation;
    }
  },
};
</script>
