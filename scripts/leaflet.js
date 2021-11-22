const mymap = L.map("leaflet").setView([39.8097343, -98.5556199], 4);

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg";
// "https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}@2x.png";
//  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

const tiles = L.tileLayer(tileUrl, { attribution });

tiles.addTo(mymap);

const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

async function getIss() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { latitude, longitude } = data;

  // let marker = L.marker([30.6810,-88.2444]).addTo(mymap);

  let locations = [
    ["LOCATION_1", 38.9202, -77.0415],
    ["LOCATION_2", 39.7399, -104.969],
    ["LOCATION_3", 40.73764, -74.00375],
    ["LOCATION_4", 30.681, -95.2444],
    ["LOCATION_5", 40.6712962, -73.9842082],
    ["LOCATION_6", 30.6369603, -88.14250129999999],
    ["LOCATION_7", 36.1769521, -86.7457429],
    ["LOCATION_8", 33.7399618, -84.34592719999999],
    ["LOCATION_9", 29.7704773, -95.4037927],
    ["LOCATION_10", 39.9659473, -82.99565129999999],
    ["LOCATION_11", 32.8106421, -96.81140479999999],
    ["LOCATION_12", 43.02272350000001, -87.9124205],
    ["LOCATION_13", 47.6139276, -122.3183889],
    ["LOCATION_14", 37.5539604, -77.4822901],
    ["LOCATION_15", 33.4986866, -112.0827313],
    ["LOCATION_16", 37.7390005, -122.4172051],
    ["LOCATION_17", 33.466054, -112.0441206],
    ["LOCATION_18", 40.731133, -74.00646309999999],
  ];
  let titles = {
    1: "A League of Her Own--Washington DC",
    2: "Blush & Blu---Denver CO",
    3: "Gossip Grill---SAN DIEGO CA",
    4: "Cubbyhole---NYC",
    5: "Ginger’s---NYC",
    6: "Herz---MOBILE AL",
    7: "Lipstick Lounge---NASHVILLE TN",
    8: "My Sister’s Room---ATLANTA GA",
    9: "Pearl Bar---HOUSTON TX",
    10: "Slammers---COLUMBUS OH",
    11: "Sue Ellen's---DALLAS TX",
    12: "Walker’s Pint---MILWAUKEE WI",
    13: "The Wildrose ---SEATTLE WA",
    14: "Babes of Carytown---RICHMOND VA",
    15: "Boycott Bar---PHOENIX AZ",
    16: "Wild Side West---SAN FRANCISCO CA",
    17: "Cash Nightclub and Lounge---PHOENIX AZ",
    18: "Henrietta Hudson---NYC",
  };

  let icon = L.icon({
    iconUrl: "images/map-marker.png",

    iconSize: [60, 60],
    iconAnchor: [30, 60],
    popupAnchor: [0, -60],
  });

  for (let i = 0; i < locations.length; i++) {
    let marker = new L.marker([locations[i][1], locations[i][2]], {
      icon,
    }).addTo(mymap);
    let popup = Object.values(titles);
    marker.bindPopup(popup[i]);
    marker.on("mouseover", function (e) {
      this.openPopup();
    });
    marker.on("mouseout", function (e) {
      this.closePopup();
    });

    // console.log(popup)
  }

  // }
  //   .bindPopup(titles[0])
  //   console.log(title[0])
  // .bindPopup(title).openPopup()

  // console.dir(marker.options.title)

  // function addPop(marker){
  //   marker
  // }
  //   marker.bindPopup(titles).openPopup()

  document.getElementById("lat").textContent = latitude;
  document.getElementById("long").textContent = longitude;

  console.log(latitude);
  console.log(longitude);
}

getIss();
