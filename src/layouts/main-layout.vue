<template>
  <q-layout view="hHh Lpr lFf" class="font-titillium text-default">
    <the-header />
    <the-drawer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from 'src/components/layouts/main/the-header.vue';
import TheDrawer from 'src/components/layouts/main/the-drawer.vue';
export default defineComponent({
  name: 'MainLayout',
  components: {
    TheHeader, TheDrawer
  }
})
</script>
