const userRoutes = [
  {
    path: 'user',
    component: () => import(`src/pages/user/UserPage.vue`),
  },
  {
    path: 'user/create',
    component: () => import(`src/pages/user/UserCreatePage.vue`),
  },
  {
    path: 'user/group',
    component: () => import(`src/pages/user/group/UserGroupPage.vue`),
  },
  {
    path: 'user/group/create',
    component: () => import(`src/pages/user/group/UserGroupCreatePage.vue`),
  },
  {
    path: 'user/groupmenu',
    component: () => import(`src/pages/user/groupMenu/UserGroupMenu.vue`),
  },
  {
    path: 'user/groupmenu/create',
    component: () => import(`src/pages/user/groupMenu/UserGroupCreateMenu.vue`),
  },
];

export default userRoutes;
