import api from "../util/axios.js";
import { $, createElement } from "../util/elementTool.js";

export async function join() {
  const nickname = $("#nickname").value;
  const email = $("#email").value;
  const userPassword = $("#password").value;
  const phoneNumber = $("#phoneNumber").value;

  let joinparam = {
    nickname,
    email,
    userPassword,
    phoneNumber,
  };

  const searchUrl = "/users/join";
  const res = await api.post(searchUrl, joinparam);
  const data = await res.data;

  // console.log(data);
  console.log(res);
  if (res.status === 200) {
    alert("회원가입이 완료되었습니다");
    window.location.reload();
    // this.$router.push("/");
  }
}
