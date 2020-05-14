let screen  =   document.getElementById("screen");
let  mainResult  =  document.getElementById("result");
let screenValues = [ ];
let  equalSym  =  document.getElementById("equal");
equalSym.addEventListener("click", getResult);
equalSym.addEventListener("click", toggleDeleteValuesState);

let ternaryOperator = function () {
    deleteValues.value == "<" ?  eraser():  cleanAll();
}
let deleteValues  =  document.getElementById("delete");
deleteValues.addEventListener("click", ternaryOperator);

let button;
let buttons  =  document.querySelectorAll("input");
for (let i = 0;  i  <  buttons.length;  i++)  {
    if (i == 3) continue;
    button  =  buttons[ i ];   
    button.addEventListener('click',  addToScreen);
}

function addToScreen(event)  {
    let newValue = event.target.value;
    //revisar la condicional  de abajo
    if (newValue == "." ) {
            let condition =  screenValues.lastIndexOf("+") || screenValues.lastIndexOf("-") || screenValues.lastIndexOf("*");
            if (typeof screenValues[screenValues.length - 1] == "number" && screenValues.lastIndexOf(".")) {
            screenValues.push('.');
            screen.innerHTML  +=  screenValues[screenValues.length -1];
        }
    }  
    // revisar la condicional de arriba
    if (isNaN(screenValues[screenValues.length -1]) && isNaN(newValue))  ;
    else {
        screenValues.push(newValue);
        screen.innerHTML  +=  screenValues[screenValues.length -1];
    }
}

function  getResult()  {
    mainResult.innerHTML  = eval(screen.innerHTML) ;
    if (screen.innerHTML == "") mainResult.innerHTML = ""; 
}
function eraser() {
      let arr = [];
     let result = "";
     for (let i in screen.innerHTML) arr.push(screen.innerHTML[i]);
     arr.pop();
     for (let i in arr) {
        result += arr[i];
     }
     return screen.innerHTML = result; 
     
}
function toggleDeleteValuesState() {
    deleteValues.value = "C";
}
function cleanAll() {
    screen.innerHTML = "";
    deleteValues.value = "<";
    getResult();
}