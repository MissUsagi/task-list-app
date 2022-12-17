<template>
  <li>
    <base-card :color="category">
    <div class="task">
      <span>{{ category }}</span>
      <h3>{{ title }}</h3>
      <p v-if="description" class="info">{{ description }}</p>
      <p>{{ location }}</p>
      <p class="time">{{ time }}</p>
    </div>
     <div class="buttons">
      <button @click="editTask" class="btn"><img src="@/assets/edit-text.png" alt="Edit"></button>
      <button @click="deleteTask" class="btn"><img src="@/assets/x.png" alt="Delete"></button>
     </div>
    </base-card>
  </li>
</template>

<script>
import BaseCard from "../ui/BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["category", "title", "description", "location", "time", "id"],
  emits: ["delete-task"],
  data() {
    return {
      color: this.category,
      taskId: this.id,
    };
  },
  methods: {
    deleteTask()
    {
      this.$emit('delete-task', this.taskId);
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 2.2;
}

li {
  list-style: none;
  color: #333;
  padding: 10px;
}

span {
  background: white;
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
}

.task {
  display: flex;
  flex-direction: column;
}

.time {
  font-weight: bold;
}

.info {
  font-family: "Caveat", cursive;
  font-size: 1.5rem;
}

.btn{
  border: 1px solid #333;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0);
  padding: 5px;
  margin: 0 2px;
  color:white;
}

.buttons {
  display: flex;
  flex-direction: row;
}

.btn img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

.btn:hover{
background-color: rgba(255, 255, 255, 0.5);
} 
</style>