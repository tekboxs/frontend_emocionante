const elements = {
    red:    document.getElementById("red"),
    green:  document.getElementById("green"),
    blue:   document.getElementById("blue"),
    yellow: document.getElementById("yellow"),
};

const resultado = document.querySelector('.resultado-erro');
const colors = Object.keys(elements);

let sequence = [];
let playerIndex = 0;
let locked = true;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function flash(color, ms) {
    elements[color].style.boxShadow = `0 0 20px ${color}`;
    await delay(ms);
    elements[color].style.boxShadow = "none";
}

async function playSequence() {
    locked = true;
    for (const color of sequence) {
        await flash(color, 600);
        await delay(200);
    }
    locked = false;
}

async function startRound() {
    playerIndex = 0;
    sequence.push(colors[Math.floor(Math.random() * colors.length)]);
    await delay(500);
    await playSequence();
}

async function handleClick(color) {
    if (locked) return;
    locked = true;

    await flash(color, 400);

    if (color !== sequence[playerIndex]) {
        resultado.textContent = "Você Morreu!";
        return;
    }

    playerIndex++;

    if (playerIndex < sequence.length) {
        locked = false;
        return;
    }

    resultado.textContent = "Você acertou!";
    await startRound();
}

colors.forEach(color => {
    elements[color].addEventListener('click', () => handleClick(color));
});

startRound();
