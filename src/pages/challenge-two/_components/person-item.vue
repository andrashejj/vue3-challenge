<template>
  <q-card class="employee-item">
    <q-card-section>
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>
      <h1>{{ item?.id }}</h1>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Person } from 'src/types/person'

export default defineComponent({
  name: 'EmployeeItem',
  props: {
    item: {
      type: Object as PropType<Person>
    }
  }
})
</script>
