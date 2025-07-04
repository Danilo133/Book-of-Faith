
const slotMachine = document.getElementById('slotMachine');
const spinButton = document.getElementById('spinButton');
const pauseButton = document.getElementById('pauseButton');
const extraBetButton = document.getElementById('extraBetButton');

document.body.style.backgroundImage = "url('images/book_of_nada.webp')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";
// Slot konfiguracija
const slots = [];
const rows = 3;
let columns = 5;
let spinning = false;
let spinInterval;
const spinDuration = 3500; // Spin duration in milliseconds

const items = [
    "images/vene2.webp",
    "images/vene3.webp",
    "images/nada.webp",
    "images/djole.webp",
    "images/bruno.webp",
    "images/jedanplus.webp",
    "images/jedan.webp",
    "images/jedantacka.webp",
    "images/dvojka.webp",
    "images/trojka.webp"
];

// Initialize the slots
function initializeSlots() {
    slotMachine.innerHTML = ""; // Clear previous slots
    slots.length = 0; // Clear slot array
    for (let i = 0; i < rows * columns; i++) {
        const slot = document.createElement('div');
        slot.className = 'slot';

        // Randomly select an image from items
        const randomItem = items[Math.floor(Math.random() * items.length)];
        slot.style.backgroundImage = `url('${randomItem}')`;
        slot.style.backgroundSize = 'contain';
        slot.style.backgroundPosition = 'center';
        slot.style.backgroundRepeat = 'no-repeat';

        slots.push(slot);
        slotMachine.appendChild(slot);
    }
    slotMachine.style.gridTemplateColumns = `repeat(${columns}, 120px)`;
}
initializeSlots();

// Spin functionality
function spinSlots() {
    slots.forEach(slot => {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        slot.style.backgroundImage = `url('${randomItem}')`;
    });
}

// Start spinning
spinButton.addEventListener('click', () => {
    if (spinning) return;
    spinning = true;
    spinButton.disabled = true;
    spinInterval = setInterval(spinSlots, 100);

    // Stop spinning automatically after spinDuration
    setTimeout(() => {
        clearInterval(spinInterval);
        spinning = false;
        spinButton.disabled = false;

        // Logika dobitka
        const win = Math.random() < 0.001; // 30% šansa za dobitak
        if (win) {
            payout(2); // Primer: isplata sa multiplikatorom 2
            //alert('Congratulations! You won!');
        } else {
           // alert('Better luck next time!');
        }
    }, spinDuration);
});

// Pause spinning
pauseButton.addEventListener('click', () => {
    if (!spinning) return;
    clearInterval(spinInterval);
    spinning = false;
    spinButton.disabled = false;
});

// Extra Bet: Dodaj/ukloni kolonu
let extraColumnAdded = false;
extraBetButton.addEventListener('click', () => {
    if (extraColumnAdded) {
        for (let i = 0; i < rows; i++) {
            const slotIndex = slots.length - rows;
            const slotToRemove = slots[slotIndex];
            slotMachine.removeChild(slotToRemove);
            slots.splice(slotIndex, 1);
        }
        columns -= 1;
        slotMachine.style.gridTemplateColumns = `repeat(${columns}, 120px)`;
        extraColumnAdded = false;
    } else {
        columns += 1;
        for (let i = 0; i < rows; i++) {
            const extraSlot = document.createElement('div');
            extraSlot.className = 'slot';

            const randomItem = items[Math.floor(Math.random() * items.length)];
            extraSlot.style.backgroundImage = `url('${randomItem}')`;
            extraSlot.style.backgroundSize = 'contain';
            extraSlot.style.backgroundPosition = 'center';
            extraSlot.style.backgroundRepeat = 'no-repeat';

            slots.push(extraSlot);
            slotMachine.appendChild(extraSlot);
        }
        slotMachine.style.gridTemplateColumns = `repeat(${columns}, 120px)`;
        extraColumnAdded = true;
    }
});
