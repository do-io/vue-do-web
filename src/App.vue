<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
:root {
  --dark-bg-color: #101656;
  --dark-color: #FFD24C;
  --dark-a-color: #2CCCF3;
  --blue: #2CCCF3;
  --dk-blue: #0F305C;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--dark-color);
  background-color: var(--dark-bg-color);
}
a {
  color: var(--dark-a-color);
  &:hover {
    color: lighten(#2CCCF3,20%);
  }
}
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  // color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    margin-left: 1rem;
    &.router-link-exact-active {
      color: darken(#2CCCF3, 20%);
    }
  }
}
</style>
