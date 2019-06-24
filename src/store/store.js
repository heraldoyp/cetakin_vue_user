import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    printData: [],
    user: null
  },
  mutations: {
    setLoadedPrintData (state, payload) {
      state.loadedPrintData = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    loadPrintData ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('printData').once('value')
        .then((data) => {
          const printData = []
          const obj = data.val()
          for (let key in obj){
            printData.push({
              id: key, 
              filename: obj[key].filename,
              copies: obj[key].copies,
              pages: obj[key].pages,
              colorFormat: obj[key].colorFormat,
              paperSize: obj[key].paperSize,
              paperType: obj[key].paperType,
              scale: obj[key].scale
            })
          }
          commit('setLoadedPrintData', printData)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          } 
        )
    },
    createPrintData ({commit, getters}, payload) {
      const meetup = {
        filename: payload.filename,
        copies: payload.copies,
        pages: payload.pages,
        colorFormat: payload.colorFormat,
        paperSize: payload.paperSize,
        scale: payload.scale
      }
      firebase.database().ref('printData').push(meetup)
        .then((data) => {
          const key = data.key
          commit('createMeetup', {
            ...meetup,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
      // Reach out to firebase and store it
    },
  },
  getters: {
    loadedPrintData (state) {
      return getters.loadedPrintData.sort((printData) => {
        return printData
      })
    }
  }
})
