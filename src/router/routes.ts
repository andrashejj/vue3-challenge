import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'challenge-1',
        component: () => import('pages/ChallengeOne.vue'),
      },
      {
        path: 'challenge-2',
        component: () => import('pages/ChallengeTwo.vue'),
      },
      {
        path: 'challenge-3',
        component: () => import('pages/ChallengeThree.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
