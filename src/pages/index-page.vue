<template>
  <div class="q-pa-md">
    <h1>Challenge 1</h1>
    <p>
      Find Challenge 1 and make sure you can navigate to it using the navbar. To
      all the other tasks on Challenge 1, Move on to Challenge 2 & 3, Commit,
      Push, Open PR that is well structured and explains the PR.
    </p>
    <ul class="no-bullets">
      <li v-for="(task, index) in tasks" :key="index">
        <q-checkbox v-model="task.done" /> {{ task.description }}
      </li>
    </ul>
    <router-link to="/" class="q-btn q-mt-md">Return to Home</router-link>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'IndexPage',
  setup() {
    const tasks = ref([
      {
        done: false,
        description:
          'Find Challenge 1 and make sure you can navigate to it using the navbar.',
      },
      { done: false, description: 'Move on to Challenge 2 & 3.' },
      { done: false, description: 'Commit.' },
      { done: false, description: 'Push.' },
      {
        done: false,
        description: 'Open PR that is well structured and explains the PR.',
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
