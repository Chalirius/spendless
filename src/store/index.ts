import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '../firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },

  mutations: vuexfireMutations,

  actions: {
    bindUsers: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('users', db.collection('users'))
    }),
    unbindUsers: firestoreAction(({ unbindFirestoreRef }) => {
      unbindFirestoreRef('users')
    })
  },
  getters: {
    users: state => {
      return state.users
    }
  }
})
