// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueresource from 'vue-resource'
import $ from 'jquery'

Vue.use(vueresource);

Vue.config.productionTip = false



Vue.filter("selectxt",function(value){
  if(value==undefined)
    return;
  if(value.length>20){
    return value.substr(0,20)+"...";
  }
  else{
    return value;
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
