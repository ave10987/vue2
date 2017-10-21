<template>
  <h1>{{ msg }}</h1>
</template>
<script>
export default {
  name: 'Data',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    setTimeout(() => {
      this.msg = 'Data Changed'
    }, 3000)
  }
}
</script>

