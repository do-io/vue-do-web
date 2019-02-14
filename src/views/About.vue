<template>
  <div class="about">
    <AboutDarren/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AboutDarren from "@/components/AboutDarren.vue"; // @ is an alias to /src

@Component({
  components: {
    AboutDarren,
  },
})
export default class About extends Vue {
  public created() {
    document.title =
      "About a Charismatic Codefauna - " + process.env.VUE_APP_TITLE;
  }
}
</script>
