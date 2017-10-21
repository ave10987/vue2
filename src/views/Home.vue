<template>
  <ul>
    <li v-for="route in $router.options.routes">
      <router-link :to="{path: route.path}">{{ route.name }}</router-link>
    </li>    
  </ul>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style scoped>
  li {
    list-style-type: none;
  }
</style>

