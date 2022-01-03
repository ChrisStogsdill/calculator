const allNumberButtons = document.querySelectorAll('.number-button');
const allOperatorButtons = document.querySelectorAll('.function-button');
const primaryScreen = document.getElementById('screen-primary');
const secondaryScreen = document.getElementById('screen-secondary');
const operationScreen = document.getElementById('screen-operation');
const clearButton = document.getElementById('clear');
const enterButton = document.getElementById('enter');


function numberButtonPress(buttonNumber) {
    primaryScreen.innerText += buttonNumber;
}

function operationButtonPress(operator) {
    //if there is nothing in primary screen, just change operator
    if (primaryScreen.innerText == '') {
        operationScreen.innerText = operator;
    } 
    else {
        //move content to secondary screen
        secondaryScreen.innerText = primaryScreen.innerText;
        primaryScreen.innerText = '';
        //add operator to operator screen
        operationScreen.innerText = operator;
    }
}

//setup number button event listeners
[...allNumberButtons].forEach((button) => {
    button.addEventListener('click', (clickEvent) => {
        numberButtonPress(clickEvent.target.innerText);
    });
});

//setup function button event listeners
[...allOperatorButtons].forEach((button) => {
    button.addEventListener('click', (clickEvent) => {
        operationButtonPress(clickEvent.target.innerText);
    });
});

clearButton.addEventListener('click', () => {
    primaryScreen.innerText = '';
    secondaryScreen.innerText = '';
    operationScreen.innerText = '';
});

enterButton.addEventListener('click',() => {
    let firstValue = secondaryScreen.innerText;
    let secondValue = primaryScreen.innerText;
    if (primaryScreen.innerText == ''){
        return
    }

    switch (operationScreen.innerText) {
        case '+':
            primaryScreen.innerText = addition(firstValue, secondValue);
            secondaryScreen.innerText = '';
            break;
        case '-':
            primaryScreen.innerText = subtraction(firstValue, secondValue);
            secondaryScreen.innerText = '';
            break;
        case '/':
            primaryScreen.innerText = division(firstValue, secondValue);
            secondaryScreen.innerText = '';
            break;
            case '*':
            primaryScreen.innerText = multiplication(firstValue, secondValue);
            secondaryScreen.innerText = '';
            break;
        default:
            break;
    }
})


function addition(a, b) {
    let sum = parseFloat(a) + parseFloat(b);
    return sum;
}
function subtraction(a, b) {
    let output = parseFloat(a) - parseFloat(b);
    return output;
}
function division(a, b) {
    if (parseFloat(b) == 0) {
        return "Sure. Let's implode the universe.";
    }
    else {
        let output = parseFloat(a) / parseFloat(b);
        return output;
    }
}
function multiplication(a, b) {
    let output = parseFloat(a) * parseFloat(b);
    return output;
}



