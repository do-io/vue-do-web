import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("token")
  },
  mutations: {
    ["login_success"](state) {
      state.isLoggedIn = true;
    },
    ["logout"](state) {
      state.isLoggedIn = false;
    }
  },
  actions: {
    login({ commit }) {
      commit("login_success");
    },
    logout({ commit }) {
      localStorage.removeItem("token");
      commit("logout");
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn;
    }
  }
});
