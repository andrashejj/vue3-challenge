<template>
  <div class="q-pa-md">
    <h1>Challenge 1</h1>
    <p>
      Welcome to Challenge 1. Your task is to improve the navigation and
      routing. Here are the requirements:
    </p>
    <ul class="no-bullets">
      <li v-for="(task, index) in tasks" :key="index">
        <q-checkbox v-model="task.done" /> {{ task.description }}
      </li>
    </ul>
    <router-link to="/" class="q-btn q-mt-md">Return to Home</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ChallengeOne',
  setup() {
    const tasks = ref([
      { done: false, description: 'Make sure this page is properly routed.' },
      { done: false, description: "Make sure the navigation doesn't flash." },
      {
        done: false,
        description: 'Make sure the navigation is styled nicely.',
      },
    ]);

    return { tasks };
  },
};
</script>

<style scoped>
.no-bullets {
  list-style-type: none;
}
</style>
