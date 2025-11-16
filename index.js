const express = require('express');
const path = require('path');
const app = express(); // u varijablu app pohranjujemo objekt koji predstavlja Express aplikaciju
const PORT = 3000; // port na kojem će poslužitelj slušati zahtjeve

// Polje korisnika
const korisnici = [
    {
        korisnicko_ime: "pero_peric",
        lozinka: "password123",
        email: "pperic@gmail.com"
    },
    {
        korisnicko_ime: "ana_anic",
        lozinka: "ana2024",
        email: "aanic@gmail.com"
    },
    {
        korisnicko_ime: "marko_maric",
        lozinka: "marko456",
        email: "mmaric@gmail.com"
    }
];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Nova GET ruta /about
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Nova GET ruta /users
app.get('/users', (req, res) => {
    res.json(korisnici);
});

app.listen(PORT, error => {
if (error) {
console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
} else {
console.log(`Server je pokrenut na http://localhost:${PORT}`);
}
});
