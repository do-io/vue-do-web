<template>
  <div id="app">
    <headerFull/>
    <router-view/>
    <footerFull/>
  </div>
</template>

<style lang="scss">
:root {
  --dark-bg-color: #101656;
  --dark-color: #2cccf3;
  --dark-a-color: #2cccf3;
  --blue: #2cccf3;
  --dk-blue: #0f305c;
  --green: #1de9b6;
  --pink: #f515ca;
  --purple: #6002ee;
  --red: #ff1744;
  --yellow: #ffd24c;
  --orange: #f57c00;
  --white: whitesmoke;
}
html,
body {
  margin: 0;
  padding: 0;
  overflow-y: scroll;
}
body {
  font-family: monarcha, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  color: var(--dark-color);
  background-color: var(--dark-bg-color);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 2.75rem 0 1rem;
  font-weight: normal;
  line-height: 1.15;
}
h1 {
  margin-top: 0;
  font-size: 2.488rem;
}
h2 {
  font-size: 2.074rem;
}
h3 {
  font-size: 1.728rem;
}
h4 {
  font-size: 1.44rem;
}
h5 {
  font-size: 1.2rem;
}
h6 {
  font-size: 1rem;
}
small,
.text_small {
  font-size: 0.833em;
}
a {
  color: var(--yellow);
  opacity: 0.8;
  text-decoration: none;
  transition-property: opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  &:hover {
    opacity: 1;
  }
}
#app {
  height: 100vh;
  width: 100vw;
  position: relative;
  > div {
    height: calc(100vh - 115px);
  }
}
</style>
