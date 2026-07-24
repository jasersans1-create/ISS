const API_URL = "https://api.wheretheiss.at/v1/satellites/25544";

export async function getISSPosition() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch ISS position");
        }

        const data = await response.json();

        return {
            latitude: data.latitude,
            longitude: data.longitude,
            altitude: data.altitude,
            velocity: data.velocity,
            visibility: data.visibility,
            timestamp: data.timestamp
        };

    } catch (error) {
        console.error(error);
        return null;
    }
}