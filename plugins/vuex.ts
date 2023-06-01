import { createStore } from "vuex";

const store = createStore({
  state:{
    Link: 'https://api.openweathermap.org/data/2.5/weather?q=',
    Key: '&appid=e532814def755ad586ad6407ebf29650',
    City: 'Donetsk'
  },

  mutations:{
    mutAddCityName(state, newCityName){
      state.City = newCityName;
    },
  },

  actions:{
    actAddCityName({ commit }, newCityName){
      commit('mutAddCityName', newCityName);
    },
  },

  getters:{
    getWetherLink(state){
        return `${state.Link}${state.City}${state.Key}`;
    },
  }
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin

});