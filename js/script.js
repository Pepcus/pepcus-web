$(function() {
  console.log( "ready!" );

  $(window).scroll(function() {
    if ($(this).scrollTop() > 90) {
      $('.header').addClass("header-small")
    } else {
      $('.header').removeClass("header-small")
    }
  });

  $(".navigationList-item").hover(function(){
    $(this).addClass("navigationList-item--dropdown--show");
  }, function(){
    $(this).removeClass("navigationList-item--dropdown--show");
  });

  $('.smallMenu-icon').click(function() {
    $(this).toggleClass('smallMenu-icon--active');
    $('.mobile-menu-background').toggleClass('active');
    $('.mfp-bg').toggleClass('active');
    $('body').toggleClass('no-scroll');
  });


  $('.mobileNavigationList-item').click(function() {
    $(this).toggleClass("active");
  });


  $(".mobileNavigationList-item").click(function(){
    console.log('yteshkj')
    $(this).children('div.mobileNavigation__wrapper').addClass("active");
  }, function(){
    $(this).children('div.mobileNavigation__wrapper').removeClass("active");
  });

});
