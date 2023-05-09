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
