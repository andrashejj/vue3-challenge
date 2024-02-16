<template>
  <q-avatar :size="outlineSize" :color="outlineColor">
    <q-avatar :size="inlineSize" :color="inlineColor">
      <q-icon :size="size" :name="name" :color="color"></q-icon>
    </q-avatar>
  </q-avatar>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { defineComponent } from 'vue';

type Size = string | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export default defineComponent({
  name: 't-icon',
  props: {
    outlineSize: { type: Object as PropType<Size> },
    inlineSize: { type: Object as PropType<Size> },
    size: { type: Object as PropType<Size> },
    name: String,
    outlineColor: String,
    inlineColor: String,
    color: String,
  },
});
</script>
