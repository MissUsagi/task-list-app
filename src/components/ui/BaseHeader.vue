<template>
  <div>
    <h1>Dzisiaj jest {{ getDate() }}</h1>
    <base-button
      description="dodaj"
      type="button"
      @click="toggleAddTask"
    ></base-button>
    <!-- type korzysta z prop falltrough, nie musi być dodanu jako prop w child -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      todayIs: "",
      toggle: false,
    };
  },
  methods: {
    getDate() {
      const dateString = new Date();
      const todayIs = dateString.getDate() + "/" + (dateString.getMonth() + 1);
      return (this.todayIs = todayIs);
    },
    toggleAddTask() {
      this.$emit("toggle-form");
    },
  },
};
</script>

<style scoped>
div {
  padding: 2rem;
  height: 25%;
  border-bottom: 3px solid #421367;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
h1 {
  font-family: "Catamaran", sans-serif;
  font-size: 3rem;
  color: var(--secondary-color);
  text-align: left;
}

button {
  height: 50px;
}
</style>