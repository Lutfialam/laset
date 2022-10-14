<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, reactive, ref, watch } from 'vue';

import { getBlokById } from 'src/service/ware/blok';
import { getAllOffice } from 'src/service/ware/office';
import { getLocationById } from 'src/service/ware/location';
import { getWareHouseById } from 'src/service/ware/warehouse';

import { Blok } from 'src/models/blok';
import { Office } from 'src/models/office';
import { WareHouse } from 'src/models/ware';
import { Location } from 'src/models/location';

interface ListData {
  officeCode: Office[];
  wareHouse: WareHouse[];
  blok: Blok[];
  locationId: Location[];
}

const router = useRouter();

const selectedOfficeCode = ref(0);
const selectedWareHouse = ref(0);
const selectedBlock = ref(0);
const selectedLocationId = ref(0);

let listData = reactive<ListData>({
  blok: [],
  wareHouse: [],
  officeCode: [],
  locationId: [],
});

watch(selectedOfficeCode, async (next) => {
  listData.wareHouse = await getWareHouseById(next);
});

watch(selectedWareHouse, async (next) => {
  listData.blok = await getBlokById(next);
});

watch(selectedBlock, async (next) => {
  listData.locationId = await getLocationById(next);
});

const filterWare = () => {
  router.push(`/saldo/${selectedLocationId.value}`);
};

onMounted(async () => {
  listData.officeCode = await getAllOffice();
});
</script>

<template>
  <div class="q-pa-md">
    <q-select
      dense
      outlined
      emit-value
      map-options
      class="q-pa-sm"
      v-model="selectedOfficeCode"
      :options="listData.officeCode"
      :option-value="(item) => item.offid"
      :option-label="(item) => item.offid"
      label="Office code"
    />
    <q-select
      dense
      outlined
      emit-value
      map-options
      class="q-pa-sm"
      onchange="onWareHouseChange"
      v-model="selectedWareHouse"
      :options="listData.wareHouse"
      :option-value="(item) => item.wareid"
      :option-label="(item) => item.wareid"
      label="Ware house"
    />
    <q-select
      dense
      outlined
      emit-value
      map-options
      class="q-pa-sm"
      v-model="selectedBlock"
      :options="listData.blok"
      :option-value="(item) => item.blokid"
      :option-label="(item) => item.blokid"
      label="Bloc"
    />
    <q-select
      dense
      outlined
      emit-value
      map-options
      class="q-pa-sm"
      onchange="onLocationIdChange"
      v-model="selectedLocationId"
      :options="listData.locationId"
      :option-value="(item) => item.locid"
      :option-label="(item) => item.locid"
      label="Location id"
    />
    <q-btn class="q-ma-sm" color="primary" label="Filter" @click="filterWare" />
  </div>
</template>

<style></style>
