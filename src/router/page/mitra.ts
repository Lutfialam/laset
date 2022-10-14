const mitraRoutes = [
  {
    path: 'mitra',
    component: () => import('pages/mitra/MitraPage.vue'),
  },
  {
    path: 'mitra/create',
    component: () => import('pages/mitra/MitraCreatePage.vue'),
  },
];

export default mitraRoutes;
