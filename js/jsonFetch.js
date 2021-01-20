let renderJson = function (data) {
  renderCEOTeam(data.ceoTeam);
  renderSeniorManagerTeam(data.seniorManagerTeam);
  renderManagerTeam(data.managerTeam);
  renderEmployeeTeam(data.employeeTeam);
  renderOpeningSection(data.currentOpeningSection);
  renderModalContent(data.currentOpeningsModalWrapper);
};

let fetchTeamJson = () => {
  $.ajax({
    url: 'assets/json/team.json',
    dataType: 'json',
    success: function (data) {
      renderJson(data);
    },
    error: function (data) {
      alert("ERROR: Not received JSON file  " + data);
      $("#error-wrapper").css("display", "none");
    }
  });
};
fetchTeamJson();

let renderCEOTeam = (data) => {
  $.each(data, function(key, value) {
    let htmlRender = "<div class='team-members-top'>"+
      "<div class='team-top-image'>"+
      "<img src='"+value.img1+"' alt='"+value+"'>"+
      "</div>"+
      "<div class='team-top-info'>"+
      "<div class='heading'>"+value.nameHead+"<br/> "+value.name+"</div>"+
      "<p class='p-heading'>"+value.role+"<br/>"+value.role1+" </p>"+
      "<p>"+value.description+"</p>"+
      "<p><b>"+value.specialitiesHeading+ "</b>"+value.specialities+"</p>"+
      "</div>"+
      "</div>";
    $(htmlRender).appendTo("#ceoTeamMembers");
  });
};
let renderSeniorManagerTeam = (data) => {
  $.each(data, function(key, value) {
      let htmlRender =  "<div class='team-members three'>" +
        "<div class='team-member-img'>" +
        "<div class='team-img-border'>" +
        "<div class='team-member-image'>" +
        "<img src='"+value.img1+"' alt='"+value+"'>" +
        "</div>"+
        "</div>"+
        "</div>"+
        "<div class='team-member-info'>" +
        "<h4 class='team-member-name'>"+value.name+"</h4>" +
        "<span class='designation'>"+value.role+"</span>" +
        "<p class='description'>"+value.description+"</p>"+
        "<p class='description'>"+value.specialities+"</p>"+
        "</div>"+
        "</div>";
      $(htmlRender).appendTo("#seniorManagerTeamMembers");
  });
};
let renderManagerTeam = (data) => {
  $.each(data, function(key, value) {
    let htmlRender =  "<div class='team-members three'>" +
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
    $(htmlRender).appendTo("#managerTeamMembers");
  });
};
let renderEmployeeTeam = (data) => {
  $.each(data, function(key, value) {
    let htmlRender =  "<div class='team-members'>" +
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
    $(htmlRender).appendTo("#employeeTeamMembers");
  });
};

let fetchCurrentOpening = () => {
  $.ajax({
    url: 'json/careers.json',
    dataType: 'json',
    success: function( data ) {
      renderJson(data);
    },
    error: function( data ) {
      alert("ERROR: Not received JSON file  " + data );
      $("#error-wrapper").css("display","none");
    }
  });
};
fetchCurrentOpening();

