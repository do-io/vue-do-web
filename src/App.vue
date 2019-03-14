<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title href="/">
        <router-link to="/">
          <span class="thick logo">DARREN</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat href="/">Home</v-btn>
        <v-btn flat href="/about">About</v-btn>
        <!-- <v-btn icon>
          <font-awesome-icon :icon="['far', 'search']" id="search"/>
        </v-btn>-->
        <!-- <router-link to="/stories">Stories</router-link> -->
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view/>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss">
:root {
  --light-color: #101656;
  --dark-bg-color: #101656;
  --dark-color: #2cccf3;
  --blue: #2cccf3;
  --dk-blue: #0f305c;
  --green: #1de9b6;
  --pink: #f515ca;
  --purple: #6002ee;
  --red: #ff1744;
  --yellow: #ffd24c;
  --orange: #f57c00;
  --white: whitesmoke;

  --code: #1de9b6;
  --designer: #ffd24c;
}
html {
  font-size: 18px;
  line-height: 1.6;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
h1 {
  margin-top: 0;
  font-size: 3.4rem;
  font-family: blenny, sans-serif;
  text-transform: uppercase;
  line-height: 1;
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
a {
  text-decoration: none;
}
nav .logo {
  font-size: 2rem;
}
article h1,
article h2 {
  text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14),
    0px 1px 5px rgba(0, 0, 0, 0.12);
}
.thick {
  font-family: "blenny", sans-serif;
}
.definition {
  background-color: var(--yellow);
  padding: 1rem;
}
.theme--light.application,
.theme--light.v-sheet,
.theme--light.v-btn {
  color: var(--light-color);
}
.container {
  height: 100%;
}
.home .v-window__container {
  height: 100%;
}
.home .v-item-group {
  align-self: center;
}
</style>
