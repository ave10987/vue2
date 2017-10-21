<template>
  <div>
    <h1 @click="clickHandler">Click Me</h1>
    <h1 @click="arrowHandler">arrow함수를 사용하면 안됨</h1>
  </div>
</template>
<script>
export default {
  name: 'Method',
  methods: {
    clickHandler () {
      console.log('CLICK', this)
    },
    arrowHandler: () => {
      console.log('use arrow function: ', this)
    }
  }
}
</script>

