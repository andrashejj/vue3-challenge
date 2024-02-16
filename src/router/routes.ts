import { RouteRecordRaw } from 'vue-router';
import MailLayout from 'src/layouts/main-layout.vue';

export const ROUTE_NAMES = {
  MAIN_LAYOUT: 'main-layout',
  HOME_PAGE: 'home-page',
  CHALLENGE_ONE: 'challenge-one',
  CHALLENGE_TWO: 'challenge-two',
  CHALLENGE_THREE: 'challenge-three'
};

export const ROUTE_PATHS = {
  DASHBOARD: 'home-dashboard',
  HOME_PAGE: '/',
  CHALLENGE_ONE: '/challenge-one',
  CHALLENGE_TWO: '/challenge-two',
  CHALLENGE_THREE: '/challenge-three'
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: ROUTE_NAMES.MAIN_LAYOUT,
    component: MailLayout,
    children: [
      { path: ROUTE_PATHS.HOME_PAGE, name: ROUTE_NAMES.HOME_PAGE, component: () => import('src/pages/index-page.vue') },
      { path: ROUTE_PATHS.CHALLENGE_ONE, name: ROUTE_NAMES.CHALLENGE_ONE, component: () => import('src/pages/challenge-one.vue') },
      { path: ROUTE_PATHS.CHALLENGE_TWO, name: ROUTE_NAMES.CHALLENGE_TWO, component: () => import('src/pages/challenge-two.vue') },
      { path: ROUTE_PATHS.CHALLENGE_THREE, name: ROUTE_NAMES.CHALLENGE_THREE, component: () => import('src/pages/challenge-one.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/error/error-not-found.vue'),
  },
];

export default routes;
