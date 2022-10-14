<script setup lang="ts">
import { ref } from 'vue';
import { UserGroupMenu } from 'src/models/userGroupMenu';

const user = ref<UserGroupMenu>({
  groupid: '',
  idmenu: '',
  kdmitra: '',
  bopen: 0,
});

const submit = () => {
  //
};
</script>

<template>
  <div class="q-pa-md q-gutter-y-md">
    <q-input filled dense v-model="user.groupid" type="text" label="Group ID" />
    <q-input
      filled
      dense
      v-model="user.idmenu"
      type="text"
      label="User idmenu"
    />
    <q-input
      filled
      dense
      v-model="user.kdmitra"
      type="text"
      label="User kdmitra"
    />
    <q-select
      v-model="user.bopen"
      :options="[0, 1]"
      label="Boleh open menu"
      filled
      dense
    />

    <q-btn color="primary" label="Submit" class="q-mt-md" @click="submit" />
  </div>
</template>

<style></style>
