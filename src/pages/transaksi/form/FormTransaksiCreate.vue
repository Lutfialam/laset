<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Blok } from 'src/models/blok';

const blok = ref<Blok>({
  blokdesc: '',
  kdmitra: '',
  offid: '',
  wareid: '',
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
      v-model="blok.blokdesc"
      label="Blok description"
    />

    <q-btn color="primary" label="Submit" class="q-mt-md" @click="submit" />
  </div>
</template>

<style></style>
