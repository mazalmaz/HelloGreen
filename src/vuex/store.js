// import { createApp } from 'vue'
import { createStore } from "vuex";
import axios from "axios";


const store = createStore({
  state: {
    products: [],
    restaurants: [],
    actions: [],
    company: [],
    FirstlatLng: []
  },
  mutations: {
    SET_PRODUCT_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_RESTAURANTS_TO_STATE: (state, restaurants) => {
      state.restaurants = restaurants;
    },
    SET_ACTIONS_TO_STATE: (state, actions) => {
      // state.actions = actions;
      state.actions.push(actions)
    },
    SET_COMPANY_TO_STATE: (state, data) => {
      state.company = data
    },
    SET_LATLNG_STATE: (state, data) => {
      state.FirstlatLng = data
    },

  },
  actions: {

    GET_PRODUCTS_FROM_API({ commit }) {
      axios
        .get("https://hello-green.ru/api/1/getFullNomenclature/")
        .then((response) => {
          commit("SET_PRODUCT_TO_STATE", response.data);
        })
        .catch((err) => console.error(err));

    },
    GET_RESTAURANTS_LIST_FROM_API({ commit }) {

      axios
        .get("https://hello-green.ru/api/1/restaurants/getRestaurantsByCity/")
        .then((response) => {
          let arrRestaurant = response.data.restaurantsList;
          let coords = arrRestaurant[0].coords;
          commit("SET_RESTAURANTS_TO_STATE", arrRestaurant);
          commit("SET_LATLNG_STATE", [coords.latitude, coords.longitude]);

          // for (let i = 0; i < arrRestaurant.length; i++) {
          //   commit("SET_LATLNG_STATE", [arrRestaurant[i].coords.longitude, arrRestaurant[i].coords.latitude]);
          // }

        })
        .catch((err) => console.error(err));
    },



    GET_COMPANY_FROM_API({ commit }) {

      axios
        .get("https://hello-green.ru/api/1/aboutHelloGreen/")
        .then((response) => {
          console.log(response.data);
          commit("SET_COMPANY_TO_STATE", response.data);
        })
        .catch((err) => console.error(err));

    },
    GET_ACTIONS_LIST_FROM_API({ commit }) {
      axios
        .get("https://hello-green.ru/api/1/getGlobalActionsList/")
        .then((response) => {
          let data = response.data.actions;
          for (let i = 0; i < data.length; i++) {
            let id = data[i].actionId;
            axios
              .post("https://hello-green.ru/api/1/getActionDetailsById/", {
                params: {
                  actionId: id
                }
              })
              .then((res) => {
                commit("SET_ACTIONS_TO_STATE", res);
              })
              .catch((error) => console.error(error));
          }
        })
        .catch((err) => console.error(err));
    },
  },
  getters: {
    GET_PRODUCTS(state) {
      return state.products
    },
    GET_RESTAURANTS(state) {
      return state.restaurants
    },
    GET_FIRST_LATLNG(state) {
      return state.FirstlatLng
    },
    GET_WORK_RESTAURANTS(state) {

   

      return state.restaurants.filter(item => {
        return item.workingHoursNow.delivery.status == "Open" || item.workingHoursNow.pickup.status == "Open" || item.workingHoursNow.inside.status == "Open"
      });
    }

  }
});

export default store;
