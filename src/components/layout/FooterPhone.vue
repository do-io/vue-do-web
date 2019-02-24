<template>
  <footer class="center">
    <a href>
      <font-awesome-icon :icon="['fal', 'bars']"/>
      <br>Menu
    </a>
    <a href>
      <font-awesome-icon :icon="['fal', 'home']"/>
      <br>Home
    </a>
    <a href>
      <font-awesome-icon :icon="['fal', 'info-circle']"/>
      <br>Info
    </a>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: fixed;
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-content: center;
  a {
    color: var(--blue);
  }
}
</style>
