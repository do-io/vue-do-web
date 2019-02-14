<template>
  <main>
    <article id="about">
      <h1>About a Charismatic Codefauna!</h1>
      <div>
        <div class="definition">Charismatic Codefauna
          <br>/kerəzˈmadik kōdˈfônə / noun
          <ol>
            <li>a large animal species with symbolic value intrinsic to detailing code architectures</li>
            <!-- <li>Darren</li> -->
          </ol>
        </div>
        <p>Since I was a kid, I had two interests, figuring out how to make things work, and drawing.</p>
        <p>Introduced to caligraphy and lettering books, I loved letterforms. I was given a calligraphy set, but I learned I prefered letter formss more than the art of calligraphy.</p>
        <p>I also had a growing stack of hot rod magazines. I would read and study the builds, looking at the designs and shapes of the cars and the intrigue of building a blueprinted and balanced engine.</p>
        <p>I would be right there helping my Uncle and Grandpa work on the farm implements. I would go out to the shop and use the manual drill press and play in the hay stacks and parked tractors.</p>
        <p>It was all about seeing how things worked. What would happen if two things came together.</p>
        <p>As I got older, I would study and experiment with new ways to use what was put in front of me. Broken radios and tape decks became fodder for new ideas. The smell of ozone became normal.</p>
        <p>When I gained access to computers, what I tinkered on changed.</p>
        <p>I learned C++ and Assembly because I wanted to write a computer game. I learned enough that I was able to get employed by Borland International, a programming tools company.</p>
        <p>At Borland, I was introduced to relational databases and additional languages.</p>
        <p>When I first started at my first code job, we were encouraged to teach code classes to others in the business. It made sure we shared our knowledge, and it helped cement what we knew. At least, what we thought we knew. We also learned new things from each other.</p>
        <p>I spent time working with and reading many people's code and quickly realized coding standards were a great thing – both for support and sharing with others.</p>
        <p>I moved on in my career, I interacted more with support teams and marketing. This gave me a greater appreciation for client needs.</p>
        <p>My first job after Borland was for a hardware manufacturer that released the first USB line of computers known as the multimedia enthusiast.</p>
        <p>This line of computers were designed to be very energy efficient. This was a big thing in the mid to late 90's.</p>
        <p>In particular, these computers had an onboard sound solution that was making waves for sound quality. One problem is that the chipset had a feature embedded that powered on when sound arrived and then would power off after.</p>
        <p>You might think this was great, but it was to efficient.</p>
        <p>Since this was in the hardware, and all the computer owners had a computer that would hum when you moved your mouse or pop when a sound played. The solution we needed had to be done in software drivers.</p>
        <p>My solution was to feed a string of NULLs to the beginning and end of the sound stream through the driver – just enough to allow the card to power on and power off gracefully.</p>
        <p>This was a great lesson for me to look at the people's needs while putting together products.</p>
        <p>Over the years, I have worked on many design and development projects. With each, I try to embody the project in a more holistic way as to make a person's life better, and not just to build a function.</p>
        <p>In more recent years I have now gotten passionate about CSS, JavaScript, and it's court of frameworks. This now leads me to look for a way to design a faster load experience.</p>
        <p>Combined with a design background, I'm architecting applications that are usable for people first.</p>
        <p>Years later, I am still active in my local developer and design groups, sharing and learning.</p>
      </div>
    </article>
    <CreativeSvg/>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CreativeSvg from "@/assets/images/creative_thinking_b3bcv2.svg";

@Component({
  components: {
    CreativeSvg,
  },
})
export default class HomeSlider extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
main {
  height: 100%;
  position: relative;
  svg {
    position: fixed;
    bottom: 0;
    max-width: 100%;
    max-height: calc(100% - 80px);
    width: calc(95vw - 32vw);
    height: auto;
    display: block;
    left: 2.19rem;
    z-index: -1;
  }
}
article {
  position: relative;
  grid-column: 2;
  margin-right: 100px;
  margin-left: 2.19rem;
  height: calc(100% - 8rem);
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr;
  h1 {
    grid-column: 2;
    grid-row: 1;
    margin-left: 2.19rem;
  }
  > div {
    height: auto;
    padding-bottom: 1.5rem;
    padding-right: 1.5rem;
    grid-column: 2;
    grid-row: 2;
    margin-left: 2.19rem;
    overflow-x: scroll;
    p:first-child {
      margin-top: 0;
    }
  }
}
@media screen and (max-width: 900px) {
  article {
    h1 {
      grid-column: 1 / span 2;
      margin-left: 0;
    }
    > div {
      // grid-column: 1;
      max-height: 19rem;
    }
  }
}
@media screen and (max-width: 530px) {
  article {
    height: auto;
    grid-template-rows: 1fr;
    > div {
      margin-left: 0;
      grid-column: 1 / span 2;
      max-height: initial;
    }
  }
  main {
    svg {
      opacity: 0;
    }
  }
}
</style>

