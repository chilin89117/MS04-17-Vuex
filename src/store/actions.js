// Action from 'store.js' was separated out, so needs to be imported back
export const updateValue = ({commit}, payload) => {
  commit('updateValue', payload);
};
