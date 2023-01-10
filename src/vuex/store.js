// import { createApp } from 'vue'
import { createStore } from "vuex";
import axios from "axios";


const store = createStore({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCT_TO_STATE: (state, products) => {
      state.products = products;
    }
  },
  actions: {

    GET_PRODUCTS_FROM_API({ commit }) {
      axios
      .get("https://hello-green.ru/api/1/getFullNomenclature/")
      .then((response) => {
        commit("SET_PRODUCT_TO_STATE", response.data);
      })
      .catch((err) => console.error(err));       

    }
  },
  getters: {
    GET_PRODUCTS(state) {
      return state.products
    }
  }
});

export default store;
