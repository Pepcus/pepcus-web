// **DO THIS**:
//   Replace BUCKET_NAME with the bucket name.
//
let albumBucketName = 'pepcus-website-cdn';

//
// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'ap-south-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-south-1:9e448c72-937f-4036-afb9-2fe6d871adfd',
});

// Create a new service object
var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: albumBucketName}
});

var albumsList = [];
var albumsSize = '';
var href = '';
var bucketUrl = '';

// A utility function to create HTML.
function getHtml(template) {
  return template.join('\n');
}

// List the photo albums that exist in the bucket.
function listAlbums() {
  s3.listObjects({Delimiter: '/', Prefix: 'assets/gallery/careers-workplace/'}, function(err, data) {
    console.log('data', data);
    albumsSize = data.CommonPrefixes.length;
    let albums = data.CommonPrefixes;
    if (err) {
      return alert('There was an error listing your albums: ' + err.message);
    } else {
      for (var i = 0; i < albums.length; i++) {
        var prefix = albums[i].Prefix;
        var albumName = decodeURIComponent((prefix.split('/'))[2]);
        s3.listObjects({Prefix: 'assets/study-material/' + albumName}, function(err, data) {
          href = this.request.httpRequest.endpoint.href;
          bucketUrl = href + albumBucketName + '/';
          albumsList.push(data);

          for (var j = 0; j < albumsList.length; j++) {
            albumsList[j].number = parseInt(albumsList[j].Prefix.split('/')[2].split('')[0]);
            albumsList[j].levelName = albumsList[j].Prefix.split('/')[2].split('_')[1];
            albumsList[j].levelClass = albumsList[j].Prefix.split('/')[2].split('_')[1].replace(" ", "-").toLowerCase();
          }
          viewAlbum(albumsList);
        });
      }
    }
  });
}

// List the photo albums that exist in the bucket.
function balphoto2019() {
  s3.listObjects({Delimiter: '/', Prefix: 'assets/gallery/careers-workplace/'}, function(err, data) {
    href = this.request.httpRequest.endpoint.href;
    bucketUrl = href + albumBucketName + '/';

    datlist = data.Contents;
    if (datlist) {
      insertGalleryImages(datlist);
      insertThumbImages(datlist);
      addCarousel();
    }else {
      addCarousel();
    }
  });
  function insertGalleryImages(datlist) {
    var htmlRender = '';
    for (var k = 1; k < datlist.length; k++) {
      htmlRender += "<div class=\"item\">" +
        "<img src=\""+bucketUrl+datlist[k].Key+"\"></img>" +
        "</div>";
    }
    $(htmlRender).appendTo("#big");
  }
  function insertThumbImages(datlist) {
    var htmlRender = '';
    for (var k = 1; k < datlist.length; k++) {
      htmlRender += "<div class=\"item\">" +
        "<img src=\""+bucketUrl+datlist[k].Key+"\"></img>" +
        "</div>";
    }
    $(htmlRender).appendTo("#thumbs");
  }
  function addCarousel() {
    bigimage = $("#big");
    thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
      .owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: true,
        dots: false,
        loop: true,
        autoHeight:true,
        responsiveRefreshRate: 200,
        navText: [
          '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
          '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        ]
      })
      .on("changed.owl.carousel", syncPosition);

    thumbs
      .on("initialized.owl.carousel", function() {
        thumbs
          .find(".owl-item")
          .eq(0)
          .addClass("current");
      })
      .owlCarousel({
        items: 4,
        dots: true,
        nav: true,
        navText: [
          '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
          '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        ],
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: 4,
        responsiveRefreshRate: 100
      })
      .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
      //if loop is set to false, then you have to uncomment the next line
      //var current = el.item.index;

      //to disable loop, comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }
      //to this
      thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = thumbs.find(".owl-item.active").length - 1;
      var start = thumbs
        .find(".owl-item.active")
        .first()
        .index();
      var end = thumbs
        .find(".owl-item.active")
        .last()
        .index();

      if (current > end) {
        thumbs.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        thumbs.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }

    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        bigimage.data("owl.carousel").to(number, 100, true);
      }
    }

    thumbs.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      bigimage.data("owl.carousel").to(number, 300, true);
    });
  }
}

$(function () {
  var html = "<div class='outer'>" +
    "<div id='thumbs' class='owl-carousel owl-theme'>"+
    "</div>"+
    "</div>"
  $('#photoGallery').append(html);
});
