<template>
  <q-card class="employee-item">
    <q-card-section>
      <q-avatar>
        <img :src="item?.image" />
      </q-avatar>
      <div>
        <strong>{{ fullName }}</strong>
      </div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';
import { Person } from 'src/types/person';

export default defineComponent({
  name: 'EmployeeItem',
  props: {
    item: {
      type: Object as PropType<Person>,
    },
  },
  setup(props) {
    const fullName = computed(() => {
      return `${props.item?.firstName || ''} ${props.item?.lastName || ''}`;
    });

    return { fullName };
  },
});
</script>
