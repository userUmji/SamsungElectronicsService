// -------------- main-visual --------------
let mainPlayBtn = document.querySelector(".main-visual .play-btn");
let mainPauseBtn = document.querySelector(".main-visual .pause-btn");
var mainSwiper = new Swiper(".main-visual-swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 8000,
  },
});
// 재생버튼 눌렀으면 메인 스와이퍼 다시 재생
mainPlayBtn.addEventListener("click",()=>{
  mainPlayBtn.classList.remove("active");
  mainPauseBtn.classList.add("active");
  mainSwiper.autoplay.start();
})
// 일시정지버튼 눌렀으면 메인 스와이퍼 정지
mainPauseBtn.addEventListener("click",()=>{
  mainPauseBtn.classList.remove("active");
  mainPlayBtn.classList.add("active");
  mainSwiper.autoplay.stop();
})

// -------------- main-service-tip --------------
let servicePlayBtn = document.querySelector(".main-service-tip .play-btn");
let servicePauseBtn = document.querySelector(".main-service-tip .pause-btn");
let mainServiceTip = document.querySelector('.main-service-tip');
var serviceSwiper = new Swiper(".service-tip-swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: mainServiceTip.querySelector(".swiper-button-next"),
    prevEl: mainServiceTip.querySelector(".swiper-button-prev"),
  },
  autoplay: {
    delay: 8000,
  },
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 24,

  // 화면 크기에 따라 설정 변경
  breakpoints: {
    1391: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});
// 재생버튼 눌렀으면 서비스 스와이퍼 다시 재생
servicePlayBtn.addEventListener("click",()=>{
  servicePlayBtn.classList.remove("active");
  servicePauseBtn.classList.add("active");
  serviceSwiper.autoplay.start();
})
// 일시정지버튼 눌렀으면 서비스 스와이퍼 정지
servicePauseBtn.addEventListener("click",()=>{
  servicePauseBtn.classList.remove("active");
  servicePlayBtn.classList.add("active");
  serviceSwiper.autoplay.stop();
})