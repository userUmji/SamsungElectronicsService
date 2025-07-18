// origin은 기본 주소를 가져와줌
let baseURL = location.origin + '/SamsungElectronicsService';

// header 불러오기
fetch(`${baseURL}/common/header.html`)
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
    // -------------- header --------------
    // -------------- pc nav --------------
    let header = document.querySelector(".header");
    // 마우스 호버시 li뒤에 깔아줄 마크 바
    let markBar = document.querySelector(".mark-bar");
    // 서브메뉴
    let subMenus = document.querySelector(".sub-menus-wrap");
    // 메뉴 li리스트
    let menusList = document.querySelectorAll(".menu > li");
    // 서브메뉴 li리스트
    let subMenusList = document.querySelectorAll(".sub-menus > li");
    // 시작할 때 초기화
    markBarLocationChange(subMenusList[0]);
    menusList.forEach((menu, index) => {
      menu.addEventListener("mouseenter", () => {
        markBarLocationChange(subMenusList[index]);
        subMenus.classList.add("active");
      })
    })
    // 헤더에서 마우스 떼면 서브메뉴 off
    header.addEventListener("mouseleave", () => {
      subMenus.classList.remove("active");
    })
    // 메뉴에 마우스를 가져대 대면
    subMenusList.forEach((subMenu) => {
      subMenu.addEventListener("mouseenter", () => {
        markBarLocationChange(subMenu);
        subMenus.classList.add("active");
      })
    })
    // 마우스 떠났을때 헤더, 서브메뉴 둘 다 없으면 off
    document.addEventListener("mousemove", (e) => {
      const isInHeader = header.contains(e.target);
      const isInSubMenus = subMenus.contains(e.target);

      if (!isInHeader && !isInSubMenus) {
        subMenus.classList.remove("active");
      }
    });
    // 마크 바 위치 변경해주는 함수
    function markBarLocationChange(subMenu) {
      for (sm of subMenusList) {
        sm.classList.remove("active");
      }
      subMenu.classList.add("active");
      let subMenuLocation = subMenu.getBoundingClientRect();
      // 마크 바 위치 및 크기 변경
      markBar.style.left = `${subMenuLocation.left}px`;
      markBar.style.width = window.getComputedStyle(subMenu).width;
      markBar.style.height = window.getComputedStyle(subMenu).height;
    }

    // -------------- mobile nav --------------
    // 모바일 메뉴 햄버거 버튼
    let hamburgerBtn = document.querySelector(".hamburger-btn");
    // 모바일 메뉴 닫기 버튼
    let mobileCloseBtn = document.querySelector(".mobile-close-btn");
    // 모바일 메뉴 창
    let mobileNav = document.querySelector(".mobile-nav");
    // 햄버거 버튼 클릭시 모바일 메뉴 창 on
    hamburgerBtn.addEventListener("click", () => {
      mobileNav.classList.add("active");
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;

    })
    // 닫기 버튼 클릭시 모바일 메뉴 창 off
    mobileCloseBtn.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      document.body.style.height = `auto`;
      document.body.style.overflow = `inherit`;
    })

    // 모바일 아코디언 클릭했을때 그에 맞는 서브 메뉴 on, off
    let accordionNameList = document.querySelectorAll(".accordion-name");
    let accordionMenuList = document.querySelectorAll(".accordion-list >li");
    accordionNameList.forEach((accordionName, index) => {
      accordionName.addEventListener("click", () => {
        accordionMenuList[index].classList.toggle("active");
      })
    })
  });

// search-wrap 불러오기
fetch(`${baseURL}/common/search-wrap.html`)
  .then(res => res.text())
  .then(data => {
    document.getElementById('search-wrap').innerHTML = data;
    // -------------- search-wrap --------------
    // 검색창 on버튼
    let searchViewOpenBtn = document.querySelector(".search-view-open-btn");
    // 검색창
    let searchWrap = document.querySelector(".search-wrap");
    // 검색하기 버튼 클릭시 창 on
    searchViewOpenBtn.addEventListener("click", () => {
      searchWrap.classList.add("active");
    })
    // 닫기 버튼 클릭시 창 off
    document.querySelector(".search-close-btn").addEventListener("click", () => {
      searchWrap.classList.remove("active");
    })

  });

// footer 불러오기
fetch(`${baseURL}/common/footer.html`)
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
    // -------------- footer --------------
    // footer 삼성 관련 사이트 클릭시 창 on
    let footerSelect = document.querySelector("footer .form-select .select");
    document.querySelector("footer .form-select .select-toggle").addEventListener("click", () => {
      footerSelect.classList.toggle("active");
    })
    document.querySelector("footer .form-select .colse-select-btn").addEventListener("click", () => {
      footerSelect.classList.remove("active");
    })


    // -------------- footer --------------
    // 사이드 메뉴 열기 버튼
    let openFloatingBtn = document.querySelector(".open-floating-btn");
    // 사이드 메뉴를 감싸고 있는 부모
    appFloatingBtn = document.querySelector(".app-floating-btn");
    // 챗봇 아이콘
    let chatIcon = document.querySelector(".chaticon");
    // 숨겨진 버튼들
    floatingWarp = document.querySelector(".floating-warp");
    // 위로 올라가기 버튼
    let topBtn = document.querySelector(".top-btn");

    // 사이드 메뉴 on 버튼 클릭시
    openFloatingBtn.addEventListener("click", function () {
      this.querySelector("span").classList.toggle("active");
      floatingWarp.classList.toggle("active");
    })
    // 페이지가 로드되었을때 사이드 메뉴들 on
    window.addEventListener("DOMContentLoaded", () => {
      // 화면 크기가 1023보다 클때 실행
      if (window.innerWidth > 1023) {
        chatIcon.classList.add("active");
      }
      openFloatingBtn.querySelector("span").classList.add("active");
      floatingWarp.classList.add("active");
    })
    // 화면 클릭하면 메뉴 off
    window.addEventListener("click", () => {
      if (window.innerWidth > 1023) {
        chatIcon.classList.remove("active");
      }
    })
    // 페이지 스크롤 할때
    window.addEventListener("scroll", () => {
      // 사이드 메뉴가 켜져있으면 off
      if (floatingWarp.classList.contains("active")) {
        openFloatingBtn.querySelector("span").classList.remove("active");
        floatingWarp.classList.remove("active");
      }
      // top버튼 on
      if (window.scrollY > 800) {
        topBtn.classList.add("active");
      }
      else {
        topBtn.classList.remove("active");
      }
      // 화면 크기가 1023이상일때만 실행
      if (window.innerWidth > 1023) {
        if (window.scrollY >= 3097) {
          appFloatingBtn.classList.add("no-fixed");
          topBtn.classList.add("no-fixed");
        }
        else {
          appFloatingBtn.classList.remove("no-fixed");
          topBtn.classList.remove("no-fixed");
        }
      }
    })
  });
  
  // 로그인 또는 장바구니를 클릭했을때 값 할당
  function logoutCheck(check){
    window.localStorage.setItem("login-check", check)
  }