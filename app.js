let output = document.getElementById('display');

document.addEventListener('keydown', (event) => {
    const buttons = document.querySelectorAll('button');
    for (let button of buttons) {
        if (event.key == '=') calculate();
        if (event.key == button.textContent && event.key != '=') display(button.textContent);
        if (event.key == 'c') clearAll();
    }
})

function display(input) {
    output.value += input;
}

function clearAll() {
    output.value = '';
}

function calculate() {
    try {
        let result = eval(output.value);
        if (result == Infinity) {
            throw new Error('division by 0');
        }
        else {output.value = result;}
        
    }
    catch(error) {
        output.value = 'SyntaxError';
    }
}