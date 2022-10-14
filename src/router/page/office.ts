const officeRoutes = [
  {
    path: 'office',
    component: () => import('pages/office/OfficeMenu.vue'),
  },
  {
    path: 'office/create',
    component: () => import('pages/office/OfficeCreateMenu.vue'),
  },
];

export default officeRoutes;
