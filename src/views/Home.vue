<template>
  <div class="home">
    <vue-headful
      :title="[title]"
      description="An avid developer advocate and practiced designer, Darren is active in all aspects of product development and lifecycle management."
    />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HomeSlider/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeSlider from "@/components/HomeSlider.vue"; // @ is an alias to /src

@Component({
  components: {
    HomeSlider
  },
  // metaInfo() {
  //   return {
  //     title: "Code. Design. Story. Strategy. | " +  process.env.VUE_APP_TITLE
  //   }
  // }

})

export default class Home extends Vue {
  data() {
    return {
      title: "Code. Design. Story. Strategy. | " + process.env.VUE_APP_TITLE
    }
  }
  // public created() {
  //   document.title =
  //     "Code. Design. Story. Strategy. | " + process.env.VUE_APP_TITLE;
  // }
}
</script>

<style lang="scss">
.home {
  height: 100%;
}
</style>
