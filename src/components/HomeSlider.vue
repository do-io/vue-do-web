<template>
  <v-carousel
    class="fullwidth"
    height="calc(100vh - 64px)"
    :cycle="false"
    delimiter-icon="fas fa-code"
    hide-controls
  >
    <v-carousel-item>
      <coderVue/>
    </v-carousel-item>
    <v-carousel-item>
      <designVue/>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
Vue.component("coderVue", () => import("@/components/Coder.vue"));
Vue.component("designVue", () => import("@/components/Designer.vue"));

export default class HomeSlider extends Vue {}
</script>

<style lang="scss" >
.home .v-carousel__controls {
  background-color: transparent;
  left: 1rem;
  justify-content: unset;
  position: fixed;
  top: 85vh;
  .v-icon {
    color: var(--light-color);
  }
  .v-btn--active {
    .v-icon {
      opacity: 1;
    }
  }
  .v-btn--icon {
    // background-color: ;
    border-radius: 0;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important;
    width: 8vw;
    border-bottom: 2px solid var(--code);
    &:hover {
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) !important;
    }
    &::before {
      border-radius: 0;
    }
  }
}
article {
  position: relative;
  left: 24px;
  width: 40vw;
  display: grid;
  h2 {
    grid-row: 2;
    position: relative;
    margin-top: 8vh;
    font-size: 80px;
    color: var(--light-primary);
    // text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12);
    text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14),
      0px 1px 5px rgba(0, 0, 0, 0.12);
  }
  .v-card {
    grid-row: 1;
    position: relative;
    top: 7vh;
  }
}
.v-card {
  display: grid;
  height: 45vh;
  h3 {
    margin: 1rem 0;
  }
}
.v-card__title {
  height: calc(100% - 48px);
  width: calc(100% - 48px);
  overflow-y: scroll;
  padding: 0;
  align-self: center;
  justify-self: center;
}
</style>
