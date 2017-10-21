<template>
  <div>
    <p>Parent Area</p>
    <props-cmp :msg="msg" @msgFromChild="msgListener"></props-cmp>
    <button @click="changeMsg">Change Message From Parent</button>
    <h1>{{ msgFromChild }}</h1>
  </div>
</template>
<script>
import PropsCmp from '../components/PropsCmp'
export default {
  name: 'PropsView',
  data () {
    return {
      count: 0,
      msg: `Message From Parent`,
      msgFromChild: ''
    }
  },
  methods: {
    changeMsg () {
      this.msg = `Message From Parent ${this.count++}`
    },
    msgListener (data) {
      this.msgFromChild = data
    }
  },
  components: {
    PropsCmp
  }
}
</script>
<style scoped>
  p {
    text-align: left
  }
  div {
    background-color: cornflowerblue
  }
</style>


