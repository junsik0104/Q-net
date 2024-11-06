document.addEventListener(`DOMContentLoaded`,function(){

  // hamburgur button
    const subMenuBtn = document.querySelector(`.hambur`);
    const mSubMenu = document.querySelector(`.m_sub_menu`);

    subMenuBtn.addEventListener(`click`, function(){
        mSubMenu.classList.toggle(`on`);
        subMenuBtn.classList.toggle(`active`);

        const menuHas = this.classList.contains(`active`);

        if(menuHas == true){
        subMenu.classList.add(`on`);
        } else{
        subMenu.classList.remove(`on`);

        }
    });
    
    // submenu
    const subMenus = document.querySelectorAll(`.sub_menu`);
    const infoSubMenus = document.querySelectorAll(`.info_sub_menu`);
  
    // 모든 info_sub_menu의 초기 높이를 0으로 설정 (모두 닫힘 상태)
    for (const infoSubMenu of infoSubMenus) {
      infoSubMenu.style.maxHeight = 0;
    }

    for (const subMenu of subMenus) {
      subMenu.addEventListener(`click`, function() {

        // 현재 클릭한 sub_menu와 연결된 info_sub_menu 찾기
        const relatedInfoSubMenu = this.nextElementSibling;

        // 다른 모든 info_sub_menu 닫기 (단, 현재 클릭한 것은 제외)
        for (const infoSubMenu of infoSubMenus) {
          if (infoSubMenu !== relatedInfoSubMenu) {
            infoSubMenu.style.maxHeight = 0; // 다른 서브메뉴는 닫기
          }
        }

        // 현재 클릭한 sub_menu에 연결된 info_sub_menu 열기/닫기
        const currentHeight = relatedInfoSubMenu.style.maxHeight;

        if (currentHeight === `${0}px` || currentHeight === "") {
          // 열려 있지 않은 경우
          relatedInfoSubMenu.style.maxHeight = `${relatedInfoSubMenu.scrollHeight}px`;
        } else {
          // 열려 있는 경우
          relatedInfoSubMenu.style.maxHeight = 0;
        }
      });
    }

  // tab menu
  const tabBtns = document.querySelectorAll(`.m_sub_menu .cate .menu`);

  for(const tabBtn of tabBtns){
    tabBtn.addEventListener(`click`,function(){
      this.classList.add(`on`);

      for(const removeBtn of tabBtns){
        if(removeBtn != this){
            removeBtn.classList.remove(`on`);
        }
      }

      const tab = this.getAttribute(`data-tab`);
      const tabBox = document.querySelectorAll(`.info .tabmenu`);

      for(const tabContent of tabBox){
        tabContent.classList.remove(`on`);
      }

      const changeTab = document.querySelector(`#${tab}`);
      changeTab.classList.add(`on`);
    });
  }


  const navTabs = document.querySelectorAll(`.nav_bar .container .b_menu .menu`);

  for(const navTab of navTabs){
    navTab.addEventListener(`click`,function(){
      this.classList.add(`on`);

      for(const removeBtn of navTabs){
        if(removeBtn != this){
            removeBtn.classList.remove(`on`);
        }
      }

      const tab = this.getAttribute(`data-alt`);
      const tabBox = document.querySelectorAll(`.tabbox .nav-tab`);

      for(const tabContent of tabBox){
        tabContent.classList.remove(`on`);
      }

      const changeTab = document.querySelector(`#${tab}`);
      changeTab.classList.add(`on`);
    });
  }

});
