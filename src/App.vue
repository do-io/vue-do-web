<template>
  <div id="app">
    <header>
      <div id="logo">{{ title="Darren" }}</div>
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

}
html, body {
  margin: 0;
  padding: 0;

}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--dark-color);
  background-color: var(--dark-bg-color);
}
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
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  // color: #2c3e50;
}
header {
  padding: 30px;
  display: grid;
  grid-row: 1;
  grid-template-columns: 1fr 2fr;

}
#logo {
  text-align: left;
}
#nav {
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
  #info {
    opacity: .5;
    padding-bottom: 20px;
    background: transparent;
    display: grid;
    position:fixed;
    right: 0;
    bottom: 0;
    transition-property: opacity;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
    a {
      color: var(--blue);
    }
    svg {
      padding: 10px 30px;
    }
    &:hover {
      opacity: 1;
    }
  }

}
</style>
