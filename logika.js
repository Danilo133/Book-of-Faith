/*
// Paytable sa osnovnim isplatama i bonusima za scatter simbol
const payTable = {
    "/images/nada.webp": {5: 8000, 4: 800, 3: 80, scatterFreeSpins: 10},
    "/images/djole.webp": {5: 20000, 4: 4000, 3: 400, 2: 40},
    "/images/bruno.webp": {5: 8000, 4: 1600, 3: 160, 2: 20},
    "/images/vene2.webp": {5: 3000, 4: 400, 3: 120, 2: 20},
    "/images/vene3.webp": {5: 3000, 4: 400, 3: 120, 2: 20},
    "/images/dvojka.webp": {5: 600, 4: 160, 3: 20},
    "/images/trojka.webp": {5: 600, 4: 160, 3: 20},
    "/images/jedanplus.webp": {5: 400, 4: 100, 3: 20},
    "/images/jedan.webp": {5: 400, 4: 100, 3: 20},
    "/images/jedantacka.webp": {5: 400, 4: 100, 3: 20},
};

// Isplatne linije
const paylines = [
    [0, 1, 2, 3, 4], // Horizontal top
    [5, 6, 7, 8, 9], // Horizontal middle
    [10, 11, 12, 13, 14], // Horizontal bottom
    [0, 6, 12, 8, 4], // V shape
    [10, 6, 2, 8, 14], // Inverted V
    [0, 6, 7, 8, 14], // Z shape
    [10, 6, 7, 8, 4], // Reverse Z
    [0, 1, 7, 13, 14], // Diagonal top-left to bottom-right
    [10, 11, 7, 3, 4], // Diagonal bottom-left to top-right
    [5, 1, 7, 13, 9], // Horizontal middle with diagonal
];

// Opcionlni extra bet
let extraBetEnabled = false;

// Generisanje nasumičnih simbola za spin sa uslovom da "nada" bude samo jednom po koloni
function spinReels() {
    const symbols = Object.keys(payTable); // Lista svih simbola u paytable
    const reels = [];
    
    // Prolazimo kroz 5 kolona
    for (let i = 0; i < 5; i++) {
        let columnSymbols = [];
        const columnUsedSymbols = new Set();

        // Dodajemo nasumične simbole u svaku kolonu, pazeći da "nada" ne bude više puta
        while (columnSymbols.length < 3) { // Svaka kolona ima 3 reda
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];

            // Ako je simbol "nada", proveravamo da li je već korišćen u toj koloni
            if (symbol === "/images/nada.webp" && columnUsedSymbols.has(symbol)) {
                continue; // Preskoči ako je već korišćen u koloni
            }

            // Dodajemo simbol u trenutnu kolonu i obeležavamo ga kao korišćen u toj koloni
            columnSymbols.push(symbol);
            columnUsedSymbols.add(symbol);
        }

        // Dodajemo ovu kolonu u sve kolone
        reels.push(columnSymbols);
    }

    return reels;
}

// Provera dobitnih linija
function checkWins(reels) {
    let totalWin = 0;
    let freeSpins = 0;

    // Ako je uključen extra bet, povećaj multiplikator za dobitke
    const multiplier = extraBetEnabled ? 2 : 1;

    // Prolazimo kroz sve dobitne linije
    paylines.forEach((line) => {
        const lineSymbols = line.map((index) => reels[Math.floor(index / 3)][index % 3]); // Izvlačenje simbola iz kolona
        const symbol = lineSymbols[0];

        // Ako simbol nije u payTable, preskoči
        if (!payTable[symbol]) return;

        let count = 1;
        // Prolazimo kroz liniju i brojimo koliko puta se ponavlja simbol
        for (let i = 1; i < lineSymbols.length; i++) {
            if (lineSymbols[i] === symbol) {
                count++;
            } else {
                break;
            }
        }

        // Ako imamo dobitak za određeni broj simbola, dodajemo u ukupnu isplatu
        if (payTable[symbol][count]) {
            totalWin += payTable[symbol][count] * multiplier;

            // Ako je simbol "/images/nada.webp" i imamo 3 ili više simbola, dodeljujemo besplatne spinove
            if (symbol === "/images/nada.webp" && count >= 3) {
                freeSpins += payTable[symbol].scatterFreeSpins;
            }
        }
    });

    // Vraćamo ukupan dobitak i besplatne spinove
    return { totalWin, freeSpins };
}

// Funkcija za pokretanje igre
function playGame() {
    const reels = spinReels(); // Simulacija spina
    console.log("Reels:", reels);

    const result = checkWins(reels); // Provera dobitnih linija
    console.log("Total Win:", result.totalWin);
    console.log("Free Spins:", result.freeSpins); // Prikaz besplatnih spinova
}

// Funkcija za uključivanje ili isključivanje extra bet opcije
function toggleExtraBet(isEnabled) {
    extraBetEnabled = isEnabled;
}

// Test sa uključenim extra betom
toggleExtraBet(true);  // Uključen extra bet
playGame();

// Test bez extra bet-a
toggleExtraBet(false);  // Isključen extra bet
playGame();
*/
const payTable = {
    "/images/nada.webp": {5: 8000, 4: 800, 3: 80, scatterFreeSpins: 15},
    "/images/djole.webp": {5: 20000, 4: 4000, 3: 400, 2: 40},
    "/images/bruno.webp": {5: 8000, 4: 1600, 3: 160, 2: 20},
    "/images/vene2.webp": {5: 3000, 4: 400, 3: 120, 2: 20},
    "/images/vene3.webp": {5: 3000, 4: 400, 3: 120, 2: 20},
    "/images/dvojka.webp": {5: 600, 4: 160, 3: 20},
    "/images/trojka.webp": {5: 600, 4: 160, 3: 20},
    "/images/jedanplus.webp": {5: 400, 4: 100, 3: 20},
    "/images/jedan.webp": {5: 400, 4: 100, 3: 20},
    "/images/jedantacka.webp": {5: 400, 4: 100, 3: 20},
};

