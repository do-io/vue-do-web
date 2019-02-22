<template>
  <div id="app">
    <mq-layout mq="tablet+">
      <headerFull/>
    </mq-layout>
    <mq-layout mq="phone">
      <headerPhone/>
    </mq-layout>
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
::placeholder {
  opacity: 1;
}
input,
button,
select {
  font-family: inherit;
  font-size: 0.9rem;
  border-radius: 0;
  border: none;
}
input,
select {
  padding: 0.5rem 1rem;
  margin: 0.25rem 0.5rem;
}
button {
  padding: 0.25rem 1rem;
  margin: 0.25rem 0.5rem;
}
section {
  margin-left: 2.19rem;
  margin-right: 100px;
}
details {
  cursor: pointer;
  li {
    margin: 0.5rem 0;
  }
}
#app {
  height: 100vh;
  width: 100vw;
  position: relative;
  // > div {
  //   height: calc(100vh - 115px);
  // }
}
.center {
  text-align: center;
}
.definition {
  background-color: var(--yellow);
  color: var(--dark-bg-color);
  padding: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
}
.thick {
  font-family: "Blenny";
}
.card {
  width: 40vw;
  min-width: 300px;
  max-width: 400px;
  padding: 1.5rem 1rem;
  box-shadow: 0 18px 20px 0px rgba(0, 0, 0, 0.2);
  // box-shadow: 0 6px 5px 0px rgba(0, 0, 0, 0.2);
  // transition: all 0.3s ease-in-out;
}
// .card:hover {
//   box-shadow: 0 18px 20px 0px rgba(0, 0, 0, 0.3);
// }
.edit-nav {
  display: flex;
  justify-content: end;
  align-content: end;
}
.new-story {
  background-color: var(--green);
}
.logout {
  max-width: 90px;
  justify-self: end;
  align-self: end;
  background-color: var(--yellow);
  color: var(--dark-bg-color);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
