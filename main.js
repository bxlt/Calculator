let first = 0;
let second = 0;
// add = 1, subtract=2, divide=3, multiply=4
let currOpt = 0;
let currValue = 0;
let dot = false;
let disWindow = document.querySelector('#display');

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
    }else if(opt==4){
        res = multiply(num1, num2)
    }else if(opt==3){
        res = divide(num1, num2)
    }
    return res;
}

function clearAll(){
    first=0;
    second=0;
    currOpt=0;
    currValue=0;
    dot=false;
    updateDis(0.0)
}

function updateDis(number){
    disWindow.textContent = number;
}

function countDecimal(number){
    let res = 0;
    let text = number.toString();
    res = text.length - text.indexOf('.');
    return res;
}

function addNum(num){
    if(!dot){
        currValue = currValue*10+num
    } else{
        let currDigit = countDecimal(num)-1;
        currValue = currValue + num/(10**currDigit)
    }
}

function updateCurrVale(num){
    addNum(num);
    disWindow.textContent=currValue;
}

function initEq(){
    document.querySelector('#eq').addEventListener('click',()=>{
        if(currOpt>0){
            second = currValue;
            currValue = operate(first, second, currOpt);
            updateDis(currValue);
            first = currValue
            currValue=0;
            second = 0;
            dot=false;
        }
    })
}

function init(){
    //bind add number for number keys
    for(let i=0;i<10;i++){
        document.querySelector('#n'+i).addEventListener('click',()=>updateCurrVale(i))
    }
    //clear key
    document.querySelector('#clr').addEventListener('click',clearAll);
    
    //bind function to operator key
    let opts = ['add','sub','div','multi']
    for(let i=1;i<5;i++){
        document.querySelector('#' + opts[i-1]).addEventListener('click',()=>{
            currOpt=i;
            first = currValue;
            currValue=0;
            dot=false;
        })
    }

    //dot function
    document.querySelector('#dot').addEventListener('click',()=>{
        dot=true;
    })

    initEq()
}



//initidate calculator
init();