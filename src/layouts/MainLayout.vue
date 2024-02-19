<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Your Vue3 Coding Challenge </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Challenge 1',
    caption: 'Navigation & routing',
    icon: 'my_location',
    link:
      process.env.VUE_ROUTER_MODE === 'history'
        ? '/challenge-1'
        : '/#/challenge-1',
  },
  {
    title: 'Challenge 2',
    caption: 'Address book',
    icon: 'list',
    link:
      process.env.VUE_ROUTER_MODE === 'history'
        ? '/challenge-2'
        : '/#/challenge-2',
  },
  {
    title: 'Challenge 3',
    caption: 'Offline webapp',
    icon: 'app_blocking',
    link:
      process.env.VUE_ROUTER_MODE === 'history'
        ? '/challenge-3'
        : '/#/challenge-3',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
