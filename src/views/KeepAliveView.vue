<template>
  <div>
    <button @click="selectedView = 'PropsView'">Go Props Example</button>
    <button @click="selectedView = 'Computed'">Go Computed Example</button>
    <section>
      <p>Keep Alive Section</p>
      <keep-alive>
        <component :is="selectedView"></component>
      </keep-alive>
    </section>
    <br />
    <br />
    <hr>
    <br />
    <br />
    <section>
      <p>normal Section</p>
      <component :is="selectedView"></component>
    </section>
  </div>
</template>
<script>
import PropsView from '../views/PropsView'
import Computed from '../views/Computed'
export default {
  name: 'KeepAliveView',
  data () {
    return {
      selectedView: 'PropsView'
    }
  },
  components: {
    PropsView,
    Computed
  }
}
</script>
<style scoped>
  p {
    text-align: left;
  }
</style>

