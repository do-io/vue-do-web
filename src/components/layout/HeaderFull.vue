<template>
  <header>
    <div id="logo">
      <router-link to="/">
        <bydesign-logo alt="Darren by Design"/>
      </router-link>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <!-- <router-link to="/stories">Stories</router-link> -->
      <router-link to="/about">About</router-link>
      <!-- <font-awesome-icon :icon="['fal', 'search']" id="search"/> -->
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: grid;
  grid-row: 1;
  grid-template-columns: 1fr 2fr;
  margin: 0 2.19rem;
}
#logo {
  text-align: left;
  width: 50px;
  height: 50px;
  align-self: center;
  a {
    opacity: 1;
  }
  svg {
    height: 100%;
  }
}
#nav {
  padding: 2.19rem 0;
  color: var(--dark-color);
  text-align: right;
  a {
    color: var(--dark-color);
    margin-left: 1rem;
    &.router-link-exact-active {
      opacity: 0.5;
    }
  }
  #search {
    margin-left: 30px;
  }
}
</style>
