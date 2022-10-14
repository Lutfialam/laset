<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Blok } from 'src/models/blok';

const blokList = ref<Blok[]>([]);

onMounted(() => {
  const blok: Blok[] = [
    {
      blokid: '',
      blokdesc: '',
      kdmitra: '',
      offid: '',
      wareid: '',
    },
  ];

  blokList.value = blok;
});
</script>

<template>
  <div class="q-pa-md">
    <q-btn
      color="primary"
      icon="add"
      label="Add blok"
      to="/dashboard/blok/create"
      class="q-my-lg"
    />
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">blok Description</th>
          <th class="text-left">Kode mitra</th>
          <th class="text-left">Office id</th>
          <th class="text-left">Ware id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in blokList" :key="index">
          <td class="text-left">{{ index + 1 }}</td>
          <td class="text-left">{{ item.blokdesc }}</td>
          <td class="text-left">{{ item.kdmitra }}</td>
          <td class="text-left">{{ item.offid }}</td>
          <td class="text-left">{{ item.wareid }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<style></style>
