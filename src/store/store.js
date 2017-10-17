import Vue from 'vue';
import Vuex from 'vuex';

// Import a module to combine into a single store
import counter from './modules/counter';
// Import objects from 'getters', 'mutations', and 'actions' from separate files
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

// Since all files get merged into one, must ensure no duplicate names...
// ...otherwise use namespaces
export const store = new Vuex.Store({
  state: {
    value: 0,
  },
  getters,
  mutations,
  actions,
  modules: {
    counter,
  },
});
