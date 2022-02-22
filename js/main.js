var myFullpage = new fullpage('#fullpage', {
    menu: '.gnb_list',
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
    sectionsColor: ['#000', '#FFE33A', '#ff6c00','#ffffff','#FFE33A'],
    autoScrolling: true,  //스크롤 바를 스크롤 하면 한 페이지씩 넘어감(기본설정)
    responsiveHeight:350,  //세로 높이가 350px보다 작아졌을때는 오토스크롤링 작동X
    scrollBar:true, 
    // navigation:true  //오른쪽 페이지 버튼
    //오토스크롤이 아니라 정상 스크롤이 적용
});

// document.querySelector('.scroll_guide').addEventListener('click',function(){
//     fullpage_api.moveSectionDown();
// });

document.querySelector('.nextS').addEventListener('click',function(e){
    e.preventDefault();
    fullpage_api.moveSectionDown();
});
document.querySelector('.prevS').addEventListener('click',function(e){
    e.preventDefault();
    fullpage_api.moveSectionUp();
});



$('.totalMitem').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    } else {
        $('.totalMitem').removeClass('active');
        $(this).addClass('active');
    }
});

$('.btn_total').click(function(){
    console.log('햄버거버튼 클릭!!')
    $('.total_menuZ').addClass('active')
});

$('.btn_totalClose').click(function(){
    $('.total_menuZ').removeClass('active')
});




// var myScroll = new IScroll('.total_menu');
myScroll = new IScroll('.total_menu', {
    mouseWheel: true,
    scrollbars: true
});


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



new WOW().init();