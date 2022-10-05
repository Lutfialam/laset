<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="fas fa-bars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          E-Asset | {{ myGlobalState.myangka }}
        </q-toolbar-title>

        <div>v1.0</div>
      </q-toolbar>
    </q-header>

    <!-- <q-header class="bg-grey-2 text-dark" bordered>
        <q-toolbar>
          <q-input
            borderless
            input-class="text-left"
            class="q-ml-md"
            label="Search shots.."
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-space></q-space>
          <q-separator vertical />
          <q-btn dense round flat icon="far fa-bell" class="q-mx-lg">
            <q-badge color="green" floating transparent>4</q-badge>
          </q-btn>
          <q-separator vertical />
          <q-avatar class="q-ml-lg">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
          <q-btn
            color="dark"
            icon-right="fas fa-chevron-down"
            label="Jan Strassmann"
            flat
          />
        </q-toolbar>
      </q-header> -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <div class="q-mt-md q-mr-md text-right">
        <!-- <q-btn dense flat round icon="lens" size="8.5px" color="red" />
          <q-btn dense flat round icon="lens" size="8.5px" color="yellow" /> -->
        <q-btn
          dense
          flat
          round
          icon="fas fa-circle"
          size="8.5px"
          color="green"
          label="Online"
        />
      </div>
      <q-list>
        <!-- <div class="text-center q-py-md">
          <q-btn
            color="light-blue-8"
            icon="fas fa-cloud-upload-alt"
            label="Upload"
            class="q-px-lg"
          ></q-btn>
        </div> -->
        <q-item
          clickable
          active-class="my-menu-link"
          v-ripple
          :active="link === '/dashboard/'"
          @click="changeLink('/dashboard/')"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-tachometer-alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          active-class="my-menu-link"
          v-ripple
          :active="link === '/dashboard/table'"
          @click="changeLink('/dashboard/table')"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-table" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Table</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-space></q-space>
      <div
        class="text-center q-py-md"
        style="position: absolute; bottom: 0; margin-left: 75px"
      >
        <q-btn color="red" label="Logout" class="q-px-lg" outline to="/" />
      </div>
    </q-drawer>

    <q-page-container>
      <!-- perpindahan page tengah terjadi disini -->
      <!-- jadi untuk logic login tinggal exlude MainLayout ini atau dikasih if, tapi lebih oke di exlude aja di router -->
      <!-- intinya kaya extends sama section di laravel lah -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useMyGlobalState } from 'src/stores/myglobalstate';
import { onMounted, ref } from 'vue';
// import EssentialLink, {
//   EssentialLinkProps,
// } from 'components/EssentialLink.vue';
import { useRouter } from 'vue-router';

// const essentialLinks: EssentialLinkProps[] = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev',
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework',
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev',
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev',
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev',
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev',
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev',
//   },
// ];
const myGlobalState = useMyGlobalState();
const leftDrawerOpen = ref(false);

// const link = 'Dashboard';
const link = ref('');
const router = useRouter();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const changeLink = (url: string) => {
  link.value = url;
  router.push(url);
};

onMounted(() => {
  // console.log();
  link.value = router.currentRoute.value.fullPath;
});
</script>

<style scoped>
.my-menu-link {
  border-left: 4px solid #2698d6;
}
</style>
