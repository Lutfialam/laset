<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Mitra } from 'src/models/mitra';

const mitraList = ref<Mitra[]>([]);

onMounted(() => {
  const office: Mitra[] = [
    {
      kdmitra: '1',
      alamatmitra: '',
      descmitra: '',
      emailmitra: '',
      kdlogin: '',
      nohpmitra: '',
    },
  ];

  mitraList.value = office;
});
</script>

<template>
  <div class="q-pa-md">
    <q-btn
      color="primary"
      icon="add"
      label="Add Mitra"
      to="/dashboard/office/create"
      class="q-my-lg"
    />
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Kode Mitra</th>
          <th class="text-left">Mitra Description</th>
          <th class="text-left">Mitra Email</th>
          <th class="text-left">Mitra No HP</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in mitraList" :key="index">
          <td class="text-left">{{ index + 1 }}</td>
          <td class="text-left">{{ item.kdmitra }}</td>
          <td class="text-left">{{ item.descmitra }}</td>
          <td class="text-left">{{ item.emailmitra }}</td>
          <td class="text-left">{{ item.nohpmitra }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<style></style>
