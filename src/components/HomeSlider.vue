<template>
    <main class="hero">
        <article id="code" class="slide">
            <div>
                <h2>CODE</h2>
                <div class="rolling">
                    <h3>Developer Advocate; Code Agnostic!</h3>
                    <div>
                        <p>Many get that one tool and want to build everything with it.</p>
                        <p>The same as a mechanic has specialized tools to set the torque on the engine, I have learned different languages specialized for their specific job.</p>
                        <p>Starting from C++ and moving through JavaScript, Perl, Java, C#, and PHP, each language has its own nuances that make them special for what they do.</p>
                        <p>After all - you can hammer a nail with a skill saw, but it doesn't mean you should</p>
                        <details>
                            <summary>Development Specialties</summary>
                            <ul>
                                <li>JavaScript, ReactJS, VueJS, ES6, D3.js</li>
                                <li>SASS, Foundation, Gulp, TravisCI</li>
                                <li>PHP, Drupal, WordPress, NodeJS, C++, C#</li>
                            </ul>
                        </details>
                    </div>
                </div>
            </div>
            <CodeSvg />
        </article>
        <article id="design" class="slide">
            <div>
                <h2>DESIGN</h2>
                <DesignSvg />

            </div>
        </article>
        

    </main>
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
    > div {
        margin-left: 2.19rem;
        display: grid;
    }
    svg {
        position: fixed;
        bottom: 0;
        max-width: 100%;
        max-height: calc(100% - 80px);
        width: calc(95vw - 32vw);
        height: auto;
        display: block;
        right: 8vw;
    }
    h2 {
        align-self: start;
        font-family: blenny;
        font-size: 13vw;
        line-height: .7;
        margin: 0;
        order: 1;
    }
    .rolling {
        padding: 1rem 1.5rem;
        margin: 2.19rem 0;
        max-width: 410px;
        max-height: 310px;
        background-color: rgba(0,0,0,.15);
        box-shadow: 0 6px 18px rgba(0,0,0,.4);
        border-left: 1px solid;
        order: 2;
        >div {
            height: calc(100% - 50px - 3rem);
            overflow-x: scroll;
        }
        details {
            margin: 1rem 0;
        }
        ul {
            list-style-type: none;
            margin: 0 1rem;
            padding: 0;
        }
        li {
            margin: .2rem 0;
        }
    }
    &#code {
        h2 {
            color: var(--green);
        }
        .rolling {
            border-color: var(--green)
        }
    }
    &#design {
        display: none;
        h2 {
            color: var(--yellow);
        }
        .rolling {
            border-color: var(--yellow)
        }
    }
}

@media screen and (min-width: 1160px) {
    .slide {
        svg {
            width: 733px;
        }
    }
}
@media screen and (max-width: 970px) {
    .slide {
        svg {
            right: 77px;
        }
    }
}
@media screen and (max-width: 653px) {
    .slide {
        svg {
            width: 408px;
        }
    }
}
@media screen and (min-width: 1180px) {
    #code {
        h2 {
            order: 2;
        }
        .rolling {
            order: 1;
        }
    }
}
@media screen and (min-width: 1000px) {
    .slide {
        h2 {
            font-size: 130px;
        }
    }
}

</style>

