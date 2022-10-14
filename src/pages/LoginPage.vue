<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const credential = reactive({
  email: '',
  password: '',
});

const submit = () => {
  router.push('/dashboard/');
};
</script>

<template>
  <div
    class="window-width window-height q-pa-md justify-center items-center content-center row"
  >
    <div class="bg-white q-pa-md col-4 q-px-lg shadow-3">
      <h4>Login</h4>

      <q-input
        filled
        dense
        type="email"
        v-model="credential.email"
        label="Your email *"
      />

      <q-input
        filled
        dense
        type="password"
        class="q-py-md"
        v-model="credential.password"
        label="Your password *"
      />

      <q-btn color="primary" label="Login" @click="submit" />
    </div>
  </div>
</template>
