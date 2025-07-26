

let display = document.getElementById("display");
let expression = '';

function calculate (value)
{
    if(value === '='){
        try{
            let result = eval(expression);
            display.value = result;
            expression = result.toString();
        }catch(error){
            display.value = 'Error';
            expression = '';
        }
    }
    else{
        expression += value;
        display.value = expression;
    }
}
function clearDisplay(){
    display.value = '';
    expression = '';
}

function backspace(){
    expression = expression.slice(0,-1);
    display.value = expression;
}