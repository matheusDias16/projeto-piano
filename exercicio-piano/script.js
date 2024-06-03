const teclas = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__teclas');
const botao = document.querySelector('.botao');
const teclasSection = document.querySelector('.piano__teclas');

const tocarNota = (note) => {
    const audio = new Audio(`./notes/${note}.wav`);
    console.log(note);
    audio.play();
}

const mouseParaBaixo = (key) => {
    tocarNota(key.getAttribute('data-note'));

    if (key.className.includes('preta')) {
        key.classList.add('preta--pressed');
        return;
    }

    key.style.background = '#ddd';
}

const mouseParaCima = (key) => {

    if (key.className.includes('preta')) {
        key.classList.remove('preta--pressed');
        return;
    }

    key.style.background = 'white';
}

teclas.forEach((key) => {
    key.addEventListener('mousedown', () => mouseParaBaixo(key))
    key.addEventListener('mouseup', () => mouseParaCima(key))
});

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        botao.classList.add('botao--active');
        teclasSection.classList.remove('disabled-teclas');
        return;
    }

    botao.classList.remove('botao--active');
    teclasSection.classList.add('disabled-teclas');
});

const teclasDeBaixo = {
    "Tab": () => mouseParaBaixo(teclas[0]),
    "1": () => mouseParaBaixo(teclas[1]),
    "q": () => mouseParaBaixo(teclas[2]),
    "2": () => mouseParaBaixo(teclas[3]),
    "w": () => mouseParaBaixo(teclas[4]),
    "e": () => mouseParaBaixo(teclas[5]),
    "4": () => mouseParaBaixo(teclas[6]),
    "r": () => mouseParaBaixo(teclas[7]),
    "5": () => mouseParaBaixo(teclas[8]),
    "t": () => mouseParaBaixo(teclas[9]),
    "6": () => mouseParaBaixo(teclas[10]),
    "y": () => mouseParaBaixo(teclas[11]),
    "u": () => mouseParaBaixo(teclas[12]),
    "8": () => mouseParaBaixo(teclas[13]),
    "i": () => mouseParaBaixo(teclas[14]),
    "9": () => mouseParaBaixo(teclas[15]),
    "o": () => mouseParaBaixo(teclas[16]),
    "p": () => mouseParaBaixo(teclas[17]),
    "-": () => mouseParaBaixo(teclas[18]),
    "[": () => mouseParaBaixo(teclas[19]),
    "=": () => mouseParaBaixo(teclas[20]),
    "]": () => mouseParaBaixo(teclas[21]),
    "Backspace": () => mouseParaBaixo(teclas[22]),
    "\\": () => mouseParaBaixo(teclas[23]),
}

const teclasDeCima = {
    "Tab": () => mouseParaCima(teclas[0]),
    "1": () => mouseParaCima(teclas[1]),
    "q": () => mouseParaCima(teclas[2]),
    "2": () => mouseParaCima(teclas[3]),
    "w": () => mouseParaCima(teclas[4]),
    "e": () => mouseParaCima(teclas[5]),
    "4": () => mouseParaCima(teclas[6]),
    "r": () => mouseParaCima(teclas[7]),
    "5": () => mouseParaCima(teclas[8]),
    "t": () => mouseParaCima(teclas[9]),
    "6": () => mouseParaCima(teclas[10]),
    "y": () => mouseParaCima(teclas[11]),
    "u": () => mouseParaCima(teclas[12]),
    "8": () => mouseParaCima(teclas[13]),
    "i": () => mouseParaCima(teclas[14]),
    "9": () => mouseParaCima(teclas[15]),
    "o": () => mouseParaCima(teclas[16]),
    "p": () => mouseParaCima(teclas[17]),
    "-": () => mouseParaCima(teclas[18]),
    "[": () => mouseParaCima(teclas[19]),
    "=": () => mouseParaCima(teclas[20]),
    "]": () => mouseParaCima(teclas[21]),
    "Backspace": () => mouseParaCima(teclas[22]),
    "\\": () => mouseParaCima(teclas[23]),
}

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    teclasDeBaixo[event.key]()
});

document.addEventListener('keyup', (event) => {
    teclasDeCima[event.key]()
});