let renderModalContent = function(modalContent) {

  $.each(modalContent, function(key, value) {
    var htmlRenderJobList = "", htmlRenderKeyList = "", htmlRenderSkillList = "";
    $.each(value.jobDescription, function(key,desc){
      htmlRenderJobList += "<li>"+desc+"</li>";
    });
    $.each(value.keyActivities, function(key,desc){
      htmlRenderKeyList += "<li>"+desc+"</li>";
    });
    $.each(value.keySkills, function(key,desc){
      htmlRenderSkillList += "<li>"+desc+"</li>";
    });
    var formLink = "https://forms.office.com/Pages/ResponsePage.aspx?id=vr1cVz6rDUuxUtMhGW0KCs_IWa25rr1FlXvOHENkxiVUNjJZMVhDRTg4WEdTWEZIUlQ0MExDR0tPTy4u";
    if(value.modalContentId === "java-engineer"){
      formLink = "https://forms.office.com/Pages/ResponsePage.aspx?id=vr1cVz6rDUuxUtMhGW0KCs_IWa25rr1FlXvOHENkxiVUQUhHWTNTQURYWElHV0hBOVgzUVZaR0VLWC4u";
    }

    var htmlRender = "<div id=\""+value.modalContentId+"\" class=\"modal\">" +
      " <div class=\"modal-content clearfix\">" +
      "  <div class=\"modal-heading\">" +
      " <span class=\"close modal-close\" onclick=\"closeModal(\'"+value.closeModalText+"\')\">&times</span>" +
      " <span class=\"\">"+value.modalContentHeading+"</span>" +
      " </div>" +
      " <div class=\"modal-wrapper\">" +
      "  <div class=\"modal-wrapper__container clearfix\">" +
      " <div class = \"modal-wrapper__heading\">" +
      " <h3 class = \"\"> "+value.modalLocationHeading+"<span>"+value.modalLocationText+"</span></h3>" +
      " </div>" +
      "<div class = \"modal-wrapper__heading\">" +
      " <h3>"+value.modalContentExperience+"<span>"+value.modalContentExperienceText+"</span></h3>" +
      " </div>" +
      " <div>" +
      " <h3 class = \"modal-wrapper__heading\">"+value.jobDescriptionTitle+"</h3>" +
      " <div class = \"\">" +
      " <ul class = \"\">" +htmlRenderJobList+
      " </ul>" +
      " </div>" +
      " </div>" +
      " <div>" +
      " <h3 class = \"modal-wrapper__heading\">"+ (value.keyActivitiesTitle ? value.keyActivitiesTitle : '') +"</h3>" +
      " <div class = \"\">" +
      "  <ul class = \"\">" +htmlRenderKeyList+
      "</ul>" +
      "  </div>" +
      "  </div>" +
      "<div>" +
      "<h3 class = \"\">"+value.KeySkillsTitle+"</h3>" +
      " <div class = \"\">" +
      " <ul class = \"\">" +htmlRenderSkillList+
      " </ul>" +
      "<div class=\"modal__button-container\">\n" +
      "<a href = "+formLink+" class = \"button button__border-button-base\" target = \"_blank\">Apply now</a>"+"</div>"+
      "</div>"+
      "</div>" +
      "</div>" +
      "</div>" +
      " </div>" +
      " </div>";

    $(htmlRender).appendTo("#modal-content-wrapper");
    // Get the modal
    // When the user clicks the button, open the modal
    function openModal(clicked_id) {
      var modalnew = document.getElementById(clicked_id);
      modalnew.style.display = "block";
    }
    function closeModal(clicked_id) {
      var modalClose = document.getElementById(clicked_id);
      modalClose.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target.className === "modal") {
        event.target.style.display = "none";
      }
    };
  });
};

function toChunkArray(array, chunkSize){
  let arrayLength = array.length;
  let chunkArray = [];
  for (let i = 0; i < arrayLength; i += chunkSize) {
    chunkArray.push(array.slice(i, i+chunkSize));
  }
  return chunkArray;
}
let renderOpeningSection = function(openingBlock) {
  let jobOpeningRows = null;
  if (window.matchMedia("(max-width: 768px)").matches) {
    jobOpeningRows = toChunkArray(openingBlock, 1);
  } else if (window.matchMedia("(max-width: 992px)").matches) {
    jobOpeningRows = toChunkArray(openingBlock, 2);
  }else {
    jobOpeningRows = toChunkArray(openingBlock, 3);
  }
  jobOpeningRows.forEach(
    function (openingRow, i) {
      let rowLength = openingRow.length;
      let columnSize = 12 / rowLength;
      openingRow.forEach(
        function(opening) {
          let htmlRender =
            "<div class='col-sm-"+columnSize+" col-xs-12 col-md-"+columnSize+" col-lg-"+columnSize+" no-padding'>" +
            "<div class='job-opening-image job-opening__card-container' style='background-image:url(" + opening.cardImages + ")'>" +
            "<a onclick=\"openModal(\'" + opening.onclickOpenModal + "\')\" target=\"_self\" >" +
            "<div class=\"card\">" +
            "<div class='job-opening__card-heading'>" +
            "<h2 class ='job-opening__card-hover'>" + opening.jobTitle + "</h2>" +
            "<p class = 'job-opening__card-hover'>" + opening.jobExperience + "</p>" +
            "<h3>" + opening.jobLocation + "</h3>" +
            "<div class ='btn__see-more'>" +
            "<span>" + opening.jobBtn + "</span>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</a>" +
            "</div>" +
            "</div>";
          $(htmlRender).appendTo("#jobopening");

        }
      );
    }
  );
};
// Get the modal
// When the user clicks the button, open the modal
function openModal(clicked_id) {
  const modalnew = document.getElementById(clicked_id);
  modalnew.style.display = "block";
  document.body.style.overflow = "hidden";
  console.log('clicked_id', clicked_id);
}
function closeModal(clicked_id) {
  const modalClose = document.getElementById(clicked_id);
  modalClose.style.display = "none";
  document.body.style.overflow = "auto";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
};
