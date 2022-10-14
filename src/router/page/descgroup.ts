const descRoutes = [
  {
    path: 'descgroup',
    component: () => import('pages/descgroup/DescGroupPage.vue'),
  },
  {
    path: 'descgroup/create',
    component: () => import('pages/descgroup/CreateDescGroup.vue'),
  },
];

export default descRoutes;
