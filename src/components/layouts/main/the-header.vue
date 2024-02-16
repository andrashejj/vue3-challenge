<template>
  <q-header>
    <q-toolbar class="bg-white text-dark border-bottom">
      <t-logo
        size="md"
        class="q-mb-none"
        :to="{ name: ROUTE_NAMES.HOME_PAGE }"
      />
      <q-space></q-space>
    </q-toolbar>
  </q-header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ROUTE_NAMES } from 'src/router/routes';
import TLogo from 'src/components/quasar-extends/t-logo.vue';

export default defineComponent({
  name: 'TheMainHeader',
  components: {
    TLogo,
  },
  setup() {
    return { ROUTE_NAMES };
  },
});
</script>
<style>
.border-bottom {
  border-bottom: 1px solid #dadfe5;
}
</style>
