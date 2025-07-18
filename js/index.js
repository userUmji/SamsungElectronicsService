// -------------- select-product --------------
// 궁금하신 제품을 선택하세요 마지막 아이콘 클릭시
// + 모양으로 가려진게 원래대로 표시
document.querySelector(".select-product .product-warp").lastElementChild.addEventListener("click",function(){
  this.classList.add("active");
});