<script setup lang="ts">
export interface Props {
  icon?: string;
  label: string;
  active: boolean;
  hideIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  hideIcon: true,
});

const hasIcon: boolean = props.icon && props.icon.length > 0 ? true : false;
</script>

<template>
  <q-list :bordered="hasIcon" class="rounded-borders">
    <q-item
      v-ripple
      clickable
      :active="active"
      @click="$emit('onClick')"
      :class="active ? 'my-menu-link' : 'text-black'"
    >
      <q-item-section :class="hasIcon ? '' : 'hidden'" avatar>
        <q-icon :name="icon ?? 'fas fa-table'" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ label }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>
