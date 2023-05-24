export const buttonStore = {
  namespaced: true,
  state: {
    attrScrap: {},
    reviewLike: {},
  },

  mutations: {
    updateScrap: (state, payload) => {
      if (payload.value >= 1) {
        state.attrScrap = { ...state.attrScrap };
        state.attrScrap[
          payload.content_id
        ] = `<i class="fa fa-bookmark fa-lg" aria-hidden="true"></i>BOOKMARK`;
      } else {
        state.attrScrap = { ...state.attrScrap };
        state.attrScrap[
          payload.content_id
        ] = `<i class="fa fa-bookmark-o fa-lg" aria-hidden="true"></i>BOOKMARK`;
      }
    },

    updateLike: (state, payload) => {
      console.log("updatelike > ", payload);
      if (payload.islike == 1) {
        state.reviewLike = { ...state.reviewLike };
        const { id } = payload;
        state.reviewLike = {
          ...state.reviewLike,
          [id]: `<i class="fa fa-heart fa-2x" aria-hidden="true"></i>`,
        };
        state.reviewLike[payload.id] = `<i class="fa fa-heart fa-2x" aria-hidden="true"></i>`;
      } else {
        state.reviewLike = { ...state.reviewLike };
        state.reviewLike[payload.id] = `<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>`;
      }
    },
  },

  actions: {
    updateScrap: (context, payload) => {
      context.commit("updateScrap", payload);
    },

    updateLike: (context, payload) => {
      context.commit("updateLike", payload);
    },
  },
};
