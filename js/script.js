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


  $('#owl').owlCarousel({
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    autoplay: true,
    dots:true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
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


  var fetchTeamJson = function () {
  $.ajax({
    url: 'json/team.json',
    dataType: 'json',
    success: function (data) {
      renderTeamJson(data);
    },
    error: function (data) {
      alert("ERROR: Not received JSON file  " + data);
      $("#error-wrapper").css("display", "none");
    }
  });
  };
  fetchTeamJson();

  var renderTeamJson = function (data) {
    renderThirdTeam(data.thirdTeam);
    renderThirdTeam1(data.thirdTeam)
  }
  var renderThirdTeam = function (data1) {
    $.each(data1, function(key, value) {
      var htmlRender =  "<div class='team-members'>" +
        "<div class='team-member-img'>" +
        "<div class='team-img-border'>" +
        "<div class='team-member-image'>" +
        "<img src='"+value.img1+"' alt='"+value.name+"'>" +
        "</div>"+
        "</div>"+
        "</div>"+
        "<div class='team-member-info'>" +
        "<h4 class='team-member-name'>"+value.name+"</h4>" +
        "<span class='designation'>"+value.role+"</span>" +
        "</div>"+
        "</div>";
      $(htmlRender).appendTo("#teamMembers");
    });
  };
var renderThirdTeam1 = function (data2) {
  $.each(data2, function(key, value) {
    var htmlRender =  "<div class='team-members'>" +
      "<div class='team-member-img'>" +
      "<div class='team-img-border'>" +
      "<div class='team-member-image'>" +
      "<img src='"+value.img1+"' alt='"+value.name+"'>" +
      "</div>"+
      "</div>"+
      "</div>"+
      "<div class='team-member-info'>" +
      "<h4 class='team-member-name'>"+value.name+"</h4>" +
      "<span class='designation'>"+value.role+"</span>" +
      "</div>"+
      "</div>";
    $("#new_team").append(htmlRender);
  });
};


