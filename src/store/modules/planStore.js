// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

export const planStore = {
  namespaced: true,
  state: {
    plans: {},
  },

  mutations: {
    addPlans: (state, payload) => {
      const nowDate = payload.day;
      if (nowDate in state.plans) {
        let check = false;
        state.plans[nowDate].forEach((v) => {
          if (v.id == payload.id) {
            check = true;
          }
        });

        if (!check) {
          state.plans[nowDate].push({ title: payload.title, id: payload.id });
        }
      } else {
        state.plans[nowDate] = [{ title: payload.title, id: payload.id }];
      }
    },

    removePlans: (state, payload) => {
      const deleteId = payload.id;
      const nowDate = payload.day;
      state.plans[nowDate] = state.plans[nowDate].filter((ele) => ele.id != deleteId);
    },
  },

  actions: {
    addPlans: (context, payload) => {
      context.commit("addPlans", payload);
    },

    removePlans: (context, payload) => {
      context.commit("removePlans", payload);
    },
  },
};
