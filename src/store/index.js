import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 작성한 모듈을 가져옵니다.
import { buttonStore } from './modules/ButtonStore';
import { reviewStore } from './modules/ReviewStore';
import { planStore } from './modules/planStore';

const store = new Vuex.Store({
  modules: {
    // 키: 값 형태로 저장됩니다.
    planStore: planStore,
    reviewStore: reviewStore,
    buttonStore: buttonStore,
  },
});

export default store;
