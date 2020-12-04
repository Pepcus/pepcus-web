$(function () {
  //contact us form -- contact page
  $('#contact-form').on('submit', function (event) {
    event.preventDefault(); // prevent reload
    let service_id = "default_service";
    let template_id = "pepcuscontact";
    let user_id = "user_QjC9ZSKm2Rl96TpEZy1Ov"
    let formData = new FormData();
    let fullName = $('#name').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let company = $('#company').val();
    let description = $('#description').val();
    let attachment = $('#attachment')[0].files[0];
    $('#submit').prop('disabled', true);
    $("#submit").text("Sending...");
    $('.loading').addClass('show');
    formData.append('service_id', service_id);
    formData.append('template_id', template_id);
    formData.append('user_id', user_id);
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('company', company);
    formData.append('description', description);
    formData.append('attachment', attachment);
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
      type: 'POST',
      data: formData,
      contentType: false, // auto-detection
      processData: false // no need to parse formData to string
    }).done(function () {
      bootbox.alert({
        message: "Thank you for contacting us. We will get back to you shortly.",
        backdrop: true,
        className: 'rubberBand animated'
      });
      $("input").val("");
      $("textarea").val("");
      $("p").html("");
      $("#submit").text("Send");
      $('.loading').removeClass('show');
      $('#submit').prop('disabled', false);
    }).fail(function (error) {
      $("#submit").text("Send");
      $('.loading').removeClass('show');
      $('#submit').prop('disabled', false);
      bootbox.alert({
        message: JSON.stringify(error),
        backdrop: true,
        className: 'rubberBand animated'
      });
    });
  });

  //expertise-- small contact form
  $('#smaller-contact-form').on('submit', function (event) {
    event.preventDefault(); // prevent reload
    let service_id = "default_service";
    let template_id = "pepcusHome";
    let user_id = "user_QjC9ZSKm2Rl96TpEZy1Ov"
    let formData = new FormData();
    let email = $('#email').val();
    let comment = $('#comment').val();

    $('#submit').prop('disabled', true);
    $("#submit").text("Sending...");
    $('.loading').addClass('show');
    formData.append('service_id', service_id);
    formData.append('template_id', template_id);
    formData.append('user_id', user_id);
    formData.append('email', email);
    formData.append('comment', comment);
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
      type: 'POST',
      data: formData,
      contentType: false, // auto-detection
      processData: false // no need to parse formData to string
    }).done(function () {

      bootbox.alert({
        message: "Thank you for contacting us. We will get back to you shortly.",
        backdrop: true,
        className: 'rubberBand animated'
      });
      $("input").val("");
      $("textarea").val("");
      $("#submit").text("Send");
      $('.loading').removeClass('show');
      $('#submit').prop('disabled', false);
    }).fail(function (error) {
      $("#submit").text("Send");
      $('.loading').removeClass('show');
      $('#submit').prop('disabled', false);
      bootbox.alert({
        message: JSON.stringify(error),
        backdrop: true,
        className: 'rubberBand animated'
      });
    });
  });
});
