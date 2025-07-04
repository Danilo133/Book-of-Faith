/*
document.addEventListener("DOMContentLoaded", () => {
    const playerCreditInput = document.getElementById("playerCredit");
    const startGameButton = document.getElementById("startGame");
    const currentCreditDisplay = document.getElementById("currentCredit");
    const chipSelector = document.getElementById("chipSelector");
    const extraBetButton = document.getElementById("extraBetButton");

    let playerCredit = 0;
    let selectedChip = 0;
    let isExtraBetEnabled = false;

    // Popuni padajući meni za izbor čipa
    const chipValues = [4, 6, 10, 12, 16, 20, 32];
    const populateChipOptions = () => {
        chipSelector.innerHTML = ""; // Resetuj opcije
        const currentChipValues = isExtraBetEnabled ? chipValues.map(value => value * 2) : chipValues;
        currentChipValues.forEach(value => {
            const option = document.createElement("option");
            option.value = value;
            option.textContent = `${value} din`;
            chipSelector.appendChild(option);
        });
        selectedChip = parseInt(chipSelector.value, 10);
    };

    populateChipOptions(); // Inicijalno popunjavanje

    // Funkcija koja proverava da li je validan budžet i omogućava start igre
    const validateBudget = () => {
        const enteredCredit = parseInt(playerCreditInput.value, 10);
        if (isNaN(enteredCredit) || enteredCredit < 200) {
            startGameButton.disabled = true;
            return false;
        }
        startGameButton.disabled = false;
        return true;
    };

    // Event listener za unos budžeta
    playerCreditInput.addEventListener("input", () => {
        validateBudget();
    });

    // Početak igre - validacija budžeta i postavljanje inicijalnih vrednosti
    startGameButton.addEventListener("click", () => {
        if (!validateBudget()) {
            alert("Please enter a valid budget of at least 200 din.");
            return;
        }

        const enteredCredit = parseInt(playerCreditInput.value, 10);
        playerCredit = enteredCredit;
        selectedChip = parseInt(chipSelector.value, 10);

        currentCreditDisplay.textContent = `Credit: ${playerCredit}`;
        alert(`Game started with ${playerCredit} din and chip value ${selectedChip} din.`);
    });

    // Event listener za promenu čipa
    chipSelector.addEventListener("change", () => {
        selectedChip = parseInt(chipSelector.value, 10);
    });

    // Aktivacija/detektovanje "Extra Bet"
    extraBetButton.addEventListener("click", () => {
        isExtraBetEnabled = !isExtraBetEnabled; // Toggle stanje
        populateChipOptions();
    });

    // Funkcionalnost za oduzimanje čipa od budžeta
    const spinButton = document.getElementById("spinButton");
    spinButton.addEventListener("click", () => {
        if (playerCredit >= selectedChip) {
            playerCredit -= selectedChip;
            currentCreditDisplay.textContent = `Credit: ${playerCredit}`;
        }
    });
});
*/




