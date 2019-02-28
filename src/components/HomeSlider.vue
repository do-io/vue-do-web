<template>
  <main class="hero">
    <article id="code" class="slide">
      <h2>CODE</h2>
      <div class="rolling">
        <h3>Developer Advocate; Code Agnostic!</h3>
        <p>Many get that one tool and want to build everything with it.</p>
        <p>The same as a craftsman has specialized tools for each job they perform, I have learned different languages specialized for their specific job.</p>
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
      <CodeSvg/>
    </article>
    <article id="design" class="slide">
      <h2>DESIGN</h2>
      <div class="rolling">
        <h3>People are the designation!</h3>
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
      <DesignSvg/>
    </article>

    <div class="bullets">
      <button @click="slideChange('code')" data-click="code">code</button>
      <button @click="slideChange('design')" data-click="design">design</button>
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
    // document.querySelectorAll("a[href='#code']")[0].click();
    this.slideChange("code");
  }

  public slideChange(slideSelection: string) {
    const codeVisable = document.getElementById("code");
    const designVisable = document.getElementById("design");
    if (codeVisable && designVisable) {
      if (slideSelection === "code") {
        codeVisable.style.setProperty("opacity", "1");
        designVisable.style.setProperty("opacity", "0");
      }
      if (slideSelection === "design") {
        codeVisable.style.setProperty("opacity", "0");
        designVisable.style.setProperty("opacity", "1");
      }
    }
  }
}
</script>

<style scoped lang="scss">
main {
  height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.bullets {
  grid-row: 1;
  margin: 1rem 2.19rem;
  button {
    background-color: var(--dark-bg-color);
    border-bottom: 2px solid;
    font-size: 1rem;
    opacity: 0;
    cursor: pointer;
    animation: fadeIn ease-in-out 1;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    &[data-click="code"] {
      color: var(--green);
      animation-delay: 0.5s;
    }
    &[data-click="design"] {
      color: var(--yellow);
      animation-delay: 1s;
    }
  }
}
#code {
  opacity: 0;
}
#design {
  opacity: 0;
}
.slide {
  transition: opacity 1.5s ease-in-out 0.25s;
  display: grid;
  position: absolute;
  opacity: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  grid-template-columns: 500px 2fr;
  grid-template-rows: calc(66vh - 100px) auto;
  grid-row: 2;
  svg {
    position: absolute;
    bottom: 0;
    max-width: 100%;
    max-height: calc(100vh - 80px);
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
    overflow-y: scroll;
    scroll-behavior: smooth;
    background-color: rgba(0, 0, 0, 0.35);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
    border-left: 1px solid;
    z-index: 1;
    p {
      padding-right: 1rem;
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
      margin: 0.5rem 0;
    }
  }
  &#code {
    color: var(--green);
    h2 {
      color: var(--green);
    }
    .rolling {
      border-color: var(--green);
    }
  }
  &#design {
    color: var(--yellow);
    h2 {
      color: var(--yellow);
    }
    .rolling {
      border-color: var(--yellow);
    }
  }
}
// @media screen and (max-width: 1000px) {
//   svg {
//     z-index: -1;
//   }
// }
@media screen and (max-width: 700px) {
  .slide {
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    margin: 1.5rem 0 0;
    padding: 0 0 1rem;
    overflow-y: scroll;
    scroll-behavior: smooth;
    h2 {
      grid-row: 1;
    }
    .rolling {
      height: calc(100% - 60px);
      margin: 1.5rem 0.39rem;
      overflow: auto;
    }
    svg {
      right: 1rem;
      opacity: 0.4;
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

