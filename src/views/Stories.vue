<template>
  <div id="story-home">
    <h1>{{ page_title }}</h1>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {},
  methods() {},
  computed() {},
});
</script>
