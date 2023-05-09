import { $ } from "../util/elementTool";

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
  alert("회원가입 성공!");
  return true;
}
