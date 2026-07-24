export function displayCrew(crew) {

    const container = document.getElementById("crew");

    container.innerHTML = "";

    crew.forEach(person => {

        const card = document.createElement("div");

        card.className = "crew-card";

        card.innerHTML = `

        <img
class="astronaut-img"
src="${person.image}"
onerror="this.src='https://www.nasa.gov/wp-content/uploads/2023/03/astronaut.jpg'"
>

        <h3>${person.name}</h3>

        <p>${person.country}</p>

        <p>🚀 ${person.mission}</p>

        <p>🕒 ${person.days}</p>

        <p>🌍 Orbit tracking active</p>

        `;


        container.appendChild(card);

    });

}