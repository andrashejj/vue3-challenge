<template>
  <div class="q-pa-md">
    <h1>Challenge 2</h1>
    <p>
      Welcome to Challenge 2. Your task is to create an interactive address
      book. Here are the requirements:
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
  name: 'ChallengeTwo',
  setup() {
    const tasks = ref([
      {
        done: false,
        description: 'Create a list of cards, each representing a person.',
      },
      {
        done: false,
        description:
          "Each card should display a circular image on the left, along with the person's name and last name. Displaying their email is optional.",
      },
      {
        done: false,
        description:
          'Fetch initial data from this API: https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01. Ensure the data is parsed and typesafe.',
      },
      {
        done: false,
        description:
          'Provide a way to add new cards. At minimum, the user should be able to input a name, last name, and image URL. Use Zod to validate this data.',
      },
      {
        done: false,
        description: 'Style the cards nicely for a pleasant user experience.',
      },
      {
        done: false,
        description: 'Make the cards draggable so the user can sort them.',
      },
      {
        done: false,
        description:
          "Don't worry about maintaining state between page refreshes or implementing API pagination.",
      },
      {
        done: false,
        description:
          'Feel free to add any additional features you think would enhance an address book.',
      },
      {
        done: false,
        description: 'Try to complete both Challenge 1 and 2 within an hour.',
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
