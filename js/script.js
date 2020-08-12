$(function() {

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

  $("#clients").owlCarousel({
    autoplay: true,
    loop: true,
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
        scrollTop: $("#smaller-contact-form").offset().top-50},
      'slow');
  });
});
// ------------------------------------ scroll to spacific section end-------------------------------------------


particlesJS("particles-js", {
  particles: {
    number: { value: 1500, density: { enable: true, value_area: 1400 } },
    color: { value: "#FFFFFF" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 3 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.35,
      random: true,
      anim: {
        enable: false,
        speed: 8,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: { enable: false, speed: 1, size_min: 0.1, sync: true }
    },
    line_linked: {
      enable: false,
      distance: 30,
      color: "#FFFFFF",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "right",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: true, mode: "bubble" },
      resize: true
    },
    modes: {
      grab: { distance: 50, line_linked: { opacity: 1 } },
      bubble: {
        distance: 20,
        size: 6,
        duration: 2,
        opacity: 0.3,
        speed: 10
      },
      repulse: { distance: 20, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
stats.domElement.style.display = "none";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (
    window.pJSDom[0].pJS.particles &&
    window.pJSDom[0].pJS.particles.array
  ) {
    count_particles.innerText =
      window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

