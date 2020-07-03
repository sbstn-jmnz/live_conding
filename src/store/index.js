import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'https://us-central1-livecoding-2800e.cloudfunctions.net/courses'


export default new Vuex.Store({
  state: {
    courses: []
  },
  mutations: {
    GET_COURSES(state, courses) {
      state.courses = courses
    }
  },
  actions: {
    getCourses({ commit }) {
      axios.get(`${baseUrl}/courses`)
        .then(response => {
          commit('GET_COURSES', response.data)
        })
    }
  },
  modules: {
  }
})
