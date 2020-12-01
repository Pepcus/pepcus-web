$(function() {


  $(window).scroll(function() {
    window.isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
    if(!window.isMobile ) {
      if ($(this).scrollTop() > 90) {
        $('.header').addClass("header-small")
      } else {
        $('.header').removeClass("header-small")
      }
    }
  });





  $(".navigationList-item").hover(function(){
    $(this).addClass("navigationList-item--dropdown--show");
  }, function(){
    $(this).removeClass("navigationList-item--dropdown--show");
  });



  $(".smallMenu-icon").on("click touchstart", function(e){
    $(this).toggleClass('smallMenu-icon--active');
    $('.mobileNavigation-bg').toggleClass('active');
    $('body').toggleClass('no-scroll');

    // When touch event fires, this is needed to prevent the click
    // event from firing as well as @RyanWheale noted in the comments.
    e.preventDefault();
    e.stopPropagation();
  });
  $(".mobileNavigationList-item").on('click touch', function(e) {
    $(this).toggleClass("active");
  });
  $(".mobileNavigationList-item").on('click touch', function(e){
    $(this).children('div.mobileNavigation__wrapper').addClass("active");
    e.preventDefault();
  }, function(e){
    $(this).children('div.mobileNavigation__wrapper').removeClass("active");
  });

  //owl carousel start

  $("#clients").owlCarousel({
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1170: {
        items: 5
      }
    }
  });

  $("#techepecTools").owlCarousel({
    autoplay: true,
    dots:true,
    autoplayTimeout: 5000,
    loop:true,
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

  $("#cloudLogo").owlCarousel({
    autoplay: true,
    dots:true,
    loop:true,
    autoplayTimeout: 5000,
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

  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    autoplay: false,
    dots:true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
  });

  $("#mobile-expertise-carousel").owlCarousel({
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

  // workspace slider
  $('#workspace-slider').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    autoplay: false,
    responsive:{
      0: {
        items:1
      },
      767:{
        items:2
      },
      768:{
        items:3
      }
    }
  });

  $('#fun-gallery').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    autoplay: false,
    responsive:{
      0: {
        items:1

      },
      767:{
        items:2
      },
      768:{
        items:3
      }
    }
  });

  $("#performance-tools").owlCarousel({
    autoplay: true,
    dots:true,
    loop: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1170: {
        items: 3
      }
    }
  });

  $("#tools-expertise").owlCarousel({
    autoplay: true,
    dots:true,
    loop: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1170: {
        items: 3
      }
    }
  });
  //owl carousel end


  // document.querySelector("html").classList.add('js');

  var fileInput  = document.querySelector( ".input-file" ),
    button     = document.querySelector( ".input-file-button" ),
    the_return = document.querySelector(".file-name");

  button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
      fileInput.focus();
    }
  });
  button.addEventListener( "click", function( event ) {
    fileInput.focus();
    return false;
  });
  fileInput.addEventListener( "change", function( event ) {
    the_return.innerHTML = this.files[0].name;
  });

});


// ------------------------------------ tabs start-------------------------------------------

$(document).ready(function(){

  $('.tabs1__tab-list li').click(function(){
    const tab_id = $(this).attr('data-tab');
    $('.tabs1__tab-list li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });
})

// ------------------------------------ tabs end-------------------------------------------


// ------------------------------------ scroll to spacific section start-------------------------------------------
$(function () {
  $("#footer-contact-action").click(function() {
    $('html,body').animate({
        scrollTop: $("#smaller-contact-form-section").offset().top-80},
      1000);
  });
});
// ------------------------------------ scroll to spacific section end-------------------------------------------

// ------------------------------------ animation on scroll start-------------------------------------------




$(function() {
  AOS.init();
});
// ------------------------------------ animation on scroll end-------------------------------------------


$(function () {
  setTimeout(function() {
    $('.loading-wrapper').addClass('hide');
  },1000);
});
