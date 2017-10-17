// Import namespaces
import * as types from '../types';

// Four objects related to 'counter' from 'store' object in 'store.js'
const state = {
  // 'state', 'getters', 'mutations', 'actions' are vuex key words
  counter: 0,
};

const getters = {
  // Perform calculation in central place instead of in 'Result1.vue' and 'Result2.vue'
  // doubleCounter: (state) => {
  //   return state.counter * 2;
  // },
  // stringCounter: (state) => {
  //   return state.counter + ' clicks';
  // },

  // Use ES6 notation to assign names from 'types.js' at runtime
  [types.DOUBLE_COUNTER]: (state) => {
    return state.counter * 2;
  },
  [types.STRING_COUNTER]: (state) => {
    return state.counter + ' clicks';
  },
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  },
};

const actions = {
  // increment: (context) => {
  //   context.commit('increment');
  // },

  // Same as above but in ES6 notation extracting only the 'commit' property
  increment: ({commit}, payload) => {
    commit('increment', payload);
  },
  decrement: ({commit}, payload) => {
    commit('decrement', payload);
  },
  asyncIncrement: ({commit}, payload) => {    // Async code with object argument
    setTimeout(() => {
      commit('increment', payload.by);
    }, payload.delay);
  },
  asyncDecrement: ({commit}, payload) => {    // Async code with object argument
    setTimeout(() => {
      commit('decrement', payload.by);
    }, payload.delay);
  },
};

// Export all objects in this file
export default {
  state,                // Same as 'state: state' in ES6 format
  getters,
  mutations,
  actions,
};
