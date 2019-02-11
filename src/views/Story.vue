<template>
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
</template>