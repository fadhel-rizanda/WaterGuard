const urlParams = new URLSearchParams(window.location.search);

const locationName = document.querySelector(".location");
const lastUpdateTime = document.querySelectorAll(".last_update_time");
const ikaScore = document.querySelector(".IKA_score");
const ikaCategory = document.querySelector(".IKA_category");
const conditionDescription = document.querySelectorAll(
  ".condition_description"
);
const reportedBy = document.querySelector(".reported_by");
const waterQuality = document.querySelector(".water_quality");
const currentDescriptionVerified = document.querySelector(
  ".current_description_verified"
);
const currentDescriptionUnverified = document.querySelector(
  ".current_description_unverified"
);
const currentDescriptionNone = document.querySelector(
  ".current_description_none"
);
const cancleUpdateButton = document.querySelector(".cancel_update_button");
const reportUpdateButton = document.querySelector(".report_update_button");

// Inisialisasi peta
const mymap = L.map("mapid").setView([-6.2088, 106.8456], 12);

// Tambahkan tile layer dari OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(mymap);

// Tambahkan lokasi berdasarkan data dari URLSearchParams
const locations = [
  {
    lat: urlParams.get("lat"),
    lng: urlParams.get("lng"),
    name: urlParams.get("name"),
    status: urlParams.get("status"),
    ika_score: urlParams.get("ika_score"),
    ikaCategories: urlParams.get("ikaCategories"),
    iconUrl: urlParams.get("iconUrl"),
    lastUpdate: urlParams.get("lastUpdate"),
    description: urlParams.get("description"),
    reporter_name: urlParams.get("reporter_name"),
  },
];

locations.forEach((location) => {
  console.log("Latitude:", location.lat);
  console.log("Longitude:", location.lng);
  console.log("Name:", location.name);
  console.log("Status:", location.status);
  console.log("IKA Score:", location.ika_score);
  console.log("IKA Categories:", location.ikaCategories);
  console.log("Icon URL:", location.iconUrl);
  console.log("Last Update:", location.lastUpdate);
  console.log("Description:", location.description);
  console.log("Reporter Name:", location.reporter_name);
});

function createCustomIcon(url) {
  return L.icon({
    iconUrl: url,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });
}
locations.forEach(function (location) {
  const marker = L.marker([location.lat, location.lng], {
    icon: createCustomIcon(location.iconUrl),
  }).addTo(mymap);
  if (location.status == "verified") {
    marker
      .bindPopup(
        "<b>Location:</b> " +
          location.name +
          "<br>" +
          "<b>Score:</b> " +
          location.ika_score +
          " - " +
          location.ikaCategories
      )
      .openPopup();
  } else {
    marker
      .bindPopup(
        "<b>Location:</b> " +
          location.name +
          "<br>" +
          "<b>Category:</b> " +
          location.ikaCategories
      )
      .openPopup();
  }
});

locations.forEach(function (location) {
  locationName.innerHTML =
    location.name +
    '<div id="location_logo"><img src="' +
    location.iconUrl +
    '" width="30px" height="30px" alt=""></img></div>';
  ikaScore.innerHTML = "IKA Score: " + location.ika_score;
  ikaCategory.innerHTML = "IKA Category : " + location.ikaCategories;

  lastUpdateTime.forEach(function (button) {
    button.innerHTML = "Last Updated In: " + location.lastUpdate;
  });

  conditionDescription.forEach(function (button) {
    button.innerHTML = location.description;
  });
  reportedBy.innerHTML = "Reported By: " + location.reporter_name;
  waterQuality.innerHTML = "Water Quality: " + location.ikaCategories;

  if (location.status == "verified") {
    currentDescriptionVerified.classList.add("active");
    currentDescriptionUnverified.classList.remove("active");
    currentDescriptionNone.classList.remove("active");
  } else if (location.status == "unverified") {
    currentDescriptionUnverified.classList.add("active");
    currentDescriptionVerified.classList.remove("active");
    currentDescriptionNone.classList.remove("active");
  } else {
    currentDescriptionNone.classList.add("active");
    currentDescriptionUnverified.classList.remove("active");
    currentDescriptionVerified.classList.remove("active");
  }
});

cancleUpdateButton.addEventListener("click", function () {
  window.location.href = "../HTML/monitoring.html";
});

// reportUpdateButton.addEventListener("click", function () {
//   alert("The report Update has been sent!");
// });

function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var day = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  var timeString =
    day.toString().padStart(2, "0") +
    "/" +
    month.toString().padStart(2, "0") +
    "/" +
    year +
    " " +
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
  document.getElementById("reporting_time").textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();

function validateReport() {
  const fullName = document.getElementById("full_name").value;
  const phoneNumber = document.getElementById("phone_number").value;
  const emailAddress = document.getElementById("email_address").value;
  const updateDetail = document.getElementById("update_detail").value;
  const rateCondition = document.getElementById("rate_condition").value;

  const fullNameError = document.getElementById("full_name_error");
  const phoneNumberError = document.getElementById("phone_number_error");
  const emailAddressError = document.getElementById("email_address_error");
  const updateDetailError = document.getElementById("update_detail_error");
  const rateConditionError = document.getElementById("rate_condition_error");

  const alertMessage = ' <div class="alert"></div> ';
  let errorFound = false;

  if(!fullName){
    fullNameError.innerHTML = alertMessage + "Cannot be empty";
    errorFound = true;
  }
  else{
    fullNameError.innerHTML = null;
  }

  // Validate phone number length
  if(!phoneNumber){
    phoneNumberError.innerHTML = alertMessage + "Cannot be empty";
    errorFound = true;
  }
  else if (phoneNumber.length < 10 || phoneNumber.length > 12 || isNaN(phoneNumber)) {
    phoneNumberError.innerHTML = alertMessage + "Phone number must be between 10 and 12 digits";
    errorFound = true;
  }
  else{
    phoneNumberError.innerHTML = null;
  }

  // Validate email address ending
  if(!emailAddress){
    emailAddressError.innerHTML = alertMessage + "Cannot be empty";
    errorFound = true;
  }
  else if (!emailAddress.endsWith("@gmail.com")) {
    emailAddressError.innerHTML = alertMessage + "Email address must end with @gmail.com.";
    errorFound = true;
  }
  else{
    emailAddressError.innerHTML = null;
  }

  // Validate update detail word count
  if(!updateDetail){
    updateDetailError.innerHTML = alertMessage + "Cannot be empty";
    errorFound = true;
  }
  else if (updateDetail.split(/\s+/).length < 100) {
    updateDetailError.innerHTML = alertMessage + "Update detail must consist of at least 100 words.";
    errorFound = true;
  }
  else{
    updateDetailError.innerHTML = null;
  }

  // Validate rate condition
  const validConditions = [
    "Good",
    "Quite Good",
    "Lightly Polluted",
    "Moderately Polluted",
    "Heavily Polluted",
  ];
  if(!rateCondition){
    rateConditionError.innerHTML = alertMessage + "Cannot be empty";
    errorFound = true;
  }
  else if (!validConditions.includes(rateCondition)) {
    rateConditionError.innerHTML = alertMessage + "Rate condition must be one of the following: Good, Quite Good, Lightly Polluted, Moderately Polluted, Heavily Polluted.";
    errorFound = true
  }
  else{
    rateConditionError.innerHTML = null;
  }

  // If all validations pass
  if(!errorFound){
      alert("The report Update has been sent!");
  }
}
