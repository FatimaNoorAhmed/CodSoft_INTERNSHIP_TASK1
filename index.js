const screen = document.getElementById('Screen');
const buttons = document.querySelectorAll('button');
let screenValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        if (buttonText === 'C') {
            clearScreen();
        } else if (buttonText === '=') {
            calculateResult();
        } else {
            appendToScreen(buttonText);
        }
    });
});

function clearScreen() {
    screenValue = '';
    updateScreen();
}

function calculateResult() {
    try {
        screenValue = eval(screenValue);
        updateScreen();
    } catch (error) {
        screenValue = 'Error';
        updateScreen();
    }
}

function appendToScreen(text) {
    screenValue += text;
    updateScreen();
}

function updateScreen() {
    screen.value = screenValue;
}
