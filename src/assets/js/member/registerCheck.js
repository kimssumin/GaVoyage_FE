import { $ } from "../util/elementTool";
import api from "../util/axios.js";

export function passwordCheck() {
  if ($("#password").value.length == 0) {
    $("#message").style.color = "red";
    $("#message").innerHTML = `비밀번호를 먼저 입력해주세요`;
    $("#confirm_password").value = "";
  } else {
    if ($("#password").value == $("#confirm_password").value) {
      $("#message").style.color = "green";
      $("#message").innerHTML = `<i class="far fa-check-circle me-1"></i>비밀번호가 일치합니다`;
      $("#message").querySelector(".far").style.color = "green";
    } else {
      $("#message").style.color = "red";
      $("#message").innerHTML = `비밀번호가 일치하지 않습니다`;
    }
  }
}

export function resetForm() {
  $("#register").reset();
}

export function regist() {
  // 문서에서 id 로 input data 가져오기
  let name = $("#name").value;
  let id = $("#id").value;
  let password = $("#password").value;
  let passwordcheck = $("#passwordcheck").value;
  let emailid = $("#emailid").value;
  let domain = $("#domain").value;

  // 입력값 검증
  if (
    name === "" ||
    id === "" ||
    password === "" ||
    passwordcheck === "" ||
    emailid === "" ||
    domain === ""
  ) {
    alert("빈칸이 없도록 입력해주세요.");
    return false;
    // 비밀번호 확인
  } else if (password !== passwordcheck) {
    alert("비밀번호를 확인해주세요.");
    return false;
  }
  alert("회원가입이 완료되었습니다.");
  return true;
}

export function emailCheck() {
  if ($("#email").value.includes("@")) {
    emailDuplicateCheck($("#email").value).then((data) => {
      if (data == true) {
        $("#message-email").style.color = "green";
        $(
          "#message-email"
        ).innerHTML = `<i class="far fa-check-circle me-1"></i>이메일 중복검사가 완료되었습니다`;
        $("#message-email").querySelector(".far").style.color = "green";
      } else {
        $("#message-email").style.color = "red";
        $("#message-email").innerHTML = `중복된 이메일 주소가 존재합니다`;
      }
    });
  } else {
    $("#message-email").style.color = "red";
    $("#message-email").innerHTML = `이메일 형식을 확인해주세요`;
  }
}

export function nicknameCheck() {
  nicknameDuplicateCheck($("#nickname").value).then((data) => {
    if (data == true) {
      $("#message-nickname").style.color = "green";
      $(
        "#message-nickname"
      ).innerHTML = `<i class="far fa-check-circle me-1"></i>사용가능한 닉네임입니다`;
      $("#message-nickname").querySelector(".far").style.color = "green";
    } else {
      $("#message-nickname").style.color = "red";
      $("#message-nickname").innerHTML = `중복된 닉네임이 존재합니다`;
    }
  });
}

async function emailDuplicateCheck(value) {
  console.log(value);
  let emailUrl = `/users/emailCheck/${value}`;
  const res = await api(emailUrl);
  const data = await res.data;
  if (data == "1") {
    console.log(data);
    return false;
  }
  return true;
}

async function nicknameDuplicateCheck(value) {
  console.log(value);
  let nicknameUrl = `/users/nicknameCheck/${value}`;
  const res = await api(nicknameUrl);
  const data = await res.data;
  if (data == "1") {
    console.log(data);
    return false;
  }
  return true;
}
