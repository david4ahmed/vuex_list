// Entry point to vuex where all of the modules are combined
import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    todos
  }
});

// For this file to do anything you need to bring it to the main.js