/*
document.addEventListener("DOMContentLoaded", () => {
    const playerCreditInput = document.getElementById("playerCredit");
    const startGameButton = document.getElementById("startGame");
    const currentCreditDisplay = document.getElementById("currentCredit");
    const chipSelector = document.getElementById("chipSelector");
    const extraBetButton = document.getElementById("extraBetButton");
    const spinButton = document.getElementById("spinButton");
    const pauseButton = document.getElementById("pauseButton");

    let playerCredit = 0;
    let selectedChip = 0;
    let isExtraBetEnabled = false;

    // Popuni padajući meni za izbor čipa
    const chipValues = [4, 6, 10, 12, 16, 20, 32];
    const populateChipOptions = () => {
        chipSelector.innerHTML = ""; // Resetuj opcije
        const currentChipValues = isExtraBetEnabled ? chipValues.map(value => value * 2) : chipValues;
        currentChipValues.forEach(value => {
            const option = document.createElement("option");
            option.value = value;
            option.textContent = `${value} din`;
            chipSelector.appendChild(option);
        });
        selectedChip = parseInt(chipSelector.value, 10);
    };

    populateChipOptions(); // Inicijalno popunjavanje

    // Funkcija koja proverava da li je validan budžet i omogućava dugmadi
    const validateBudget = () => {
        const enteredCredit = parseInt(playerCreditInput.value, 10);
        if (isNaN(enteredCredit) || enteredCredit < 200) {
            // Disable all buttons if budget is invalid
            startGameButton.disabled = true;
            spinButton.disabled = true;
            pauseButton.disabled = true;
            extraBetButton.disabled = true;
            return false;
        }
        // Enable buttons if budget is valid
        startGameButton.disabled = false;
        spinButton.disabled = false;
        pauseButton.disabled = false;
        extraBetButton.disabled = false;
        return true;
    };

    // Event listener za unos budžeta
    playerCreditInput.addEventListener("input", () => {
        validateBudget();
    });

    // Početak igre - validacija budžeta i postavljanje inicijalnih vrednosti
    startGameButton.addEventListener("click", () => {
        if (!validateBudget()) {
            alert("Please enter a valid budget of at least 200 din.");
            return;
        }

        const enteredCredit = parseInt(playerCreditInput.value, 10);
        playerCredit = enteredCredit;
        selectedChip = parseInt(chipSelector.value, 10);

        currentCreditDisplay.textContent = `Credit: ${playerCredit}`;
        alert(`Game started with ${playerCredit} din and chip value ${selectedChip} din.`);
    });

    // Event listener za promenu čipa
    chipSelector.addEventListener("change", () => {
        selectedChip = parseInt(chipSelector.value, 10);
    });

    // Aktivacija/detektovanje "Extra Bet"
    extraBetButton.addEventListener("click", () => {
        isExtraBetEnabled = !isExtraBetEnabled; // Toggle stanje
        populateChipOptions();
    });

    // Funkcionalnost za oduzimanje čipa od budžeta
    spinButton.addEventListener("click", () => {
        if (playerCredit >= selectedChip) {
            playerCredit -= selectedChip;
            currentCreditDisplay.textContent = `Credit: ${playerCredit}`;
        }
    });
    
    // Pause functionality (assuming you want to use it later)
    pauseButton.addEventListener("click", () => {
        alert("Game paused.");
    });
});

*/

