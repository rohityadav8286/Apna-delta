const mapElement = document.getElementById('map');

if (mapElement) {
    const listingLat = parseFloat(mapElement.dataset.lat) || 19.0760;
    const listingLng = parseFloat(mapElement.dataset.lng) || 72.8777;
    const title = mapElement.dataset.title || "Listing Location";
    const location = mapElement.dataset.location || "";

    const map = L.map('map', {
        scrollWheelZoom: false
    }).setView([listingLat, listingLng], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    L.marker([listingLat, listingLng])
        .addTo(map)
        .bindPopup(`<b>${title}</b><br>${location}`)
        .openPopup();
}