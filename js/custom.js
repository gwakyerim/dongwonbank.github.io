$(function(){
  /* Slick Slider */
  $('.main-banner-slider').slick({
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });
  $('.sub-banner-slider').slick({
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  })
  /* nav-warp */
  $('.title-nav').mouseleave(function(){
    $('.dropdown-wrap').hide()
  })
  $('.title-nav > a').mouseover(function(){
    $('.dropdown-wrap').stop().slideUp(100)
    $(this).next().slideDown(300)
  })
  $('label[for=all-menu]').click(function(){
    $(this).toggleClass('active')
    $('.tab-wrap').toggleClass('active')
  })
})
