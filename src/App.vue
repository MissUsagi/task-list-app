<template>
  <task-list></task-list>
</template>

<script>
import TaskList from "./components/pages/TaskList.vue";
export default {
  components: { TaskList },
  name: "App",
};
</script>

<style>
:root {
  --primary-color: #2c0d45;
  --secondary-color: #dab0f5;
  --active-color: #00c9b1;
  --l-orange: #ffe7c4;
  --l-green: #cfffc4;
  --l-purple: #efdfff;
  --l-red: #ffc4ca;
  --l-blue: #b4efff;
  --inactive-color: #dedee7;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--primary-color);
  font-family: "Madurai", sans-serif;
  width: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
