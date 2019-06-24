import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import * as firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyA_nsHetVxhba9krkLJ_iou_gSzPwUqtVs",
  authDomain: "testquery-bc1e7.firebaseapp.com",
  databaseURL: "https://testquery-bc1e7.firebaseio.com",
  projectId: "testquery-bc1e7",
  storageBucket: "",
  messagingSenderId: "856982257998",
  appId: "1:856982257998:web:358d0747e3aead01"
};

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp(firebaseConfig)
  }
}).$mount('#app')
