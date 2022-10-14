<script setup lang="ts">
import { ref } from 'vue';
import { UserGroup } from 'src/models/userGroup';

const userGroup = ref<UserGroup>({
  groupid: '',
  kdmitra: '',
  descgroup: '',
});

const submit = () => {
  //
};
</script>

<template>
  <div class="q-pa-md q-gutter-y-md">
    <q-input
      filled
      dense
      v-model="userGroup.groupid"
      type="text"
      label="Group ID"
    />
    <q-input
      filled
      dense
      v-model="userGroup.kdmitra"
      type="text"
      label="User kdmitra"
    />
    <q-input
      filled
      dense
      v-model="userGroup.descgroup"
      type="textarea"
      label="User group description"
    />

    <q-btn color="primary" label="Submit" class="q-mt-md" @click="submit" />
  </div>
</template>

<style></style>
