const monumenti = [
    { nome: "Colosseo", lat: 41.8902, lng: 12.4922 },
    { nome: "Pantheon", lat: 41.8986, lng: 12.4769 },
    { nome: "Fontana di Trevi", lat: 41.9009, lng: 12.4833 },
    { nome: "Piazza Navona", lat: 41.8991, lng: 12.4733 },
    { nome: "Altare della Patria", lat: 41.8948, lng: 12.4839 },
    { nome: "Castel Sant'Angelo", lat: 41.9029, lng: 12.4664 },
    { nome: "Bocca della Verità", lat: 41.8882, lng: 12.4818 },
    { nome: "Terme di Caracalla", lat: 41.8793, lng: 12.4925 }
];

function aggiungiMonumenti(mappa) {
    monumenti.forEach(mon => {
        L.marker([mon.lat, mon.lng])
            .addTo(mappa)
            .bindPopup("<b>" + mon.nome + "</b>");
    });
}

function mostraStatisticheMonumenti() {
    alert("Numero di monumenti mostrati sulla mappa: " + monumenti.length);
}