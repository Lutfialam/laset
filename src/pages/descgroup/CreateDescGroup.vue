<script setup lang="ts">
import { DescGroup } from 'src/models/descGroup';
import { ref, watch, watchEffect } from 'vue';

// const descgroup2 = ref('');
// const descgroup3 = ref('');
// const descgroup1 = ref('');

const descgroup = ref<DescGroup>({
  descgroup1: '',
  descgroup2: '',
  descgroup3: '',
});

// watch(descgroup1, (value) => {
//   descgroup1.value = value.toUpperCase();
// });

// watch(descgroup2, (value) => {
//   descgroup2.value = value.toUpperCase();
// });

// watch(descgroup3, (value) => {
//     descgroup3.value = value.toUpperCase();
// });
watchEffect(() => {
  const { value } = descgroup;

  descgroup.value = {
    descgroup1: value.descgroup1.toUpperCase(),
    descgroup2: value.descgroup2.toUpperCase(),
    descgroup3: value.descgroup3.toUpperCase(),
  };
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
      v-model="descgroup.descgroup1"
      label="Description 1"
    />

    <q-input
      dense
      filled
      type="text"
      v-model="descgroup.descgroup2"
      label="Description 2"
    />

    <q-input
      dense
      filled
      type="text"
      v-model="descgroup.descgroup3"
      label="Description 3"
    />

    <q-btn color="primary" label="Submit" class="q-mt-md" @click="submit" />
  </div>
</template>

<style></style>
