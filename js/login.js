let loginHide = document.querySelector(".member-login .member-login-list .hide");
// html이 로딩되었을때
document.addEventListener("DOMContentLoaded",()=>{
  let check = window.localStorage.getItem("login-check");
  // 로그인 버튼이면 on 장바구니였으면 숨김
  if(check == "true"){
    loginHide.classList.remove("hide-div");
  }
})

function showSectionFromLink(params){
  console.log(params);
  localStorage.setItem("form-id", params);
  window.location.href = "../pages/account.html";
}