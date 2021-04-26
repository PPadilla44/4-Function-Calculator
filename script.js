var pressOp = false;

var input1 = "";
var input2 = "";

var op = false;

var total = 0;

var display = document.getElementById("display");


function press(element,input) {

    element.style.backgroundColor = "rgb(130, 130, 130)";
    setTimeout( function changeColor(){ 
    element.style.backgroundColor = "rgb(97, 97, 97)";

    }, 125);
    if(!pressOp) {
        input1 += input
        display.innerHTML = input1;
    } else if (pressOp){
        input2 += input;
        display.innerHTML = input2;
    }
}


function setOP(element, operator) {
    element.style.backgroundColor = "rgb(255, 180, 30)";
    setTimeout( function changeColor(){ 
    element.style.backgroundColor = "rgb(255, 152, 17)";
    }, 125);

    op = operator
    pressOp = true
}

function calculate(element) {
    element.style.backgroundColor = "rgb(237, 237, 237)";
    setTimeout( function changeColor(){ 
    element.style.backgroundColor = "rgb(207, 207, 207)";
    }, 125);

    var input1Num =  parseFloat(input1);
    var input2Num = parseFloat(input2);

    if(op == "/") {
        total = input1Num / input2Num;
    } else if(op == "*"){
        total = input1Num * input2Num;
    } else if (op == "-") {
        total = input1Num - input2Num;
    } else if(op == "+"){
        total = input1Num + input2Num;
    } else {
        total = "0"
    }

    total = total.toString()

    if(total.length > 9) {
        display.innerHTML = total.substring(0,9) + "...";
    } else {
        display.innerHTML = total;
    }
    input1 = total;
    input2 = "";
    
}

function clr(element) {
    element.style.backgroundColor = "rgb(130, 130, 130)"
    setTimeout( function changeColor(){ 
    element.style.backgroundColor = "rgb(97, 97, 97)"
    }, 125);
    display.innerHTML = "0";
    input1 = "";
    input2 = "";
    pressOp = false;
}