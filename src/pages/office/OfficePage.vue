<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Office } from 'src/models/office';

const officeList = ref<Office[]>([]);

onMounted(() => {
  const office: Office[] = [
    {
      offcode: '1',
      kdmitra: '1',
      offdesc: 'Office description 1',
    },
  ];

  officeList.value = office;
});
</script>

<template>
  <div class="q-pa-md">
    <q-btn
      color="primary"
      icon="add"
      label="Add Office"
      to="/dashboard/office/create"
      class="q-my-lg"
    />
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Office ID</th>
          <th class="text-left">Office Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in officeList" :key="index">
          <td class="text-left">{{ index + 1 }}</td>
          <td class="text-left">{{ item.offcode }}</td>
          <td class="text-left">{{ item.offdesc }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<style></style>
