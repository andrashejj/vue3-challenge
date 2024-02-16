<template>
  <router-link
    :to="to"
    class="row justify-center items-end"
  >
    <q-icon
      :size="size"
      name="space_dashboard"
      class="text-primary q-mr-sm"
    ></q-icon>
  </router-link>
</template>
<script lang="ts">
import { PropType, computed } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import { defineComponent } from 'vue';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export default defineComponent({
  name: 't-logo',
  props: {
    to: { type: Object as PropType<RouteLocationRaw>, default: () => {
      return {path: '/'}
    } },
    size: { type: String as PropType<Size>, default: () => 'xs' },
  },
  setup(props) {
    const textSizeClass = computed(() => {
      switch (props.size) {
        case 'xs':
          return 'text-caption';
        case 'sm':
          return 'text-body2';
        case 'md':
          return 'text-h6';
        case 'lg':
          return 'text-h5';
        case 'xl':
          return 'text-h4';
        default:
          return 'text-h4';
      }
    });

    return { textSizeClass }
  },
});
</script>
