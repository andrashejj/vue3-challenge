import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'src/layouts/main-layout.vue';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [{ path: '', component: () => import('pages/index-page.vue') }],
  },
  // TODO: Addd here something

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/error/error-not-found.vue'),
  },
];

export default routes;
