// Inisialisasi peta
var mymap = L.map("mapid").setView([-6.2088, 106.8456], 12);

// Tambahkan tile layer dari OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(mymap);

// Data lokasi
var locations = [
  {
    lat: -6.1461,
    lng: 106.8166,
    name: "Pekojan, Tambora, West Jakarta City, Jakarta",
    status: "verified",
    ika_score: 55,
    ikaCategories: "Lightly Polluted",
    iconUrl:
      "../ASSET/image/image-logo/image-logo-location/location-check-3.png",
    lastUpdate: "11/11/2024 23:23",
    description:
      "Based on the parameters above, after going through several calculations of the Water Quality Index (IKA) data available for the Pekojan area, West Jakarta, on May 22 2024, the IKA value shows that the water quality in the area is classified as lightly polluted with an IKA value of 55.",
    reporter_name: null,
  },
  {
    lat: -6.1325,
    lng: 106.875,
    name: "Papanggo Tanjung Priok, North Jakarta City, Jakarta",
    ika_score: null,
    status: "unverified",
    ikaCategories: "Heavily Polluted",
    iconUrl:
      "../ASSET/image/image-logo/image-logo-location/location-question-5.png",
    lastUpdate: "12/12/2024 00:00",
    description:
      " The water in Papanggo is murky and greenish, especially during the rainy season. The smell is sometimes unpleasant, especially near rivers or waterways.A lot of rubbish gets stuck in the river, and thats one of the causes of the water being dirty. There are also factories nearby that dump their waste into the river. As a result, the water in Papanggo cannot be used directly for drinking or bathing. Residents usually use well water, but the quality depends on location and depth. PDAM water is also not always available, and even if it is, the color is often cloudy. This condition is indeed disturbing. Residents hope that the water in Papanggo will be clearer and healthier in the future. With cooperation, Papanggos water can be better.",
    reporter_name: "Dadang Surdadang",
  },
  {
    lat: -6.2088,
    lng: 106.8456,
    name: "Sudirman, Central Jakarta City, Jakarta",
    status: "verified",
    ika_score: 75,
    ikaCategories: "Water Quality Good",
    iconUrl:
      "../ASSET/image/image-logo/image-logo-location/location-check-1.png",
    lastUpdate: "15/01/2024 08:00",
    description:
      "Based on the parameters above, after several calculations of the Water Quality Index (IKA) data available for the Sudirman area, Central Jakarta, on January 15, 2024, the IKA value indicates that the water quality in the area is classified as good with an IKA value of 75.",
    reporter_name: null,
  },
  {
    lat: -6.2146,
    lng: 106.8451,
    name: "Kemayoran, Central Jakarta City, Jakarta",
    status: "verified",
    ika_score: 45,
    ikaCategories: "Moderately Polluted",
    iconUrl:
      "../ASSET/image/image-logo/image-logo-location/location-check-4.png",
    lastUpdate: "20/02/2024 12:00",
    description:
      "Based on the parameters above, after several calculations of the Water Quality Index (IKA) data available for the Kemayoran area, Central Jakarta, on February 20, 2024, the IKA value indicates that the water quality in the area is classified as moderately polluted with an IKA value of 45.",
    reporter_name: null,
  },
  {
    lat: -6.2105,
    lng: 106.8517,
    name: "Cikini, Central Jakarta City, Jakarta",
    status: "unverified",
    ika_score: null,
    ikaCategories: "Water Quality Quite Good",
    iconUrl:
      "../ASSET/image/image-logo/image-logo-location/location-question-2.png",
    lastUpdate: "25/03/2024 15:00",
    description:
      "The water in Cikini appears fairly clean, with a slight improvement in quality noted during the dry season. However, during the rainy season, water quality can fluctuate. The presence of some local industries and urban runoff affects the overall water quality. Residents often rely on filtered water for drinking. The community hopes for continuous improvement in water quality to ensure safer and cleaner water for daily use.",
    reporter_name: "Ali Sudrajet",
  },
  {
    lat: -6.1751,
    lng: 106.865,
    name: "Monas, Central Jakarta City, Jakarta",
    status: "verified",
    ika_score: 80,
    ikaCategories: "Water Quality Good",
    iconUrl:
      "../ASSET/image/image-logo/image-logo-location/location-check-1.png",
    lastUpdate: "05/01/2024 09:00",
    description:
      "Based on the parameters above, after several calculations of the Water Quality Index (IKA) data available for the Monas area, Central Jakarta, on January 5, 2024, the IKA value indicates that the water quality in the area is classified as good with an IKA value of 80.",
    reporter_name: null,
  },
  {
    lat: -6.1754,
    lng: 106.8272,
    name: "Senen, Central Jakarta City, Jakarta",
    status: "unverified",
    ika_score: null,
    ikaCategories: "Water Quality Quite Good",
    iconUrl:
      "../ASSET/image/image-logo/image-logo-location/location-question-2.png",
    lastUpdate: "25/03/2024 15:00",
    description:
      "The water in Senen appears fairly clean, with a slight improvement in quality noted during the dry season. However, during the rainy season, water quality can fluctuate. The presence of some local industries and urban runoff affects the overall water quality. Residents often rely on filtered water for drinking. The community hopes for continuous improvement in water quality to ensure safer and cleaner water for daily use.",
    reporter_name: "Bambang Supratno",
  },
  {
    lat: -6.2001,
    lng: 106.845,
    name: "Kuningan, South Jakarta City, Jakarta",
    status: "verified",
    ika_score: 72,
    ikaCategories: "Water Quality Good",
    iconUrl:
      "../ASSET/image/image-logo/image-logo-location/location-check-1.png",
    lastUpdate: "10/02/2024 08:30",
    description:
      "Based on the parameters above, after several calculations of the Water Quality Index (IKA) data available for the Kuningan area, South Jakarta, on February 10, 2024, the IKA value indicates that the water quality in the area is classified as good with an IKA value of 72.",
    reporter_name: null,
  },
  {
    lat: -6.2251,
    lng: 106.8389,
    name: "Tebet, South Jakarta City, Jakarta",
    status: "verified",
    ika_score: 48,
    ikaCategories: "Moderately Polluted",
    iconUrl:
      "../ASSET/image/image-logo/image-logo-location/location-check-4.png",
    lastUpdate: "15/03/2024 11:00",
    description:
      "Based on the parameters above, after several calculations of the Water Quality Index (IKA) data available for the Tebet area, South Jakarta, on March 15, 2024, the IKA value indicates that the water quality in the area is classified as moderately polluted with an IKA value of 48.",
    reporter_name: null,
  },
  {
    lat: -6.1907,
    lng: 106.8227,
    name: "Senayan, Central Jakarta City, Jakarta",
    status: "verified",
    ika_score: 38,
    ikaCategories: "Moderately Polluted",
    iconUrl:
      "../ASSET/image/image-logo/image-logo-location/location-check-4.png",
    lastUpdate: "05/04/2024 14:45",
    description:
      "Based on the parameters above, after several calculations of the Water Quality Index (IKA) data available for the Senayan area, Central Jakarta, on April 5, 2024, the IKA value indicates that the water quality in the area is classified as moderately polluted with an IKA value of 38.",
    reporter_name: null,
  },
  {
    lat: -6.1754,
    lng: 106.7915,
    name: "Pondok Indah, South Jakarta City, Jakarta",
    status: "unverified",
    ika_score: null,
    ikaCategories: "Water Quality Quite Good",
    iconUrl:
      "../ASSET/image/image-logo/image-logo-location/location-question-2.png",
    lastUpdate: "20/05/2024 16:30",
    description:
      "The water in Pondok Indah appears fairly clean, with a notable improvement in quality compared to previous years. However, water quality can still be affected by seasonal changes and urban runoff. Residents typically use filtered or bottled water for drinking and cooking.",
    reporter_name: "Mario Balotelli",
  },
  {
    lat: -6.1348,
    lng: 106.807,
    name: "Ancol, North Jakarta City, Jakarta",
    status: "unverified",
    ika_score: null,
    ikaCategories: "Lightly Polluted",
    iconUrl:
      "../ASSET/image/image-logo/image-logo-location/location-question-3.png",
    lastUpdate: "25/06/2024 12:00",
    description:
      "The water in Ancol is lightly polluted, with occasional reports of discoloration and odors, especially after heavy rains. Despite these issues, the area is popular for recreational activities, and ongoing efforts are being made to improve water quality through better waste management and pollution control.",
    reporter_name: "Ucok Sihombing",
  },
  {
    lat: -6.1405,
    lng: 106.7854,
    name: "Muara Angke, North Jakarta City, Jakarta",
    status: "verified",
    ika_score: 25,
    ikaCategories: "Heavily Polluted",
    iconUrl:
      "../ASSET/image/image-logo/image-logo-location/location-check-5.png",
    lastUpdate: "05/07/2024 14:00",
    description:
      "Based on the parameters above, after several calculations of the Water Quality Index (IKA) data available for the Muara Angke area, North Jakarta, on July 5, 2024, the IKA value indicates that the water quality in the area is classified as heavily polluted with an IKA value of 25.",
    reporter_name: null,
  },
  {
    lat: -6.1016,
    lng: 106.8371,
    name: "Marunda, North Jakarta City, Jakarta",
    status: "unverified",
    ika_score: null,
    ikaCategories: "Heavily Polluted",
    iconUrl:
      "../ASSET/image/image-logo/image-logo-location/location-question-5.png",
    lastUpdate: "10/08/2024 09:30",
    description:
      "The water in Marunda is extremely polluted, with significant amounts of industrial waste and sewage contributing to poor water quality. The water often appears dark and emits a strong odor, making it unsuitable for any domestic use. Local residents have reported various health issues related to water contamination and are in dire need of clean water sources.",
    reporter_name: "Rahmat Selamat",
  },
];

