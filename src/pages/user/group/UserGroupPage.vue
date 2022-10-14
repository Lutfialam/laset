<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { UserGroup } from 'src/models/userGroup';

const userGroupList = ref<UserGroup[]>([]);

onMounted(() => {
  const user: UserGroup[] = [
    {
      groupid: '',
      kdmitra: '',
      descgroup: '',
    },
  ];

  userGroupList.value = user;
});
</script>

<template>
  <div class="q-pa-md">
    <q-btn
      color="primary"
      icon="add"
      label="Add user"
      to="/dashboard/user/create"
      class="q-my-lg"
    />
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Group ID</th>
          <th class="text-left">Kode mitra</th>
          <th class="text-left">Group description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in userGroupList" :key="index">
          <td class="text-left">{{ index + 1 }}</td>
          <td class="text-left">{{ item.groupid }}</td>
          <td class="text-left">{{ item.kdmitra }}</td>
          <td class="text-left">{{ item.descgroup }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<style></style>
