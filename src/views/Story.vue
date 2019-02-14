<template>
  <section>
    <article id="story">
      <h1>{{ story.title }}</h1>
      <h4>{{ story.author.first_name }} {{ story.author.last_name }}</h4>
      <div v-html="story.body"></div>

      <router-link
        v-if="story.previous_story"
        :to="/story/ + story.previous_story.slug"
        class="button"
      >{{ story.previous_story.title }}</router-link>
      <router-link
        v-if="story.next_story"
        :to="/story/ + story.next_story.slug"
        class="button"
      >{{ story.next_story.title }}</router-link>
    </article>
    <form @submit="addStory(title, author, summary, body, datetime)">
      <h2>Write a new Story</h2>
      <input v-model="title" placeholder="Story Title" class="input" required>
      <input v-model="author" placeholder="Writer" class="input" required>
      <input v-model="summary" placeholder="Summary" class="input" required>
      <input v-model="body" placeholder="Body" class="input" required>
      <input v-model="datetime" placeholder="Date Published" class="input" required>
      <button type="submit" class="button">Add New Comic</button>
    </form>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      story: []
    };
  }
  // methods() {},
  // computed() {},
});
</script>
