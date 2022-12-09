<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
div {
  position: relative;
  margin: auto;
  width: 1000px;
  height: 80vh;
  padding: 10px 10px;
  border-radius: 10px;
  background: var(--primary-color);
  box-shadow: -5px 5px 8px #160723, 5px -5px 8px #421367;
  overflow-x: hidden;
  overflow-y: scroll;
}

@media only screen and (max-width: 600px) {
  div {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
}
</style>