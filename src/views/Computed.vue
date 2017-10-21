<template>
  <div>
    <h1>{{ computedMsg }}</h1>
    <h1>{{ computedMsgWithData }}</h1>
  </div>
</template>
<script>
export default {
  name: 'Computed',
  data () {
    return {
      time: ''
    }
  },
  computed: {
    computedMsg () {
      return this.getTime()
    },
    computedMsgWithData () {
      this.time = this.getTime()
      return this.time
    }
  },
  methods: {
    getTime () {
      const date = new Date()
      const HHMMSS = date.getHours() + '시 ' + date.getMinutes() + '분 ' + date.getSeconds() + '초'
      return HHMMSS
    }
  },
  mounted () {
    setInterval(() => {
      this.time = this.getTime()
    }, 1000)
  }
}
</script>

