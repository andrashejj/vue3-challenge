<template>
  <div class="q-pa-md">
    <h1>Challenge 2</h1>
    <p>
      Welcome to Challenge 2. Your task is to create an interactive address
      book. Here are the requirements:
    </p>
    <ul class="no-bullets">
      <li v-for="(task, index) in tasks" :key="index">
        <q-checkbox v-model="task.done" />
        {{ task.description }}
      </li>
    </ul>

    <h5 class="q-mb-sm">Address book</h5>
    <div class="flex column q-gutter-sm">
      <q-card v-for="person in persons" :key="person.id">
        <q-item>
          <q-item-section avatar>
            <q-avatar color="red" text-color="white">
              {{ person.firstname?.charAt(0) }}{{ person.lastname?.charAt(0) }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <div class="text-subtitle1">
              {{ person.firstname }} {{ person.lastname }}
            </div>
            <div class="text-subtitle2">
              <a class="text-grey" :href="`mailto:${person.email}`">{{
                person.email
              }}</a>
            </div>
          </q-item-section>
        </q-item>
      </q-card>
    </div>

    <h6 class="q-mb-sm">Add new address</h6>
    <form @submit="onSubmitAddress">
      <div>
        <q-input
          label="First name"
          outlined
          v-model="firstname"
          name="firstname"
          placeholder="Enter first name"
        />
        <span>{{ errors.firstname }}</span>
      </div>

      <div class="q-mt-sm">
        <q-input
          label="Last name"
          outlined
          v-model="lastname"
          name="lastname"
          placeholder="Enter last name"
        />
        <span>{{ errors.lastname }}</span>
      </div>

      <div class="q-mt-sm">
        <q-input
          label="Email"
          outlined
          v-model="email"
          name="email"
          placeholder="Enter email"
        />
        <span>{{ errors.email }}</span>
      </div>
      <q-btn type="submit" class="q-mt-sm">Submit</q-btn>
    </form>
    <router-link to="/" class="q-btn q-mt-md">Return to Home</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { PersonItem } from 'components/models';
import { useForm, useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const validationSchema = toTypedSchema(
  zod.object({
    firstname: zod
      .string()
      .min(1, { message: 'First name is required' })
      .max(50, { message: 'First name max length exceeded' }),
    lastname: zod
      .string()
      .min(1, { message: 'Last name is required' })
      .max(50, { message: 'Last name max length exceeded' }),
    email: zod.string().email({ message: 'Must be a valid email' }),
  }),
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: firstname } = useField('firstname');
const { value: lastname } = useField('lastname');
const { value: email } = useField('email');

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

const persons = ref<PersonItem[]>([]);

const fetchPersons = async () => {
  const response = await axios.get<PersonItem[]>(
    'https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01',
  );

  if (!response?.data) {
    return;
  }

  persons.value = response.data.data;
};

const onSubmitAddress = handleSubmit((values, { resetForm }) => {
  persons.value.push(values);
  resetForm();
});

void fetchPersons();
</script>

<style scoped>
.no-bullets {
  list-style-type: none;
}
</style>
