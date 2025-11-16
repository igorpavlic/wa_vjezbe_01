const express = require('express');
const app = express(); // u varijablu app pohranjujemo objekt koji predstavlja Express aplikaciju
const PORT = 3000; // port na kojem će poslužitelj slušati zahtjeve

app.get('/', (req, res) => {
res.send('Hello, world!');
});

app.listen(PORT, error => {
if (error) {
console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
} else {
console.log(`Server je pokrenut na http://localhost:${PORT}`);
}
});
