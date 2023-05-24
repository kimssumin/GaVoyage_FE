import axios from "axios";
import VueCookies from "vue-cookies";
import { baseURL } from "./url";

// axios 객체 생성
const instance = axios.create({
  baseURL: baseURL, //"http://70.12.50.218:8080",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});
//1. 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    // HTTP Authorization 요청 헤더에 jwt-token을 넣음
    // 서버측 미들웨어에서 이를 확인하고 검증한 후 해당 API에 요청함.
    // console.log(VueCookies.get("accesstoken"));
    // const token = VueCookies.get("accesstoken").token;
    // config.headers.Authorization = `${token}`;
    // return config;
    if (VueCookies.get("accesstoken") !== null) {
      const token = VueCookies.get("accesstoken").token;
      config.headers.Authorization = `Bearer ${token}`; //`${token}`;
      // console.log(config);
      return config;
    } else {
      return config;
    }
  },
  (error) => {
    // 요청 에러 직전 호출
    console.log(error);
    return Promise.reject(error);
  }
);

// 2. 응답 인터셉터

instance.interceptors.response.use(
  async (response) => {
    /*
        http status가 200인 경우
        응답 성공 직전 호출
        .then() 으로 이어짐
    */
    const { config } = response;
    const originalRequest = config;

    if (response?.data?.status == 5000) {
      //서버에서 정한 오류코드(토큰만료에 대한)
      const refresh_token = VueCookies.get("refreshtoken");
      originalRequest.headers["authorization-refresh"] = `Bearer ${refresh_token}`;
      return axios(originalRequest)
        .then(async (res) => {
          if (res.status === 200) {
            console.log("response > ", res);
            let token = res.headers["authorization"].split(" ")[1];
            let reftoken = res.headers["authorization-refresh"].split(" ")[1];
            let nickname = VueCookies.get("accesstoken").nickname;
            let email = VueCookies.get("accesstoken").email;
            const data = {};

            data["nickname"] = nickname;
            data["email"] = email;
            data["token"] = token;

            VueCookies.set("accesstoken", data, "1d");
            VueCookies.set("refreshtoken", reftoken, "1d");
            originalRequest.headers["authorization"] = `Bearer ${token}`;
            // return axios(originalRequest);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

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