const paylines = [
    [0, 1, 2, 3, 4], // Horizontal top
    [5, 6, 7, 8, 9], // Horizontal middle
    [10, 11, 12, 13, 14], // Horizontal bottom
    [0, 6, 12], // Vertical bonus
];

let extraBetEnabled = false;
let spinsCounter = 0; // Broj spina za pravilo sa 3 "nade"

function spinReels() {
    const symbols = Object.keys(payTable); // Lista svih simbola u payTable
    const reels = []; // Sadrži sve kolone

    for (let col = 0; col < 5; col++) { // 5 kolona
        const columnSymbols = [];
        let nadaUsed = false; // Flag za "nada"
        let djoleUsed = false; // Flag za "djole"

        while (columnSymbols.length < 3) { // Svaka kolona ima 3 simbola
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];

            // Proveravamo pravilo: "nada" i "djole" samo jednom po koloni
            if ((symbol === "/images/nada.webp" && nadaUsed) || 
                (symbol === "/images/djole.webp" && djoleUsed)) {
                continue; // Preskoči ako je simbol već dodat
            }

            // Dodaj simbol u kolonu
            columnSymbols.push(symbol);

            // Ako je dodat "nada" ili "djole", ažuriramo flag
            if (symbol === "/images/nada.webp") nadaUsed = true;
            if (symbol === "/images/djole.webp") djoleUsed = true;
        }

        // Dodaj trenutnu kolonu u matricu
        reels.push(columnSymbols);
    }

    // Pravilo: Ako je 75. spin, osiguravamo da postoje barem 3 "nade"
    if (spinsCounter % 75 === 0) {
        let nadaCount = 0;
        reels.forEach((column) => {
            nadaCount += column.filter((symbol) => symbol === "/images/nada.webp").length;
        });

        if (nadaCount < 3) {
            let added = 0;
            for (let col = 0; col < 5 && added < (3 - nadaCount); col++) {
                if (!reels[col].includes("/images/nada.webp")) {
                    reels[col][0] = "/images/nada.webp"; // Dodajemo "nada" u prvi red
                    added++;
                }
            }
        }
    }

    return reels;
}

function checkWins(reels) {
    let totalWin = 0;
    let freeSpins = 0;

    const multiplier = extraBetEnabled ? 2 : 1;

    paylines.forEach((line) => {
        const lineSymbols = line.map((index) => reels[Math.floor(index / 3)][index % 3]);
        const symbol = lineSymbols[0];

        if (!payTable[symbol]) return;

        const count = lineSymbols.filter((s) => s === symbol).length;

        if (payTable[symbol][count]) {
            totalWin += payTable[symbol][count] * multiplier;
        }

        // Dodaj 10 besplatnih spinova ako su 3 ili više "nade"
        if (symbol === "/images/nada.webp" && count >= 3) {
            freeSpins += 10;
        }
    });

    return { totalWin, freeSpins };
}

function playGame() {
    spinsCounter++;
    const reels = spinReels();
    console.log("Reels:", reels);

    const result = checkWins(reels);
    console.log("Total Win:", result.totalWin);
    console.log("Free Spins:", result.freeSpins);
}

function toggleExtraBet(isEnabled) {
    extraBetEnabled = isEnabled;
}

// Test
toggleExtraBet(true);
playGame();
toggleExtraBet(false);
playGame();

