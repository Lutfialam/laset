<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { DescGroup } from 'src/models/descGroup';

const descGroupList = ref<DescGroup[]>([]);

onMounted(() => {
  const descGroup: DescGroup[] = [
    {
      descgroup1: 'Description 1',
      descgroup2: 'Description 2',
      descgroup3: 'Description 3',
    },
  ];

  descGroupList.value = descGroup;
});
</script>

<template>
  <div class="q-pa-md">
    <q-btn
      color="primary"
      icon="add"
      label="Add descgroup"
      to="/dashboard/descgroup/create"
      class="q-my-lg"
    />
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Description 1</th>
          <th class="text-left">Description 2</th>
          <th class="text-left">Description 3</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in descGroupList" :key="index">
          <td class="text-left">{{ index + 1 }}</td>
          <td class="text-left">{{ item.descgroup1 }}</td>
          <td class="text-left">{{ item.descgroup2 }}</td>
          <td class="text-left">{{ item.descgroup3 }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<style></style>
