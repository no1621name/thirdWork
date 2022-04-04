import Vue from 'vue';
import Vuex from 'vuex';
import calculator from './modules/calculator';
import modalWindowStore from './modules/modalWindow';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    calculator,
    modalWindowStore,
  },
});
