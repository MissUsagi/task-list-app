<template>
  <div>
    <h1> {{ getDate() }}</h1>
    <base-button
     :description=buttonText
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
      dniTygodnia: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
      buttonText: "Dodaj"
    };
  },
  methods: {
    getDate() {
      const dateString = new Date();
      const dzienTygodnia = this.dniTygodnia[dateString.getDay()];
      const todayIs = dzienTygodnia + " " +dateString.getDate() + "/" + (dateString.getMonth() + 1) + "/" + dateString.getFullYear();
     return this.todayIs = todayIs;
    },
    toggleAddTask() {
      this.$emit("toggle-form");
      (this.buttonText === "Dodaj") ? this.buttonText = "Zwiń" : this.buttonText = "Dodaj";
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