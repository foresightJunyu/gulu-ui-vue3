<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { ref, provide } from "vue";
export default {
  name: "App",
  setup() {
    const menuVisible = ref(false);
    provide("menuVisible", menuVisible);
  },
};
</script>
