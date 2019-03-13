<template>
  <v-layout align-center>
    <v-item-group v-model="window" mandatory tag="v-flex">
      <v-item v-for="n in front.length" :key="n">
        <div slot-scope="{ active, toggle }">
          <v-btn :input-value="active" icon @click="toggle">
            <font-awesome-icon :icon="['far', 'code']" v-if="n === 1"/>
            <font-awesome-icon :icon="['far', 'swatchbook']" v-else-if="n===2"/>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-flex>
      <v-window v-model="window">
        <v-window-item class="swot" v-for="n in front" :key="n" transition="0">
          <section>
            <h2 class="thick display-4">{{n.swot}}</h2>
            <v-card elevation-4>
              <article :class="((n.swot))">
                <v-card-title>
                  <h3>{{n.headline}}</h3>
                </v-card-title>
                <v-card-text>
                  <div v-html="n.narrative"></div>
                  <details>
                    <summary>{{n.summary.title}}</summary>
                    <ul>
                      <li v-for="skill in n.summary.skills">{{skill}}</li>
                    </ul>
                  </details>
                </v-card-text>
              </article>
            </v-card>
          </section>
          <span v-show="n.swot == 'CODE'">
            <background1 class="backgroundSvg"/>
            <coderSvg class="coding"/>
          </span>
          <span v-show="n.swot == 'DESIGN'">
            <background2 class="backgroundSvg"/>
            <designerSvg class="designing"/>
          </span>
        </v-window-item>
      </v-window>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";

// code
Vue.component("background1", () => import("@/assets/images/bricks.svg"));
Vue.component("coderSvg", () => import("@/assets/images/coding.svg"));
// design
Vue.component("background2", () => import("@/assets/images/background1.svg"));
Vue.component("designerSvg", () =>
  import("@/assets/images/interactive-designer.svg")
);

export default // Coder: () => import("@/components/Coder.vue"),
Vue.extend({
  data() {
    return {
      length: 2,
      window: 0,
      front: [
        {
          swot: "CODE",
          headline: "Developer Advocate; Code Agnostic!",
          narrative: `<p>Many get that one tool and want to build everything with it.

            <p>The same as a craftsman has specialized tools for each job they perform, I have learned different languages specialized for their specific situation.</p>

            <p>Starting from C++ and moving through JavaScript, Perl, Java, C#, and PHP, each language has its own nuances that make them unique for what they do.</p>

            <p>After all - you can hammer a nail with a skill saw, but it doesn't mean you should</p>`,
          summary: {
            title: "Development Specialties",
            skills: [
              "JavaScript, VueJS, Angular, ReactJS, ES6, D3.js",
              "SASS, Bootstrap, Foundation",
              "PHP, NodeJS, C++, C#, Python",
              "Drupal, WordPress, Magento, Shopify",
              "Gulp, TravisCI, Webpack, Google Cloud Builder",
              "GCP, Firebase, AWS, Lamda"
            ]
          }
        },
        {
          swot: "DESIGN",
          headline: "People are the designation!",
          narrative: `<p>Brandmarks, mobile applications, and magazines all have commonalities – people use them</p>

            <p>The brand marks help people know who has made or is selling a product or service.</p>

            <p>Applications need to be easy to use and consider how people will use them, or it isn't helpful.</p>

            <p>Magazines, newspapers, and powerpoint presentations need to convey information easily without wearing down the reader.</p>

            <p>Think of entering a dark room new to you. Do you turn on the lights without much of a thought?</p>`,
          summary: {
            title: "Design Specialties",
            skills: [
              "Web Design, Interaction Design (IxD/UX)",
              "Graphic Design, Brand Development",
              "Illustrator, XD, Photoshop, Invision"
            ]
          }
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-rows: auto auto;
  z-index: 1;
  h2 {
    grid-row: 2;
    text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14),
      0px 1px 5px rgba(0, 0, 0, 0.12);
  }
  .v-card {
    height: 54vh;
    article {
      height: 100%;
      .v-card__text {
        // height: calc(100% - 148px);
        overflow-y: scroll;
        position: relative;
      }
    }
  }
}
.CODE {
  .v-card__text {
    height: calc(100% - 148px);
  }
}
.DESIGN {
  .v-card__text {
    height: calc(100% - 94px);
  }
}
.display-4 {
  font-family: "blenny", sans-serif !important;
}
.layout {
  height: 100%;
  .v-btn {
    font-size: 18px;
  }
}
.v-window {
  height: 100%;
  > div {
    height: 100%;
  }
}
.swot {
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100%;
}
.backgroundSvg {
  position: fixed;
  bottom: 0;
  left: 19vw;
  height: 80vh;
}
.coding {
  position: fixed;
  bottom: -10vh;
  left: 33vw;
  right: 3vw;
  max-height: 650px;
  // height: 80vh;
  width: 70vw;
}
.designing {
  position: fixed;
  bottom: 0;
  left: 33vw;
  right: 3vw;
  max-height: 650px;
  // height: 80vh;
  width: 70vw;
}
</style>
