<template>
  <div>
    <h1>Dzisiaj jest {{ getDate() }}</h1>
    <button>Dodaj</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todayIs: new Date(),
    };
  },
  methods: {
    getDate() {
      const dateString =
        this.todayIs.getDate() + "/" + (this.todayIs.getMonth() + 1);
      return (this.todayIs = dateString);
    },
  },
};
</script>

<style scoped>
div {
  height: 25%;
  border-bottom: 3px solid #421367;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
h1 {
  padding: 2rem;
  font-family: "Catamaran", sans-serif;
  font-size: 3rem;
  color: var(--secondary-color);
  text-align: left;
}

button {
  height: 50px;
}
</style>