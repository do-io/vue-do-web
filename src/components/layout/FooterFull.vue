<template>
  <footer id="info">
    <a href="https://linkedin.com/in/darrenodden" target="_blank">
      <font-awesome-icon :icon="['fab', 'linkedin']"/>
    </a>
    <a href="https://twitter.com/darrenodden" target="_blank">
      <font-awesome-icon :icon="['fab', 'twitter']"/>
    </a>
    <a href="https://github.com/do-io" target="_blank">
      <font-awesome-icon :icon="['fab', 'github']"/>
    </a>
    <a href="https://codepen.io/DarrenOdden/" target="_blank">
      <font-awesome-icon :icon="['fab', 'codepen']"/>
    </a>
    <a href="https://dribbble.com/darrenodden" target="_blank">
      <font-awesome-icon :icon="['fab', 'dribbble']"/>
    </a>
    <a href="https://www.behance.net/DarrenOdden" target="_blank">
      <font-awesome-icon :icon="['fab', 'behance']"/>
    </a>

    <font-awesome-icon :icon="['fal', 'info-circle']"/>
  </footer>
</template>

<style lang="scss">
footer {
  bottom: 0;
  position: absolute;
}
#info {
  opacity: 0.8;
  padding-bottom: 20px;
  background: transparent;
  display: grid;
  position: fixed;
  right: 0;
  bottom: 0;
  transition-property: opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  a {
    color: var(--blue);
  }
  svg {
    padding: 0.35rem 2.19rem;
    &.fa-info-circle {
      padding: 1rem 2.19rem 0.35rem;
    }
  }
  &:hover {
    opacity: 1;
  }
}
</style>
