<script setup lang="ts">
import { ref } from 'vue';
import { Office } from 'src/models/office';

const office = ref<Office>({
  offcode: '0',
  kdmitra: '',
  offdesc: '',
});

const submit = () => {
  //
};
</script>

<template>
  <div class="q-pa-md q-gutter-y-md">
    <q-input
      dense
      filled
      type="text"
      v-model="office.offdesc"
      label="Office description"
    />

    <q-btn color="primary" label="Submit" class="q-mt-md" @click="submit" />
  </div>
</template>

<style></style>
