export const buttonStore = {
  namespaced: true,
  state: {
    attrScrap: {},
    reviewLike: {},
  },

  mutations: {
    updateScrap: (state, payload) => {
      if (payload.value >= 1) {
        state.attrScrap[
          payload.content_id
        ] = `<i class="fa fa-bookmark fa-lg" aria-hidden="true"></i>BOOKMARK`;
      } else {
        state.attrScrap[
          payload.content_id
        ] = `<i class="fa fa-bookmark-o fa-lg" aria-hidden="true"></i>BOOKMARK`;
      }
    },

    updateLike: (state, payload) => {},
  },

  actions: {
    updateScrap: (context, payload) => {
      context.commit('updateScrap', payload);
    },

    updateLike: (context, payload) => {
      context.commit('updateLike', payload);
    },
  },
};
