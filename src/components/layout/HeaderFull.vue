<template>
  <header>
    <div id="logo">
      <bydesign-logo/>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/stories">Stories</router-link>
      <router-link to="/about">About</router-link>
      <font-awesome-icon :icon="['fal', 'search']" id="search"/>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: grid;
  grid-row: 1;
  grid-template-columns: 1fr 2fr;
}
#logo {
  text-align: left;
  padding: 14px;
  > svg {
    max-height: 80px;
    min-width: 256px;
  }
}
#nav {
  padding: 2.19rem;
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
