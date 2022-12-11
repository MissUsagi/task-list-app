<template>
  <button>{{ description }}</button>
</template>

<script>
export default {
  props: ["description"],
};
</script>

<style scoped>
button {
  width: 150px;
  background: var(--active-color);
  box-shadow: -3px 3px 5px #160723, 3px -3px 5px #421367;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
}

button:hover {
  background-color: rgb(3, 235, 165);
}
</style>