//copy menu for mobile
function copyMenu() {
  //copy insdie .dpt-cat to .departments
  let dptCategory = document.querySelector(".dpt-cat");
  let dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  //COPY NAV INSIDE NAV
  const mainNav = document.querySelector(".header-nav nav");
  const navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  //copy .header-top .wrapper to .thetop-nav
  const topNav = document.querySelector(".header-top .wrapper");
  const topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

const menuButton = document.querySelector(".trigger");
const closeButton = document.querySelector(".t-close");
const addclass = document.querySelector(".site");

menuButton.addEventListener('click', () => {
  addclass.classList.toggle('showmenu')
});
closeButton.addEventListener('click', () => {
  addclass.classList.remove('showmenu')
});
//show side-menubar on mobile

const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );
  if (this.closest(".has-child").classList != "expand");
  this.closest(".has-child").classList.toggle("expand");
}

//Slider

const swiper = new Swiper('.swiper', {

  loop: true,

  pagination: {
    el: '.swiper-pagination',
  }
});


const searchButton = document.querySelector(".t-search"),
      tClose = document.querySelector(".search-close"),
      showClass = document.querySelector('.site');

searchButton.addEventListener('click', () => {
  showClass.classList.toggle('showsearch');
})

tClose.addEventListener("click", () => {
  showClass.classList.remove("showsearch");
})

//show dpt menu
const dptButton = document.querrySelector('.dpt-cat .dpt-trigger'),
 dptClass = document.querrySelector('.site');
     dptButtton.addEventListner('click',function(){
  dptClass.classList.toggle('showdpt')
 })

 //product image slider

 var productThumb = new Swiper('.small-image',{
  loop: true,
  spaceBetween:10,
  slidesPerView:3,
  freeMode:true,
  watchSlidesProgress: true,
  breakpoints: {
    481:{
      spaceBetween: 32,
    }
  }
 });
 var productBig = new Swiper('.big-image',{
  loop: true,
  autoHeight: true,
  navigation:{
    nexEl: '.Swiper-button-next',
    preEl: '.Swiper-button-prev',
  },
thumbs: {
  swiper: productThumb
}

 })