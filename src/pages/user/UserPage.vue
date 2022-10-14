<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { User } from 'src/models/user';

const userList = ref<User[]>([]);

onMounted(() => {
  const user: User[] = [
    {
      name: '',
      email: '',
      level: '',
      offcode: '',
      nohp: '',
      alamat: '',
      groupid: '',
      kdmitra: '',
    },
  ];

  userList.value = user;
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
          <th class="text-left">Name</th>
          <th class="text-left">Office code</th>
          <th class="text-left">Group ID</th>
          <th class="text-left">Kode Mitra</th>
          <th class="text-left">email</th>
          <th class="text-left">level</th>
          <th class="text-left">No HP</th>
          <th class="text-left">Alamat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in userList" :key="index">
          <td class="text-left">{{ index + 1 }}</td>
          <td class="text-left">{{ item.name }}</td>
          <td class="text-left">{{ item.offcode }}</td>
          <td class="text-left">{{ item.groupid }}</td>
          <td class="text-left">{{ item.kdmitra }}</td>
          <td class="text-left">{{ item.email }}</td>
          <td class="text-left">{{ item.level }}</td>
          <td class="text-left">{{ item.nohp }}</td>
          <td class="text-left">{{ item.alamat }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<style></style>
