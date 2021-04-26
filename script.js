console.log("WORKING");

var input1 = "";
var input2 = ""
var pressOp = false;
var pressCalc = false

var op;
var total = 0;

var display = document.getElementById("display");



function press(input) {
    pressCalc = false
    if(!pressOp) {
        input1 += input
        display.innerHTML = input1;
        console.log("input11")
    } else if (pressOp){
    input2 += input;
    display.innerHTML = input2;
    console.log("input22")
    }

}




function setOP(operator) {
    op = operator
    pressOp = true
}

function calculate() {
    console.log(input1)
    console.log(input2)
    var input1Num =  parseFloat(input1);
    var input2Num = parseFloat(input2);

    if(op == "/") {
        total = input1Num / input2Num;
    } else if(op == "*"){
        total = input1Num * input2Num;
    } else if (op == "-") {
        total = input1Num - input2Num;
    } else {
        total = input1Num + input2Num;
    }
    
    display.innerHTML = total;
    total = parseFloat(total);

    input1 = total;
    input2 = "";
}
