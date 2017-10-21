<template>
  <div>
    <p>Component Area</p>
    <h1>{{ msg }}</h1>
    <button @click="trigger">Send Event to Parent</button>
  </div>
</template>
<script>
export default {
  name: 'PropsCmp',
  props: {
    msg: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      count: 0,
      msgFromChild: 'message From Child'
    }
  },
  methods: {
    trigger () {
      this.$emit('msgFromChild', this.msgFromChild + this.count++)
    }
  }
}
</script>
<style scoped>
  p {
    text-align: left
  }
  div {
    background-color:lightskyblue
  }
</style>

