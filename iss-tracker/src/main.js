import "./style.css";
import "leaflet/dist/leaflet.css";
import { updateISS } from "./tracker";

import { initMap } from "./map";

const starfield = document.getElementById("starfield");

const STAR_COUNT = 500;

const colors = [
  "#FFFFFF",
  "#E8F1FF",
  "#D6E8FF",
  "#FFF8D6"
];

for (let i = 0; i < STAR_COUNT; i++) {

  const star = document.createElement("div");

  star.classList.add("star");

  const size = Math.random() * 2.5 + 0.5;

  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  star.style.background =
    colors[Math.floor(Math.random() * colors.length)];

  star.style.animationDuration =
    `${2 + Math.random() * 5}s`;

  star.style.animationDelay =
    `${Math.random() * 5}s`;

  starfield.appendChild(star);
  
  
}
initMap();
updateISS();

setInterval(updateISS, 5000);