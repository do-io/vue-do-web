<template>
  <div class="about">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <AboutDarren />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AboutDarren from '@/components/AboutDarren.vue'; // @ is an alias to /src

@Component({
  components: {
    AboutDarren,
  },
})
export default class About extends Vue {}
</script>
