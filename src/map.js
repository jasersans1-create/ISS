import L from "leaflet";

let map;
let marker;

export function initMap() {

    map = L.map("map", {
        zoomControl: false,
        attributionControl: false
    }).setView([20, 0], 2);

    L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
            subdomains: "abcd",
            maxZoom: 20
        }
    ).addTo(map);

    marker = L.marker([0, 0]).addTo(map);

}

export function moveISS(lat, lon) {

    marker.setLatLng([lat, lon]);

    map.panTo([lat, lon], {
        animate: true,
        duration: 1
    });

}