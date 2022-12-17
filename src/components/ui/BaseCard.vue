<template>
  <div class="card" :class="color"><slot></slot></div>
</template>

<script>
export default {
  props: ["color"],
};
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 15px 5px 0 5px;
  box-shadow: -5px 5px 8px #160723, 5px -5px 8px #421367;
}

.praca {
  background-color: var(--l-orange);
}

.rozrywka {
  background-color: var(--l-green);
}

.edukacja {
  background-color: var(--l-blue);
}

.inne {
  background-color: var(--l-red);
}

.zdrowie {
  background-color: var(--l-purple);
}
</style>