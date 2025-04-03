let output = document.getElementById('display');

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