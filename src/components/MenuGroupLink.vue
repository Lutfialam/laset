<script setup lang="ts">
export interface Props {
  icon?: string;
  label: string;
  active?: boolean;
}

const props = defineProps<Props>();
const className = props.active ? 'my-menu-link text-primary' : '';
</script>

<template>
  <q-list bordered class="rounded-borders">
    <q-expansion-item
      :class="active ? 'my-menu-link text-primary' : ''"
      :icon="icon"
      :label="label"
    >
      <div class="q-pl-md">
        <slot />
      </div>
    </q-expansion-item>
  </q-list>
</template>
