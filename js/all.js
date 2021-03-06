$(document).ready(function () {

  //------------------------------------- index ----------------------------------------------
  //頂導覽列
  $('.dropdown').click(function (e) {
    e.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  });

  //漢堡選單
  $('.hamburger_btn').click(function (e) {
    $('body').addClass('open')
  });

  $('.close_btn').click(function (e) {
    $('body').removeClass('open')
  });

  // 漢堡子層選單
  $('.menu_aside_index').click(function (e) {
    e.preventDefault();
    $(this).parent().find('ul').slideToggle();

  });


  //選單滑動效果 (點擊features / chef / map 做出滑動效果)
  $('.scrollTop').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    $('html, body').animate({ scrollTop: targetPos }, 1000);
  });

  //讀取出滾動的位置
  $(window).scroll(function (event) {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    // console.log(scrollPos);

    $('.scrollTop').each(function () {
      var target = $(this).attr('href'); //id
      var targetPos = $(target).offset().top; //位置
      var targetHeight = $(target).outerHeight(); //高度
      //console.log(target,targetPos,targetHeight);
      if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
        //console.log(target);
        $('.scrollTop').removeClass('active');
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');

      }
    });


    // animated
    $('.animated').each(function () {
      var thisPos = $(this).offset().top;
      if ((windowHeight + scrollPos) >= thisPos) {
        $(this).addClass('fadeIn');
      }
    });

  });

  //------------------------------------- cart ----------------------------------------------

  //左側選單
  $('.cart_sidebar_btn>a').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active').parent().siblings().find('a').removeClass('active');

  });

  //購物車愛心
   $('.like_btn').click(function(e){
     e.preventDefault();
     $(this).toggleClass('far fa-heart');
     $(this).toggleClass('fas fa-heart');
   });





});