function createCustomIcon(url) {
  return L.icon({
    iconUrl: url,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });
}

var scoreIka = document.getElementById("index_score");
var locationAddress = document.querySelector(".location");
var updateTime = document.getElementById("update_time");
var scoreCategories = document.getElementById("index_categories");
var waterQualityDescription = document.getElementById(
  "water_quality_description"
);
var verified = document.querySelector(".detail_information_container_verified");
var unverified = document.querySelector(
  ".detail_information_container_unverified"
);
var searchNoData = document.querySelector(".detail_information_container_none");
var locationLogo = document.querySelector(".location");
var locationUpdate = document.querySelector(".location_update");

var pinPoint = document.getElementById("pinpoint_choosed");
var inputBackground = document.querySelector(".monitoring_input input");
var pastReviews = document.querySelector(".past_rating_button");
var reporterNameUpdate = document.getElementById("reporter_name_input");

var monitoringButton = document.querySelector(".monitoring_form_index_button");
var reportUpdateButton = document.querySelectorAll(".report_update_button");
var noDataLocation = document.querySelector(".location_no_data");

var locationNowlat = -6.2197;
var locationNowlng = 106.9998;

// search button
monitoringButton.addEventListener("click", function () {
  var addressInput = document.getElementById("address_choosed").value;
  const activateError = document.querySelector(".error_message");
  const monitoringError = document.getElementById("monitoring_error");
  const alertMessage = ' <div class="alert"></div> ';

  if (!addressInput) {
    monitoringError.innerHTML = alertMessage + "Cannot be empty";
    activateError.classList.add("active")
    errorFound = true;
  }
  else{
    activateError.classList.remove("active")
  }

  if (addressInput.trim() !== "") {
    pinPoint.classList.remove("active");
    inputBackground.classList.add("active");
    for (let i = 0; i < locations.length; i++) {
      if (addressInput === locations[i].name) {
        console.log(locations[i].name);
        if (locations[i].status == "verified") {
          pastReviews.classList.add("active");

          verified.classList.add("active");
          unverified.classList.remove("active");
          searchNoData.classList.remove("active");

          scoreIka.innerHTML = locations[i].ika_score;
          updateTime.innerHTML = locations[i].lastUpdate;
          scoreCategories.innerHTML = locations[i].ikaCategories;
          waterQualityDescription.innerHTML = locations[i].description;
          locationLogo.innerHTML =
            locations[i].name +
            '<div id="location_logo"><img src="' +
            locations[i].iconUrl +
            '" width="30px" height="30px" alt=""></img></div>';

          addClickEventToButtons(locations[i]);
        } else if (locations[i].status == "unverified") {
          pastReviews.classList.add("active");

          unverified.classList.add("active");
          verified.classList.remove("active");
          searchNoData.classList.remove("active");

          reporterNameUpdate.innerHTML = locations[i].reporter_name;
          locationAddress.innerHTML = locations[i].name;
          updateTime.innerHTML = locations[i].lastUpdate;
          waterQualityDescription.innerHTML = locations[i].description;
          locationUpdate.innerHTML =
            locations[i].name +
            '<div class="location_logo"><img src="' +
            locations[i].iconUrl +
            '" width="30px" height="30px" alt=""></img></div>';

          addClickEventToButtons(locations[i]);
        }

        break;
      } else {
        searchNoData.classList.add("active");
        verified.classList.remove("active");
        unverified.classList.remove("active");
        noDataLocation.innerHTML = addressInput;

        var locationNoData = {
          lat: locationNowlat,
          lng: locationNowlng,
          name: addressInput,
          status: "no data",
          ika_score: null,
          ikaCategories: null,
          iconUrl:
            "../ASSET/image/image-logo/image-logo-location/location-no_data.png",
          lastUpdate: null,
          description: null,
          reporter_name: null,
        };

        addClickEventToButtons(locationNoData);
      }
    }
  }
});

