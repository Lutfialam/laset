<script setup lang="ts">
import { ref } from 'vue';
import { Mitra } from 'src/models/mitra';

const mitra = ref<Mitra>({
  kdmitra: '1',
  alamatmitra: '',
  descmitra: '',
  emailmitra: '',
  kdlogin: '',
  nohpmitra: '',
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
      type="email"
      v-model="mitra.emailmitra"
      label="Mitra Email"
    />
    <q-input
      dense
      filled
      type="number"
      v-model="mitra.nohpmitra"
      label="Mitra No HP"
    />

    <q-input
      dense
      filled
      type="textarea"
      v-model="mitra.descmitra"
      label="Mitra Description"
    />
    <q-input
      dense
      filled
      type="textarea"
      v-model="mitra.alamatmitra"
      label="Alamat Mitra"
    />
    <q-input
      dense
      filled
      type="text"
      v-model="mitra.kdlogin"
      label="kode login Mitra"
    />

    <q-btn color="primary" label="Submit" class="q-mt-md" @click="submit" />
  </div>
</template>

<style></style>
