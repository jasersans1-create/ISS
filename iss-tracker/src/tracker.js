import { getISSPosition } from "./api";
import { moveISS } from "./map";

export async function updateISS() {

    const iss = await getISSPosition();

    if (!iss) return;

    moveISS(iss.latitude, iss.longitude);

    document.getElementById("latitude").textContent =
        `${iss.latitude.toFixed(2)}°`;

    document.getElementById("longitude").textContent =
        `${iss.longitude.toFixed(2)}°`;

    document.getElementById("speed").textContent =
        `${Math.round(iss.velocity)} km/h`;

    document.getElementById("altitude").textContent =
        `${Math.round(iss.altitude)} km`;

}