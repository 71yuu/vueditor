
import Vue from 'vue'
import Vuex from 'vuex'
import app from '../components/app.vue'
import createModule from '../vuex/store'
import defaultConfig from './config'

function mixinConfig (opts) {
  let config = opts ? Object.assign({}, defaultConfig, opts) : defaultConfig;
  let lang = config.lang || 'cn';
  let storeModule = createModule(config);
  let data = {
    config,
    classList: config.classList,
    id: config.id
  };
  return Object.assign({}, app, {
    store: new Vuex.Store(storeModule),
    data: function (){
      return data;
    }
  });
}

const install = function (Vue, opts) {
  Vue.component('Vueditor', mixinConfig(opts));
};

const createEditor = function (el, opts) {
  let Editor = Vue.extend(mixinConfig(opts));
  return new Editor().$mount(el);
};

export default {
  install,
  createEditor
}