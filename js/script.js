document.addEventListener(`DOMContentLoaded`,function(){
  const gnbBtn = document.querySelector(`.gnb`);
  const subMenu = document.querySelector(`.submenu`);
  const headerArea = document.querySelector(`.header_area`);

  subMenu.style.maxHeight = 0;


  gnbBtn.addEventListener(`mouseenter`,function(){

      const curruntHeight = subMenu.style.maxHeight;

      if (curruntHeight === `${0}px`){
          subMenu.style.maxHeight = `${subMenu.scrollHeight}px`
      }else{
          // subMenu.style.maxHeight = 0;
      }
      // gnbBtn.addEventListener(`mouseleave`, function(){
      //   subMenu.style.maxHeight = 0;
      // });
  });

  headerArea.addEventListener(`mouseenter`,function(){
    subMenu.style.maxHeight = 0;
  });

  subMenu.addEventListener(`mouseleave`,function(){
    subMenu.style.maxHeight = 0;
  });



  // topBtn
  const topBtn = document.querySelector(`.quick_menubar .topbtn`);

  topBtn.addEventListener(`click`,function(){
      window.scrollTo({
          top:0,
          behavior: `smooth`
      });
  });

  // tabMenu
  const tabBtns = document.querySelectorAll(`.bbs_list .bbs_cate .cate`);

  for(const tabBtn of tabBtns){
    tabBtn.addEventListener(`click`,function(){
      this.classList.add(`on`);

      for(removeBtn of tabBtns){
        if(removeBtn != this){
            removeBtn.classList.remove(`on`);
        }
      }

      const tab = this.getAttribute(`data-tab`);
      const tabBox = document.querySelectorAll(`.bbs_list .items`);

      for(const tabContent of tabBox){
        tabContent.classList.remove(`on`);
      }

      const changeTeb = document.querySelector(`#${tab}`);
      changeTeb.classList.add(`on`);
    });
  }
});