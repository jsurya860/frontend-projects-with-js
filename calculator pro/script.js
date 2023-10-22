// JavaScript part
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            try {
                const result = calculate(string);
                input.value = result;
                string = result;
            } catch (error) {
                input.value = 'Error';
                string = "";
            }
        } else if (buttonValue === 'AC') {
            string = "";
            input.value = string;
        } else if (buttonValue === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } 
          else if (buttonValue === '%') {
            string += '/100';
            input.value = string;
        } 
        else if (buttonValue === '()') {
            if (string === "" || ['+', '-', '*', '/', '(', ''].includes(string.slice(-1))) {
                string += "(";
            } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ')'].includes(string.slice(-1))) {
                string += ")";
            }
            input.value = string;
        } else {
            string += buttonValue;
            input.value = string;
        }
    })
})

function calculate(expression) {
    return Function(`'use strict'; return (${expression});`)();
}
