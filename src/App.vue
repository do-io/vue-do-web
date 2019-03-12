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
        <v-btn icon>
          <font-awesome-icon :icon="['fal', 'search']" id="search"/>
        </v-btn>
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
a {
  text-decoration: none;
}
nav .logo {
  font-size: 2rem;
}
.thick {
  font-family: "blenny", sans-serif;
}
.theme--light.application,
.theme--light.v-sheet,
.theme--light.v-btn {
  color: var(--light-color);
}
.container {
  height: 100%;
}
</style>
