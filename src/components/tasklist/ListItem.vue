<template>
  <li>
    <base-card :color="category">
      <span>{{ category }}</span>
      <h3>{{ title }}</h3>
      <p v-if="description" class="info">{{ description }}</p>
      <p>{{ location }}</p>
      <p class="time">{{ time }}</p>
    </base-card>
  </li>
</template>

<script>
import BaseCard from "../ui/BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["category", "title", "description", "location", "time"],
  data() {
    return {
      color: this.category,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
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

.time {
  font-weight: bold;
}

.info {
  font-family: "Caveat", cursive;
  font-size: 1.5rem;
}
</style>