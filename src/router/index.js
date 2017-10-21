import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Data from '../views/Data'
import Method from '../views/Method'
import Computed from '../views/Computed'
import PropsView from '../views/PropsView'
import SlotView from '../views/SlotView'
import KeepAliveView from '../views/KeepAliveView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/data',
      name: 'Data',
      component: Data
    },
    {
      path: '/method',
      name: 'Method',
      component: Method
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/props',
      name: 'PropsView',
      component: PropsView
    },
    {
      path: '/slot',
      name: 'SlotView',
      component: SlotView
    },
    {
      path: '/keep-alive',
      name: 'KeepAliveView',
      component: KeepAliveView
    }
  ]
})
