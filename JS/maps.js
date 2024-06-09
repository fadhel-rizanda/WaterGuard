const mymap = L.map("mapid").setView([-6.2088, 106.8456], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(mymap);

const locations = [
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
    reporter_name: null,  },
];

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