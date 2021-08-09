// часики
function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      
        document.getElementById("header-time").innerHTML = hours + ":" + minutes;
        setTimeout("clock()", 1000);
   }
clock();

// календарь

let currentDate = new Date();
const month = currentDate.toLocaleString('default', { month: 'long' });

currentDate.setDate(currentDate.getDate());
var dd = currentDate.getDate(); 
var mm = currentDate.getMonth() + 1; 
var yyyy = currentDate.getFullYear(); 

if(dd<10) {
  dd = '0'+ dd 
}

if(mm<10) {
  mm = '0'+ mm 
};
currentDate = dd + ' ' + month + ' ' + yyyy;
let calendar=document.querySelector(".header-calendar");
calendar.prepend(currentDate);

//слайдер

let mySlider = new Swiper('.main-slider-container', {
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    simulateTouch: true,
    touchRaion: 1,
    touchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
      speed: 1400,
  });
//при наведении на слайдер остановка автопрокрутки (p.s. так симпотичней)  
  let sliderBlock = document.querySelector('.main-slider-container');
  sliderBlock.addEventListener('mouseenter', function (e) {
      mySlider.autoplay.stop();
  });
  sliderBlock.addEventListener('mouseleave', function (e) {
    mySlider.params.autoplay.disableOnInteraction = false;
    mySlider.params.autoplay.delay = 5000;
    mySlider.autoplay.start();
  });

  // переход по структуре без перезагрузки
  //блоки
  let block1 = document.querySelector('.content');
  let block2=document.querySelector('.content2');
  let block3=document.querySelector('.content3');
  //кнопки
  let adminProced=document.querySelector('.content-group-block1');
  let pageOne=document.querySelector('.content-group-block1-1');
  let btnBack=document.getElementById('content2__back');
  let btnBackBlock3=document.querySelector('.content3-group__back');
  let btnHome=document.querySelector('.content3-group__home')
  
  adminProced.onclick=function(){
    block2.style.display='flex';
    block1.style.display='none';
  }
  btnBack.onclick=function(){
    block2.style.display='none';
    block1.style.display='flex';
  }
  pageOne.onclick=function(){
    block3.style.display='flex';
    block2.style.display='none';
  }
  btnBackBlock3.onclick=function(){
    block3.style.display='none';
    block2.style.display='flex';
  }
  btnHome.onclick=function(){
    block3.style.display='none';
    block1.style.display='flex';
  }




  
