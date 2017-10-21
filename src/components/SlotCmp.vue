<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'SlotCmp'
}
</script>
<style scoped>
  header {
    background-color:antiquewhite
  }
  main {
    background-color:darkgray
  }
  footer {
    background-color:thistle
  }
</style>

