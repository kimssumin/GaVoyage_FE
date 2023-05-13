import axios from 'axios';
import { baseURL } from './url';

// axios 객체 생성
const instance = axios.create({
  baseURL: baseURL, //"http://70.12.50.218:8080",
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

//1. 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    // HTTP Authorization 요청 헤더에 jwt-token을 넣음
    // 서버측 미들웨어에서 이를 확인하고 검증한 후 해당 API에 요청함.
    // const token = store.getState().Auth.token;
    // try {
    //   if (token && jwtUtils.isAuth(token)) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }

    //   return config;
    // } catch (err) {
    //   console.error("[_axios.interceptors.request] config : " + err);
    // }
    return config;
  },
  (error) => {
    // 요청 에러 직전 호출
    return Promise.reject(error);
  }
);

// 2. 응답 인터셉터

instance.interceptors.response.use(
  (response) => {
    /*
        http status가 200인 경우
        응답 성공 직전 호출
        .then() 으로 이어짐
    */

    return response;
  },

  (error) => {
    /*
        http status가 200이 아닌 경우
        응답 에러 직전 호출
        .catch() 으로 이어짐
    */
    return Promise.reject(error);
  }
);

export default instance;
