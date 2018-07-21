import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      navAbout: {}
    },

    mutations: {
      setNavAbout(state, info) {
        state.navAbout = info;
      }
    },

    actions: {
      loadAbout({ commit }, context) {
        return this.$storyapi
          .get(`cdn/stories/nav-about`, {
            version: context.version
          })
          .then(res => {
            commit("setNavAbout", res.data.story.content);
          });
      }
    }
  });
};

export default createStore;
