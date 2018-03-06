
import * as actions from './actions'
import mutations from './mutations'
import getState from './states'

export default {
  namespaced: true,
  states: getState(),
  actions,
  mutations
}
