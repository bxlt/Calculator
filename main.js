let first = 0;
let second = 0;
// add = 1, subtract=2, divide=3, multiply=4
let currOpt = 0;

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function add(a,b){
    return roundToTwo(a+b);
}

function subtract(a,b){
    return roundToTwo(a-b);
}

function multiply(a,b){
    return roundToTwo(a*b);
}

function divide(a,b){
    res = 0;
    if(b==0){
        res = NaN;
    }else if(a!=0){
        res = roundToTwo(a/b)
    }
    return res;
}

function operate(num1, num2,opt){
    let res;
    if(opt==1){
        res = add(num1,num2)
    }else if (opt==2){
        res = subtract(num1, num2)
    }else if(opt==3){
        res = multiply(num1, num2)
    }else if(opt==4){
        res = divide(num1, num2)
    }
    return res;
}