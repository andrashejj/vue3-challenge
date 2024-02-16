<template>
  <div class="q-pa-md">
    <h1>Challenge 3</h1>
    <p>
      Welcome to Challenge 3. Your task is to make the webapp offline-first.
      Here are the requirements:
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
  name: 'ChallengeThree',
  setup() {
    const tasks = ref([
      { done: false, description: 'Store all state in local storage.' },
      {
        done: false,
        description:
          'Synchronize the local state with a "fake" API when the app comes back online.',
      },
      {
        done: false,
        description:
          'Handle failed synchronization. If the synchronization fails, display a message saying "Synchronization failed, will try again in a few minutes" or similar.',
      },
      {
        done: false,
        description:
          'Ensure that the app works offline. The user should be able to add, edit, and delete cards even when offline.',
      },
      {
        done: false,
        description:
          'When the app comes back online, any changes made offline should be synchronized with the API.',
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
