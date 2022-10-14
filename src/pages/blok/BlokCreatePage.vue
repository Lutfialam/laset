<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Blok } from 'src/models/blok';
import { Mitra } from 'src/models/mitra';
import { Office } from 'src/models/office';
import { WareHouse } from 'src/models/ware';

const blok = ref<Blok>({
  blokdesc: '',
  kdmitra: '',
  offid: '',
  wareid: '',
});

const mitraList = ref<Mitra[]>([]);
const officeList = ref<Office[]>([]);
const wareList = ref<WareHouse[]>([]);

const submit = () => {
  //
};

onMounted(() => {
  // get mitra
  mitraList.value = [];
  // get office
  officeList.value = [];
  // get ware
  wareList.value = [];
});
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

    <q-select
      dense
      filled
      emit-value
      map-options
      label="Mitra"
      :options="mitraList"
      v-model="blok.kdmitra"
      :option-label="(item) => item.kdmitra"
      :option-value="(item) => item.kdmitra"
    />

    <q-select
      dense
      filled
      emit-value
      map-options
      label="Office"
      :options="officeList"
      v-model="blok.offid"
      :option-label="(item) => item.offid"
      :option-value="(item) => item.offid"
    />

    <q-select
      dense
      filled
      emit-value
      map-options
      label="WareHouse"
      :options="wareList"
      v-model="blok.wareid"
      :option-label="(item) => item.wareid"
      :option-value="(item) => item.wareid"
    />

    <q-btn color="primary" label="Submit" class="q-mt-md" @click="submit" />
  </div>
</template>

<style></style>
