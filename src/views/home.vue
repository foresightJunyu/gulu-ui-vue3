<template>
<div>
  <Topnav/>
  <div class="banner">
    <h1>This UI</h1>
    <h2>Nice</h2>
    <p class="actions">
      <a href="">GitHub</a>
      <a href="">开始</a>
    </p>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  name: "home",
  components: {Topnav}
}
</script>

<style lang="scss" scoped>


</style>
