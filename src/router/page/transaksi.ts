const transaksiRoutes = [
  {
    path: 'transaksi/list/create',
    component: () => import('pages/transaksi/list/ListTransaksiCreate.vue'),
  },
  {
    path: 'transaksi/form/create',
    component: () => import('pages/transaksi/form/FormTransaksiCreate.vue'),
  },
];

export default transaksiRoutes;
