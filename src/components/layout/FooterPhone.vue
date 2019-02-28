<template>
  <footer class="center">
    <router-link to="/about">
      <font-awesome-icon :icon="['fal', 'swatchbook']"/>
      <br>About
    </router-link>
    <router-link to="/">
      <font-awesome-icon :icon="['fal', 'home']"/>
      <br>Home
    </router-link>
    <a href>
      <font-awesome-icon :icon="['fal', 'info-circle']"/>
      <br>Info
    </a>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-content: center;
  background-color: var(--dark-bg-color);
  color: var(--dark-color);
  a {
    color: var(--dark-a-color);
  }
}
</style>
