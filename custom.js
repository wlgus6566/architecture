$(function () {
  // Triger
  $('.trigger').click(function () {
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  });
  $('section, .menu > a').click(function () {
    $('.trigger').removeClass('active');
    $('.gnb').removeClass('active');
  });

  // Smooth Scrolling
  $('.menu > a, .gototop').click(function (e) {
    $.scrollTo(this.hash || 0, 900);
  });

  // 조금이라도 스크롤 되면 header 배경이 바뀜
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('active');
    } else {
      $('header, .gototop').removeClass('active');
    }
  });

  // slick js - history
  $('.history-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // slick js - project photo
  $('.project-photo').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  });
});
