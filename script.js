var pressOp = false;

var input1 = "";
var input2 = "";

var op = false;

var total = 0;

var display = document.getElementById("display");

function press(input) {
    if(!pressOp) {
        input1 += input
        display.innerHTML = input1;
    } else if (pressOp){
        input2 += input;
        display.innerHTML = input2;
    }
}


function setOP(operator) {
    op = operator
    pressOp = true
}

function calculate() {
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
        display.innerHTML = total
    }
    input1 = total;
    input2 = "";
    
}

function clr() {
    display.innerHTML = "0";
    input1 = "";
    input2 = "";
    pressOp = false;
}