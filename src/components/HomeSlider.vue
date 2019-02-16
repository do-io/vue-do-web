<template>
  <main class="hero">
    <article id="code" class="slide">
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
      <CodeSvg/>
    </article>
    <article id="design" class="slide">
      <h2>DESIGN</h2>
      <div class="rolling">
        <h3>People are the designation!</h3>
        <div>
          <p>Brandmarks, mobile applications and magazines all have commonalities – people use them</p>
          <p>The brandmarks help peole know who has made or is selling a product or service.</p>
          <p>Applications need to be easy to use and consider how people will use the application or it isn't helpful.</p>
          <p>Magazines, newspapers, and powerpoint presentations need to convey information aeasily without wearing down the reader.</p>
          <p>Think of entering a dark room new to you. Do you turn on the lights without much of a thought?</p>
          <details>
            <summary>Design Specialties</summary>
            <ul>
              <li>Web Design, Interaction Design (IxD/UX), Brand Development</li>
              <li>Illustrator, XD, Photoshop, Invision</li>
            </ul>
          </details>
        </div>
      </div>
      <DesignSvg/>
    </article>

    <div class="bullets">
      <a href="#code">code</a>
      <a href="#design">design</a>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CodeSvg from "@/assets/images/developer_coding_6mjf.svg";
import DesignSvg from "@/assets/images/interaction_design_odgc.svg";

@Component({
  components: {
    CodeSvg,
    DesignSvg
  }
})
export default class HomeSlider extends Vue {
  @Prop() private msg!: string;

  public mounted() {
    // @ts-ignore
    document.querySelectorAll("a[href='#code']")[0].click();
  }
}
</script>

<style scoped lang="scss">
main {
  height: 100%;
  position: relative;
}
.bullets {
  position: fixed;
  bottom: 8vh;
  left: 2.19rem;
  a {
    margin-right: 1.5rem;
    line-height: 1.8;
    width: 5rem;
    overflow: hidden;
    background-color: transparent;
    color: transparent;
    border-bottom: 2px solid var(--blue);
    display: inline-block;
    &[href="#code"] {
      color: var(--green);
      border-bottom-color: var(--green);
      opacity: 0;
      animation: fadeIn ease-in-out 1;
      animation-fill-mode: forwards;
      animation-duration: 1s;
      animation-delay: 1s;
    }
    &[href="#design"] {
      color: var(--yellow);
      border-bottom-color: var(--yellow);
      opacity: 0;
      animation: fadeIn ease-in-out 1;
      animation-fill-mode: forwards;
      animation-duration: 1s;
      animation-delay: 1.5s;
    }
  }
}
.router-link-active ~ #code {
  opacity: 1;
}
#code {
  // opacity: 1;
  &:target {
    opacity: 1;
  }
  // &:target ~ .slide#design {
  //     opacity: 0;
  // }
}
#design {
  opacity: 0;
  &:target {
    opacity: 1;
  }
  // &:target ~ #code {
  //     display: none;
  // }
}
.slide {
  transition: opacity 1.5s ease-in-out 0.25s;
  display: grid;
  position: absolute;
  opacity: 0;
  // height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  grid-template-columns: 500px 2fr;
  grid-template-rows: calc(66vh - 100px) auto;
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
    font-family: blenny;
    font-size: 13vw;
    line-height: 0.7;
    margin: 0 0 0 2.19rem;
    grid-column: 1;
    grid-row: 2;
  }
  h3 {
    margin: 1rem 0;
  }
  .rolling {
    position: relative;
    display: block;
    padding: 1rem 1.5rem;
    margin: 0 0 2.19rem 2.19rem;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.35);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
    border-left: 1px solid;
    z-index: 1;
    > div {
      height: calc(100% - 5rem);
      overflow-y: scroll;
      scroll-behavior: smooth;
      > p {
        padding-right: 1rem;
      }
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
      margin: 0.2rem 0;
    }
  }
  &#code {
    // display: none;
    color: var(--green);
    h2 {
      color: var(--green);
    }
    .rolling {
      border-color: var(--green);
      > div {
        height: calc(100% - 7rem);
      }
    }
  }
  &#design {
    // display: none;
    color: var(--yellow);
    h2 {
      color: var(--yellow);
    }
    .rolling {
      border-color: var(--blue);
    }
  }
}
@media screen and (max-width: 1000px) {
  svg {
    z-index: -1;
  }
}
@media screen and (max-width: 800px) {
  .slide {
    grid-template-rows: auto 1fr 1fr;
    grid-template-columns: 1fr;
    h2 {
      grid-row: 1;
    }
    .rolling {
      margin: 2.19rem 100px 0 2.19rem;
      > div {
        height: calc(100% - 6.5rem);
      }
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
@media screen and (min-width: 1000px) {
  .slide {
    h2 {
      font-size: 130px;
    }
  }
}
</style>

