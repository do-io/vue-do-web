<template>
    <section class="hero">
        <!-- <div id="code" class="slide">
            <h2>CODE</h2>
            <CodeSvg />
        </div> -->
        <div id="design" class="slide">
            <h2>DESIGN</h2>
            <DesignSvg />
        </div>
        

    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CodeSvg from '../../public/img/developer_coding_6mjf.svg'
import DesignSvg from '../../public/img/interaction_design_odgc.svg'

@Component({
  components: {
    CodeSvg,
    DesignSvg
  },
})
export default class HomeSlider extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.slide {
    display: grid;
    height: calc(85vh - 100px); // 1000 91px
    grid-template-columns: 1fr 2fr;
    svg {
        position: fixed;
        // left: 35vw;
        bottom: 0;
        max-width: 100%;
        max-height: calc(100% - 80px);
        width: calc(95vw - 32vw);
        height: auto;
        display: block;
        right: 8vw;
    } // 1165 733
    @media screen and (min-width: 1160px) {
        svg {
            width: 733px;
        }
    }
    @media screen and (max-width: 970px) {
        svg {
            right: 77px;
        }
    }
    @media screen and (max-width: 653px) {
        svg {
            width: 408px;
        }
    }
    h2 {
        align-self: start;
        font-family: blenny;
        font-size: 13vw;
        padding-left: 2.19rem;
        line-height: .7;
        margin: 0;
        // transition: opacity 2s;
    }
    @media screen and (min-width: 1110px) {
        h2 {
            align-self: end;
        }
    }
    @media screen and (min-width: 1000px) {
        h2 {
            font-size: 130px;
        }
    }
}
</style>

