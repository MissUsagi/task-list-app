<template>
  <base-container>
    <base-header @toggle-form="toggleAddTask"></base-header>
    <add-task @add-task="addTask" v-show="showAddTask"></add-task>
    <ul>
      <list-item
        v-for="task in myTasks"
        :key="task.id"
        :id="task.id"
        :category="task.category"
        :title="task.title"
        :description="task.description"
        :location="task.location"
        :time="task.time"
        @delete-task="deleteTask"
      ></list-item>
    </ul>
  </base-container>
</template>

<script>
import ListItem from "../tasklist/ListItem.vue";
import AddTask from "../tasklist/AddTask.vue";
export default {
  components: { ListItem, AddTask },
  data() {
    return {
      showAddTask: false,
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
      this.myTasks = [task, ...this.myTasks];
      console.log(this.myTasks);
    },
    toggleAddTask() {
      console.log(this.showAddTask);
      this.showAddTask = !this.showAddTask;
    },
    deleteTask(id){
      if(confirm("Czy chcesz usunąć wydarzenie?")){
        this.myTasks = this.myTasks.filter((task)=>{
        return task.id !== id;
      })
      }
    }
  },
};
</script>
