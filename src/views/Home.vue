<template>
  <div class="home">
    <HomeRotate/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HomeSlider from "@/components/HomeSlider.vue"; // @ is an alias to /src

@Component({
  components: {
    HomeRotate: () => import("@/components/HomeRotateHero.vue")
  }
})
export default class Home extends Vue {
  public data() {
    return {
      title: "Code. Design. Story. Strategy. | " + process.env.VUE_APP_TITLE
    };
  }
}
</script>

<style lang="scss">
.home {
  height: 100%;
}
</style>
