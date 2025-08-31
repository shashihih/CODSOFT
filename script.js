//grt referance to display input and all buttons

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

//string store current value/expression gave by user
let currentValue = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === "C") {
            currentValue = "";
            display.value = "";
        } 
        else if (value === "=") {
            try {
                display.value = eval(currentValue) || "0";
                currentValue = display.value;
            } catch {
                display.value = "Error";
                currentValue = "";
            }
        } 
        else {
            currentValue += value;
            display.value = currentValue;
        }
    });
});
