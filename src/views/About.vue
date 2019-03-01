<template>
  <div class="about">
    <vue-headful
      :title="[title]"
      description="An avid developer advocate and practiced designer, Darren is active in all aspects of product development and lifecycle management."
    />
    <AboutDarren/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AboutDarren from "@/components/AboutDarren.vue"; // @ is an alias to /src

@Component({
  components: {
    AboutDarren
  },

})
export default class About extends Vue {
  data() {
    return {
      title: "About the Charismatic Codefauna | " + process.env.VUE_APP_TITLE
    }
  }
}
</script>
