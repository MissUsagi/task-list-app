<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <!-- do poprawienia -->
      <select v-model="myTask.category" name="kategoria">
        <option value="praca">Praca</option>
        <option value="zdrowie">Zdrowie</option>
        <option value="edukacja" selected>Edukacja</option>
        <option value="rozrywka">Rozrywka</option>
      </select>
    </div>
    <div class="form-group">
      <label for="title">Tytuł</label>
      <input
        v-model="myTask.title"
        type="text"
        id="title"
        placeholder="Wpisz tytuł"
      />
    </div>
    <div class="form-group">
      <label for="description">Opis</label>
      <textarea
        v-model="myTask.description"
        id="description"
        rows="5"
        placeholder="Więcej informacji"
      />
    </div>
    <div class="form-group">
      <label for="localization">Lokalizacja</label>
      <input
        v-model="myTask.localization"
        type="text"
        id="localization"
        placeholder="Lokalizacja"
      />
    </div>
    <div class="form-group">
      <label for="time-start">Czas</label>
      <input v-model="myTask.time" type="time" id="time-start" />
    </div>
    <button type="submit">Dodaj Wydarzenie</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      myTask: {
        category: "Rozrywka",
        title: "",
        description: "",
        localization: "",
        time: "",
      },
    };
  },

  methods: {
    submitForm() {
      // walidacja i clear form
      const newTask = {
        id: Math.floor(Math.random() * 100000),
        category: this.myTask.category,
        title: this.myTask.title,
        description: this.myTask.description,
        localization: this.myTask.localization,
        time: this.myTask.time,
      };
      console.log(newTask);

      this.$emit("add-task", newTask);

      this.category = "";
      this.title = "";
      this.description = "";
      this.localization = "";
      this.time = "";
    },
  },
};
</script>

<style scoped>
form {
  padding: 20px 10px;
  color: whitesmoke;
  text-align: left;
}
input,
textarea,
select {
  padding: 5px 10px;
  margin-top: 5px;
}
textarea {
  resize: vertical;
}

button {
  padding: 15px 20px;
  width: 100%;
  color: white;
  font-family: "Catamaran", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5px;
  background-color: rgb(3, 235, 165);
  box-shadow: -5px 5px 8px #160723, 5px -5px 8px #421367;
  text-transform: uppercase;
}

button:hover {
  background-color: var(--active-color);
}

.form-group {
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
}
</style>