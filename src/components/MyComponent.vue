<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useMyGlobalState } from 'src/stores/myglobalstate';
import { ref } from 'vue';

const $q = useQuasar();
const myGlobalState = useMyGlobalState(); // ngakses global state di component child

const props = defineProps<{
  msg: string;
  showBtn?: boolean;
}>();

const klikme = () => {
  $q.dialog({
    title: 'Ini Pesan',
    message: `Pesan: ${myGlobalState.propAngkaAkar2}|${myGlobalState.propAngkaDikali2}|${myGlobalState.myangka}`,
  }).onOk(() => {
    // console.log('hai');
    myGlobalState.fnTambahinAngka();
  });
};
</script>

<template>
  <q-chip icon="fas fa-shapes"
    >komponent child, Props: {{ props.msg }} |
    {{ myGlobalState.propAngkaAkar2 }} | {{ myGlobalState.propAngkaDikali2 }} |
    {{ myGlobalState.myangka }}</q-chip
  >
  <q-btn color="orange" dense v-if="props.showBtn" @click="klikme"
    >Klik me</q-btn
  >
  <q-btn
    color="blue"
    dense
    v-if="props.showBtn"
    @click="$emit('addRowFromChild', 'dari child')"
    >Trigger Addrow child ke parent</q-btn
  >
</template>

<style></style>
