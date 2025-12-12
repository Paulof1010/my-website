import interestsView from "../views/interestsView.js";

export function init() {
  document.getElementById("app").innerHTML = interestsView();
  loadMap();
  loadOperaSingers();
  loadTopFootballers();
}

function loadMap() {
  const map = L.map("map").setView([41.9028, 12.4964], 4); // centered roughly in Europe

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
  }).addTo(map);

  // Cities you’ve visited
  const visitedCities = [
    { name: "Rome", coords: [41.9028, 12.4964] },
    { name: "Budapest", coords: [47.4979, 19.0402] },
    { name: "London", coords: [51.5074, -0.1278] },
    { name: "Madrid", coords: [40.4168, -3.7038] },
  ];

  const bounds = [];

  visitedCities.forEach((city) => {
    L.marker(city.coords).addTo(map).bindPopup(`<strong>${city.name}</strong>`);

    bounds.push(city.coords);
  });

  map.fitBounds(bounds, { padding: [40, 40] });
}

async function loadOperaSingers() {
  const container = document.getElementById("opera-list");

  // Ordered list — the exact singers you want
  const singers = [
    "Franco Corelli",
    "Luciano Pavarotti",
    "Mario Del Monaco",
    "Maria Callas",
    "Renata Scotto",
    "Mirella Freni",
  ];

  container.innerHTML = "<p>Loading singers...</p>";

  const singerCards = [];

  for (const name of singers) {
    const apiName = name.replace(/ /g, "_"); // Wikipedia format
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${apiName}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      singerCards.push(`
        <div class="card">
          <img src="${
            data.thumbnail?.source || ""
          }" alt="${name}" style="width:100%; border-radius:8px;" />
          <h3>${data.title}</h3>
          <p>${data.description || ""}</p>
          <a href="${data.content_urls?.desktop?.page}" target="_blank">
            View on Wikipedia
          </a>
        </div>
      `);
    } catch (err) {
      singerCards.push(`
        <div class="card">
          <h3>${name}</h3>
          <p>Could not load details.</p>
        </div>
      `);
    }
  }

  container.innerHTML = singerCards.join("");
}

function loadTopFootballers() {
  const container = document.getElementById("sports-list");

  const top6 = [
    {
      name: "Eusébio",
      nation: "Portugal",
      img: "https://r2.thesportsdb.com/images/media/player/thumb/8zc75u1571808851.jpg/small",
    },
    {
      name: "Cristiano Ronaldo",
      nation: "Portugal",
      img: "https://r2.thesportsdb.com/images/media/player/thumb/bkre241600892282.jpg/small",
    },
    {
      name: "Diego Maradona",
      nation: "Argentina",
      img: "https://r2.thesportsdb.com/images/media/player/thumb/z4v3ox1515072958.jpg/small",
    },
    {
      name: "Lionel Messi",
      nation: "Argentina",
      img: "https://r2.thesportsdb.com/images/media/player/thumb/kpfsvp1725295651.jpg/small",
    },
    {
      name: "Ronaldo Nazário",
      nation: "Brazil",
      img: "https://r2.thesportsdb.com/images/media/player/thumb/4gy0lh1662473910.jpg/small",
    },
    {
      name: "Zinedine Zidane",
      nation: "France",
      img: "https://r2.thesportsdb.com/images/media/player/thumb/trvvrs1474915622.jpg/small",
    },
  ];

  container.innerHTML = top6
    .map(
      (p) => `
        <div class="card">
          <img src="${p.img}" alt="${p.name}">
          <h4>${p.name}</h4>
          <p>${p.nation}</p>
        </div>
      `
    )
    .join("");
}
