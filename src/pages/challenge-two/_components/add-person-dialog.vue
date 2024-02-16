<template>
  <q-dialog v-model="dialogState.state">
    <q-card class="my-card">
      <q-card-section>
        <div class="q-gutter-md">
          <q-input outlined v-model="form.firstName" label="First Name" />
          <q-input outlined v-model="form.lastName" label="Last Name" />
          <q-input outlined v-model="form.image" label="Image URL" />
        </div>
      </q-card-section>
      <q-separator />

      <q-card-actions align="right">
        <q-btn v-close-popup flat color="primary" label="Close" />
        <q-btn v-close-popup flat color="primary" label="Create" @click="onAddPerson" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import useSharedPerson from '../_composable/usePerson';
import { reactive } from 'vue';
import { Person } from 'src/types/person';

export default defineComponent({
  name: 'add-person',
  setup() {
    const { dialogState, addPerson } = useSharedPerson();

    const form = reactive<Partial<Person>>({
      firstName: '',
      lastName: '',
      image: '',
    });

    function onAddPerson(){
      addPerson(form)
    }

    return { dialogState, form, onAddPerson };
  },
});
</script>
