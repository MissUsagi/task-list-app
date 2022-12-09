<template>
  <base-container>
    <base-header></base-header>
    <add-task @add-task="addTask"></add-task>
    <ul>
      <list-item
        v-for="task in myTasks"
        :key="task.id"
        :index="task.id"
        :category="task.category"
        :title="task.title"
        :description="task.description"
        :location="task.location"
        :time="task.time"
      ></list-item>
    </ul>
  </base-container>
</template>

<script>
import ListItem from "../tasklist/ListItem.vue";
import AddTask from "../tasklist/AddTask.vue";
export default {
  components: { ListItem, AddTask },
  props: ["index", "category"],

  data() {
    return {
      myTasks: [
        {
          id: 1,
          category: "praca",
          title: "Spotkanie dot. spadku sprzedaży",
          location: "Sala konferencyjna nr2",
          time: "12:30-14:40",
        },
        {
          id: 2,
          category: "edukacja",
          title: "Lekcja języka angielskiego",
          description: "Powtórka z gramatyki",
          location: "Online",
          time: "17:00-18:30",
        },
        {
          id: 3,
          category: "rozrywka",
          title: "Turniej gier planszowych",
          description: "Zabrać dowód osobisty i karty MTG",
          location: "OSiR ul. Łąkowa 3",
          time: "17:00-22:00",
        },
        {
          id: 4,
          category: "zdrowie",
          title: "Wizyta u dentysty",
          location: "Dent-med ul. Ulicowa 67",
          time: "16:20-16:50",
        },
      ],
    };
  },
  methods: {
    addTask(task) {
      this.myTasks = [...this.myTasks, task];
      console.log(this.myTasks);
    },
  },
};
</script>
