<template>
<div>
  导航栏 | <router-link to="/">TEST</router-link> | <router-link to="/xxx">TEST2</router-link>
  <hr>

  <router-view />
</div>
</template>

<script>

export default {
  name: 'App',

}
</script>
