<template>
    <section class="hero">
        <h2>CODE</h2>
            

    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HomeSlider extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.hero {
    display: grid;
    height: calc(95vh - 100px);
}
h2 {
    align-self: end;
    font-family: blenny;
    font-size: 30vh;
    padding-left: 2.19rem;
    line-height: 1.1;
    margin: 0;
}
</style>

