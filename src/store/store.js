import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // 'state', 'getters', 'mutations', 'actions' are vuex reserved words
  state: {
    counter: 0,
  },
  getters: {
    // Perform calculation in central place instead of in 'Result1.vue' and 'Result2.vue'
    doubleCounter: (state) => {
      return state.counter * 2;
    },
    stringCounter: (state) => {
      return state.counter + ' clicks';
    },
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: (state, payload) => {
      state.counter -= payload;
    },
  },
  actions: {
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
  },
});
