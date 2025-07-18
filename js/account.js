window.addEventListener("DOMContentLoaded", () => {
  let formId = localStorage.getItem("form-id");
  if (formId != null) {
    // 로그인 페이지에서 가져온 값에 따라 맞는 form을 켜준다
    console.log(formId);
    switch (formId) {
      // 로그인
      case "login":
        document.getElementById("samsung-login").classList.add("active");
        break;
      // ID 찾기
      case "find-id":
        document.getElementById("find-id").classList.add("active");
        break;
      // 비밀번호 찾기
      case "find-passward":
        document.getElementById("find-passward").classList.add("active");
        break;
      // 계정 가입
      case "sign-up":
        document.getElementById("sign-up").classList.add("active");
        break;
    }
  }
})