// klik marker
locations.forEach(function (location) {
  var marker = L.marker([location.lat, location.lng], {
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

  // klik markernya(detail muncul)
  marker.on("click", function (e) {
    pinPoint.innerHTML = location.name;
    pinPoint.classList.add("active");
    inputBackground.classList.remove("active");

    if (location.status == "verified") {
      pastReviews.classList.add("active");
      verified.classList.add("active");
      unverified.classList.remove("active");

      scoreIka.innerHTML = location.ika_score;
      updateTime.innerHTML = location.lastUpdate;
      scoreCategories.innerHTML = location.ikaCategories;
      waterQualityDescription.innerHTML = location.description;
      locationLogo.innerHTML =
        location.name +
        '<div id="location_logo"><img src="' +
        location.iconUrl +
        '" width="30px" height="30px" alt=""></img></div>';

      addClickEventToButtons(location);
    } else {
      pastReviews.classList.add("active");
      unverified.classList.add("active");
      verified.classList.remove("active");

      reporterNameUpdate.innerHTML = location.reporter_name;
      locationAddress.innerHTML = location.name;
      updateTime.innerHTML = location.lastUpdate;
      waterQualityDescription.innerHTML = location.description;
      locationUpdate.innerHTML =
        location.name +
        '<div class="location_logo"><img src="' +
        location.iconUrl +
        '" width="30px" height="30px" alt=""></img></div>';

      addClickEventToButtons(location);
    }
  });
});

function addClickEventToButtons(location) {
  var buttons = document.querySelectorAll(".report_update_button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var redirectUrl = `../HTML/update.html?lat=${location.lat}&lng=${
        location.lng
      }&name=${location.name}&status=${location.status}&ika_score=${
        location.ika_score
      }&ikaCategories=${location.ikaCategories}&iconUrl=${encodeURIComponent(
        location.iconUrl
      )}&lastUpdate=${location.lastUpdate}&reporter_name=${
        location.reporter_name
      }&description=${encodeURIComponent(location.description)}`;

      window.location.href = redirectUrl;
    });
  });
}

var downloadIkaCalculation = document.querySelector(
  ".download_ika_calculation_button"
);
downloadIkaCalculation.addEventListener("click", function () {
  alert("Ika Calculation has been downloaded!");
});

var pastRatingButton = document.querySelector(".past_rating_button");
pastRatingButton.addEventListener("click", function(){
  window.location.href = "../HTML/review.html"
})