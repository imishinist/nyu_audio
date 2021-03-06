import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import connector from './modules/connector'
import nodes from './modules/nodes'
import audiocontext from './modules/audiocontext'
import selector from './modules/selector'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    connector,
    nodes,
    audiocontext,
    selector
  }
})
