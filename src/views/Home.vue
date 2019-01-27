<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HomeSlider />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeSlider from '@/components/HomeSlider.vue'; // @ is an alias to /src

@Component({
  components: {
    HomeSlider,
  },
})
export default class Home extends Vue {}
</script>
