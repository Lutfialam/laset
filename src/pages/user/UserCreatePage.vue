<script setup lang="ts">
import { ref } from 'vue';
import { User } from 'src/models/user';

const user = ref<User>({
  name: '',
  email: '',
  password: '',
  level: '',
  offcode: '',
  nohp: '',
  alamat: '',
  groupid: '',
  kdmitra: '',
});

const submit = () => {
  //
};

// onMounted(() => {
//   // get office

// })
</script>

<template>
  <div class="q-pa-md q-gutter-y-md">
    <q-input filled dense v-model="user.name" type="text" label="User name" />
    <q-input
      filled
      dense
      v-model="user.email"
      type="email"
      label="User email"
    />
    <q-input
      filled
      dense
      v-model="user.password"
      type="password"
      label="User password"
    />
    <q-input filled dense v-model="user.level" type="text" label="User level" />
    <q-input
      filled
      dense
      v-model="user.offcode"
      type="text"
      label="User office code"
    />
    <q-input
      filled
      dense
      v-model="user.nohp"
      type="number"
      label="User phone number"
    />
    <q-input
      filled
      dense
      v-model="user.kdmitra"
      type="number"
      label="User kode mitra"
    />
    <q-input
      filled
      dense
      v-model="user.groupid"
      type="number"
      label="User group id"
    />
    <q-input
      filled
      dense
      v-model="user.alamat"
      type="textarea"
      label="Alamat"
    />

    <q-btn color="primary" label="Submit" class="q-mt-md" @click="submit" />
  </div>
</template>

<style></style>
