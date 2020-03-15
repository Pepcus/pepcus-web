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
    $('.mobileNavigation-bg').toggleClass('active');
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

  //owl carousel start

  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
    });

  $("#clients").owlCarousel({
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 3
      },
      1170: {
        items: 5
      }
    }
  });

  //owl carousel end
});
