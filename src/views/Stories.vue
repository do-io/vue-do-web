<template>
  <main>
    <div v-if="isLoggedIn" class="edit-nav">
      <button class="button new-story" @click="newStory">New Story</button>
      <button class="button logout" @click="logout">Logout</button>
    </div>
    <h1>{{ pageTitle }}</h1>
    <div v-for="(story,index) in stories" :key="story.slug + '_' + index">
      <router-link :to="'/story/' + story.slug">
        <article class="media">
          <figure>
            <img v-if="story.featured_image" :src="story.featured_image" alt>
            <img v-else src="http://via.placeholder.com/250x250" alt>
          </figure>
          <h2>{{ story.title }}</h2>
          <p>{{ story.summary }}</p>
        </article>
      </router-link>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import firebase, { auth } from "firebase";
import { db } from "@/main";
import { mapState, mapGetters } from "vuex";

const pageTitle = "Stories from a Charismatic Codefauna";

export default Vue.extend({
  data() {
    return {
      pageTitle: "Stories from a Charismatic Codefauna",
      stories: []
    };
  },
  head: {
    title: {
      inner: pageTitle
    },
    meta: [
      {
        name: "description",
        content: "My description",
        id: "desc"
      },
      {
        name: "og:description",
        content: "My description",
        id: "og:desc"
      }
    ]
  },
  firestore() {
    return {
      stories: db.collection("stories").orderBy("createdAt")
    };
  },
  methods: {
    newStory() {
      this.$router.replace("story");
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.dispatch("logout");
        })
        .catch(() => {
          this.$store.commit("login_error");
        });
    }
  },
  computed: mapGetters(["isLoggedIn"])
});
</script>

<style lang="scss" scoped>
main {
  margin: 0 100px 2.19rem 2.19rem;
  display: grid;
}
</style>
