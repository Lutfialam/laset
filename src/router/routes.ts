import { RouteRecordRaw } from 'vue-router';
import mitraRoutes from './page/mitra';
import officeRoutes from './page/office';
import transaksiRoutes from './page/transaksi';
import userRoutes from './page/user';
import wareRoutes from './page/ware';
import descRoutes from './page/descgroup';

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DashboardPage.vue') },
      { path: 'table', component: () => import('pages/TablePage.vue') },

      ...userRoutes,
      ...officeRoutes,
      ...wareRoutes,
      ...mitraRoutes,
      ...transaksiRoutes,
      ...descRoutes,
    ],
  },
  {
    path: '/',
    component: () => import('pages/LoginPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
