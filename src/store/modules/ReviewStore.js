export const reviewStore = {
  namespaced: true,
  state: {
    nowReviewIdx: {},
    ReviewDetail: {},
    Reviews: {},
    planForReview: {},
  },

  mutations: {
    addReview: (state, payload) => {},

    removeReview: (state, payload) => {},
    nowReviewDetail: (state, payload) => {
      state.ReviewDetail = payload;
    },
    nowPlanForReview: (state, payload) => {
      state.planForReview = payload;
    },
  },

  actions: {
    addReview: (context, payload) => {
      context.commit("addReview", payload);
    },

    removeReview: (context, payload) => {
      context.commit("removeReview", payload);
    },

    nowReviewDetail: (context, payload) => {
      context.commit("nowReviewDetail", payload);
    },

    nowPlanForReview: (context, payload) => {
      context.commit("nowPlanForReview", payload);
    },
  },
};
