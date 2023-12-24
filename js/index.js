// Initialize and add the map
let map;

async function initMap() {
  // The location
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map
  map = new Map(document.getElementById("location__section-one__container__map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "St.Pril",
  });
}

initMap();