document.addEventListener("DOMContentLoaded", () => {
    const playerCreditInput = document.getElementById("playerCredit");
    const startGameButton = document.getElementById("startGame");
    const currentCreditDisplay = document.getElementById("currentCredit");
    const chipSelector = document.getElementById("chipSelector");
    const extraBetButton = document.getElementById("extraBetButton");
    const spinButton = document.getElementById("spinButton");
    const pauseButton = document.getElementById("pauseButton");
  //  import { spinReels, checkWins } from './logika.js';

    let playerCredit = 0;
    let selectedChip = 0;
    let isExtraBetEnabled = false;

    // Popuni padajući meni za izbor čipa
    const chipValues = [4, 6, 10, 12, 16, 20, 32];
    
    // Function to update the chip options and disable those that are greater than available credit
    const populateChipOptions = () => {
        chipSelector.innerHTML = ""; // Resetuj opcije
        const currentChipValues = isExtraBetEnabled ? chipValues.map(value => value * 2) : chipValues;

        currentChipValues.forEach(value => {
            const option = document.createElement("option");
            option.value = value;
            option.textContent = `${value} din`;

            // Disable chip options that are larger than the available credit
            if (value > playerCredit) {
                option.disabled = true;
            }

            chipSelector.appendChild(option);
        });

        selectedChip = parseInt(chipSelector.value, 10);
    };

    populateChipOptions(); // Initial chip options

    // Funkcija koja proverava da li je validan budžet i omogućava dugmadi
    const validateBudget = () => {
        const enteredCredit = parseInt(playerCreditInput.value, 10);
        if (isNaN(enteredCredit) || enteredCredit < 200) {
            // Disable all buttons and hide Spin button if budget is invalid
            startGameButton.disabled = true;
            spinButton.disabled = true;  // Disable Spin button
            spinButton.style.display = 'none';  // Hide Spin button
            pauseButton.disabled = true;
            extraBetButton.disabled = false;
            return false;
        }
        // Enable the Start Game button if the budget is valid
        startGameButton.disabled = false;
        return true;
    };

    // Event listener za unos budžeta
    playerCreditInput.addEventListener("input", () => {
        if (!validateBudget()) return;

        const enteredCredit = parseInt(playerCreditInput.value, 10);
        playerCredit = enteredCredit;

        currentCreditDisplay.textContent = `Credit: ${playerCredit}`;

        // Update chip options based on the current credit
        populateChipOptions();
    });

    // Početak igre - validacija budžeta i postavljanje inicijalnih vrednosti
    startGameButton.addEventListener("click", () => {
        if (!validateBudget()) {
            alert("Please enter a valid budget of at least 200 din.");
            return;
        }

        const enteredCredit = parseInt(playerCreditInput.value, 10);
        playerCredit = enteredCredit;
        selectedChip = parseInt(chipSelector.value, 10);

        currentCreditDisplay.textContent = `Credit: ${playerCredit}`;
        alert(`Game started with ${playerCredit} din and chip value ${selectedChip} din.`);

        // After Start Game is clicked, show and enable Spin, Pause, and Extra Bet buttons
        spinButton.style.display = 'inline-block'; // Show Spin button
        spinButton.disabled = false; // Enable Spin button
        pauseButton.disabled = false;
        extraBetButton.disabled = false;
    });

    // Event listener za promenu čipa
    chipSelector.addEventListener("change", () => {
        selectedChip = parseInt(chipSelector.value, 10);
    });

    // Aktivacija/detektovanje "Extra Bet"
    extraBetButton.addEventListener("click", () => {
        isExtraBetEnabled = !isExtraBetEnabled; // Toggle stanje
        populateChipOptions();
    });

    // Funkcionalnost za oduzimanje čipa od budžeta
   /* spinButton.addEventListener("click", () => {
        // Check if the player has enough credit to spin
        if (playerCredit < selectedChip) {
            alert("Nemate dovoljno kredita");
            return; // Prevent the spin action if insufficient credit
        }

        // If there's enough credit, proceed with the spin
        playerCredit -= selectedChip;
        currentCreditDisplay.textContent = `Credit: ${playerCredit}`;
    });*/
    spinButton.addEventListener("click", () => {
        // Proveri da li igrač ima dovoljno kredita za spin
        if (playerCredit < selectedChip) {
            alert("Nemate dovoljno kredita");
            return; // Prekini ako nema dovoljno kredita
        }
    
        // Smanji kredit za vrednost čipa
        playerCredit -= selectedChip;
        currentCreditDisplay.textContent = `Credit: ${playerCredit}`;
    
        // Pokreni spin - generiši simbole na mreži
        const reels = spinReels(); // Funkcija koja generiše simbole na mreži (prethodno definisana)
        console.log("Rezultati spina:", reels);
    
        // Proveri dobitne linije i izračunaj dobitak
        const spinResult = checkWins(reels); // Funkcija za proveru dobitnih linija
        console.log("Rezultat dobitka:", spinResult);
    
        // Dodaj dobitak igračevom kreditu
        playerCredit += spinResult.totalWin;
        currentCreditDisplay.textContent = `Credit: ${playerCredit}`;
    
        // Prikaz rezultata na mreži (HTML prikaz)
        displayReels(reels); // Funkcija koja prikazuje simbole na mreži
    
        // Prikaži poruku za osvojen dobitak
        if (spinResult.totalWin > 0) {
            alert(`Čestitamo! Osvojili ste ${spinResult.totalWin} din.`);
        }
    
        // Ako ima osvojenih besplatnih spinova, prikaži informaciju
        if (spinResult.freeSpins > 0) {
            alert(`Osvojili ste ${spinResult.freeSpins} besplatnih spinova!`);
        }
    });
    

    // Pause functionality (no alert or message)
    pauseButton.addEventListener("click", () => {
        // Just pause the game (no alert or message)
    });
});

