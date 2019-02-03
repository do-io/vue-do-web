<template>
  <div id="app">
    <header>
      <div id="logo"><bydesign-logo /></div>
      <div id="nav">
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link>
        <font-awesome-icon :icon="['fal', 'search']" id="search" />
      </div>
    </header>
    <router-view/>
    <footer>
      <div id="info">
        <a href="https://linkedin.com/in/darrenodden" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
        <a href="https://twitter.com/darrenodden" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        <a href="https://github.com/do-io" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
        <a href="https://codepen.io/DarrenOdden/" target="_blank"><font-awesome-icon :icon="['fab', 'codepen']" /></a>
        <a href="https://dribbble.com/darrenodden" target="_blank"><font-awesome-icon :icon="['fab', 'dribbble']" /></a>
        <a href="https://www.behance.net/DarrenOdden" target="_blank"><font-awesome-icon :icon="['fab', 'behance']" /></a>

        <font-awesome-icon :icon="['fal', 'info-circle']" />
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
:root {
  --dark-bg-color: #101656;
  --dark-color: #2CCCF3;
  --dark-a-color: #2CCCF3;
  --blue: #2CCCF3;
  --dk-blue: #0F305C;
  --green: #1DE9B6;
  --pink: #F515CA;
  --purple: #6002ee;
  --red: #FF1744;
  --yellow: #FFD24C;
  --orange: #F57C00;
  --white: whitesmoke;
}
html, body {
  margin: 0;
  padding: 0;
  overflow-y: scroll;
}
body {
  font-family: monarcha, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  color: var(--dark-color);
  background-color: var(--dark-bg-color);
}
h1, h2, h3, h4, h5, h6 {
  margin: 2.75rem 0 1rem;
  font-weight: normal;
  line-height: 1.15;
}
h1 {
  margin-top: 0;
  font-size: 2.488rem;
}
h2 {font-size: 2.074rem;}
h3 {font-size: 1.728rem;}
h4 {font-size: 1.44rem;}
h5 {font-size: 1.2rem;}
h6 {font-size: 1rem;}
small, .text_small {font-size: 0.833em;}
a {
  color: var(--yellow);
  opacity: .8;
  text-decoration: none;
  transition-property: opacity;
  transition-duration: .5s;
  transition-timing-function: ease-in-out;
  &:hover {
    opacity: 1;
  }
}
// #app {
//   text-align: center;
// }
header {
  display: grid;
  grid-row: 1;
  grid-template-columns: 1fr 2fr;

}
#app { 
  height: 100vh; 
  width: 100vw; 
  position: relative; 
  >div {
    height: calc(100vh - 115px);
  }
}
#logo {
  text-align: left;
  padding: 14px;
  svg {
    max-height: 80px;
    min-width: 256px
  }
}
#nav {
  padding: 2.19rem;
  color: var(--dark-color);
  text-align: right;
  a {
    color: var(--blue);
    margin-left: 1rem;
    &.router-link-exact-active {
      opacity: .5;
    }
  }
  #search {
    margin-left: 30px;
  }

}
footer {
  footer {
    bottom: 0;
    position: absolute;
  }
  #info {
    opacity: .8;
    padding-bottom: 20px;
    background: transparent;
    display: grid;
    position:fixed;
    right: 0;
    bottom: 0;
    transition-property: opacity;
    transition-duration: .5s;
    transition-timing-function: ease-in-out;
    a {
      color: var(--blue);
    }
    svg {
      padding: .35rem 2.19rem;
      &.fa-info-circle {
       padding: 1rem 2.19rem .35rem;
      }
    }
    &:hover {
      opacity: 1;
    }
  }

}
</style>
