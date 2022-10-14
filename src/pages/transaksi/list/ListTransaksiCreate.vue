<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface CreateTransaksi {
  cif: string;
  namacif: string;
  descgroup1: string;
  descgroup2: string;
  descgroup3: string;
  gambar: File | null;
}

interface CreateTransaksiError {
  cif: string;
  namacif: string;
  descgroup1: string;
  descgroup2: string;
  descgroup3: string;
  gambar: string;
}

type CreateTransaksiData = CreateTransaksi & {
  index: number;
};

const imageVisible = ref(false);
const selectedTransaksi = ref<CreateTransaksi>();
const transaksiList = ref<CreateTransaksiData[]>([]);

const initialDataTransaksi = {
  cif: '',
  namacif: '',
  descgroup1: '',
  descgroup2: '',
  descgroup3: '',
  gambar: null,
  index: transaksiList.value.length,
};

const tempTransaksi = ref<CreateTransaksiData>(
  Object.assign({}, initialDataTransaksi)
);
const transaksiError = ref<CreateTransaksiError>({
  ...Object.assign({}, initialDataTransaksi),
  gambar: '',
});

const openImage = (transaksi: CreateTransaksi) => {
  selectedTransaksi.value = transaksi;
  imageVisible.value = true;
};

const isValidated = () => {
  let validated = true;
  const list = [
    'cif',
    'namacif',
    'descgroup1',
    'descgroup2',
    'descgroup3',
  ] as const;

  list.map((item) => {
    if (tempTransaksi.value[item].length <= 0) {
      transaksiError.value = {
        ...transaksiError.value,
        [item]: `${item} is required`,
      };
      validated = false;
    }
  });

  if (tempTransaksi.value.gambar == null) {
    validated = false;
    transaksiError.value = {
      ...transaksiError.value,
      gambar: `gambar is required`,
    };
  }

  return validated;
};

const addTransaksi = () => {
  if (isValidated()) {
    transaksiList.value = [...transaksiList.value, { ...tempTransaksi.value }];
    tempTransaksi.value = Object.assign({}, initialDataTransaksi);
    transaksiError.value = {
      ...Object.assign({}, initialDataTransaksi),
      gambar: '',
    };
  }
};

const removeTransaksi = (index: number) => {
  const newTransaksi = transaksiList.value.filter(
    (item) => item.index !== index
  );
  transaksiList.value = newTransaksi;
};

const toObjectURL = (gambar: File | null) => {
  const path = gambar ? window.URL.createObjectURL(gambar) : '';
  return path;
};

const toFormData = (data: CreateTransaksi) => {
  const { cif, namacif, descgroup1, descgroup2, descgroup3, gambar } = data;
  const formdata = new FormData();

  formdata.append('cif', cif);
  formdata.append('namacif', namacif);
  formdata.append('descgroup1', descgroup1);
  formdata.append('descgroup2', descgroup2);
  formdata.append('descgroup3', descgroup3);
  formdata.append('gambar', gambar!);

  return formdata;
};

const submit = () => {
  let finalData = transaksiList.value.map((item) => toFormData(item));

  // submit final data
};
</script>

<template>
  <div class="q-pa-md q-gutter-y-md">
    <div class="row">
      <q-input
        dense
        filled
        autofocus
        type="text"
        class="col-6 q-pr-sm"
        v-model="tempTransaksi.cif"
        :error="transaksiError.cif.length > 0"
        :error-message="transaksiError.cif"
        label="CIF"
      />
      <q-input
        dense
        class="col-6"
        filled
        type="text"
        v-model="tempTransaksi.namacif"
        :error="transaksiError.namacif.length > 0"
        :error-message="transaksiError.namacif"
        label="Nama CIF"
      />
    </div>
    <div class="row">
      <q-input
        dense
        filled
        type="textarea"
        class="col-6 q-pr-sm"
        v-model="tempTransaksi.descgroup1"
        :error="transaksiError.descgroup1.length > 0"
        :error-message="transaksiError.descgroup1"
        label="Description group 1"
      />
      <q-input
        dense
        filled
        type="textarea"
        class="col-6"
        v-model="tempTransaksi.descgroup2"
        :error="transaksiError.descgroup2.length > 0"
        :error-message="transaksiError.descgroup2"
        label="Description group 2"
      />
    </div>
    <q-input
      dense
      filled
      type="textarea"
      v-model="tempTransaksi.descgroup3"
      :error="transaksiError.descgroup3.length > 0"
      :error-message="transaksiError.descgroup3"
      label="Description group 3"
    />

    <q-file
      color="teal"
      filled
      v-model="tempTransaksi.gambar"
      accept=".jpg, image/*"
      :error="transaksiError.gambar.length > 0"
      :error-message="transaksiError.gambar"
      label="Upload gambar"
    >
      <template v-slot:prepend>
        <q-icon name="cloud_upload" />
      </template>
    </q-file>

    <div class="row justify-end">
      <q-btn
        color="primary"
        type="submit"
        label="Add to list"
        class="q-mt-md self-end"
        @click="addTransaksi"
      />
    </div>

    <q-markup-table class="q-mt-xl">
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">CIF</th>
          <th class="text-left">Nama CIF</th>
          <th class="text-left">Group Description 1</th>
          <th class="text-left">Group Description 2</th>
          <th class="text-left">Group Description 3</th>
          <th class="text-left">Gambar</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in transaksiList" :key="index">
          <td class="text-left">{{ index + 1 }}</td>
          <td class="text-left">{{ item.cif }}</td>
          <td class="text-left">{{ item.namacif }}</td>
          <td class="text-left">{{ item.descgroup1 }}</td>
          <td class="text-left">{{ item.descgroup2 }}</td>
          <td class="text-left">{{ item.descgroup3 }}</td>
          <td class="text-left">
            <img
              width="100"
              height="100"
              @click="openImage(item)"
              :src="toObjectURL(item.gambar)"
            />
          </td>
          <td>
            <q-btn
              color="red"
              icon="remove"
              @click="removeTransaksi(item.index)"
            />
          </td>
        </tr>
      </tbody>
    </q-markup-table>

    <q-dialog full-height full-width v-model="imageVisible">
      <q-card>
        <q-card-section class="row justify-between">
          <div class="text-h6">{{ selectedTransaksi?.namacif }}</div>
          <q-btn
            color="primary"
            icon="close"
            label="CLOSE"
            @click="imageVisible = false"
          />
        </q-card-section>

        <q-card-section class="q-pt-none row q-pa-md">
          <img :src="toObjectURL(selectedTransaksi?.gambar!)" class="col-12" />
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-btn color="primary" label="Submit" class="q-mt-md" @click="submit" />
  </div>
</template>

<style></style>
