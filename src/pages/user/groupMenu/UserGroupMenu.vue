<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { UserGroupMenu } from 'src/models/userGroupMenu';

const userGroupMenuList = ref<UserGroupMenu[]>([]);

onMounted(() => {
  const user: UserGroupMenu[] = [
    {
      groupid: '',
      kdmitra: '',
      idmenu: '',
      bopen: 0,
    },
  ];

  userGroupMenuList.value = user;
});
</script>

<template>
  <div class="q-pa-md">
    <q-btn
      color="primary"
      icon="add"
      label="Add user"
      to="/dashboard/user/groupmenu/create"
      class="q-my-lg"
    />
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Group ID</th>
          <th class="text-left">ID Menu</th>
          <th class="text-left">Bopen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in userGroupMenuList" :key="index">
          <td class="text-left">{{ index + 1 }}</td>
          <td class="text-left">{{ item.groupid }}</td>
          <td class="text-left">{{ item.idmenu }}</td>
          <td class="text-left">{{ item.bopen }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<style></style>
