let button;
let screen  =   document.getElementById("screen");
let  mainResult  =  document.getElementById("result");
let screenValues = [ ];

let deleteValues  =  document.getElementById("delete");
deleteValues.addEventListener("click", ternaryOperator);

let  equalSym  =  document.getElementById("equal");
equalSym.addEventListener("click", getResult);
window.addEventListener("keydown", addKeyToScreen)
//select all the inputs except the 3rd and add by clicking
let buttons  =  document.querySelectorAll("input");
for (let i = 0;  i  <  buttons.length;  i++)  {
    if (i == 3) continue;
    button  =  buttons[ i ];   
    button.addEventListener('click' ,  addToScreen) 
     
}

//add new values to screen
function addToScreen(event)  {
    let newValue = event.target.value;
    deleteValues.value = "<";
    
    if (isNaN(screenValues[screenValues.length -1]) && isNaN(newValue))  ; else {
        screenValues.push(newValue);
        screen.innerHTML  +=  screenValues[screenValues.length -1];
    }
}

//adding by keyDowning
function addKeyToScreen(event) {
    let newValue = event.key;
    let isLetter = /[a-z]/.test(newValue);
    deleteValues.value = "<";
    if (newValue == "Backspace") eraser();
    else if (newValue == "Enter") {
            getResult();
            deleteValues.value = "C";
    } 
    else if (newValue == "c" && mainResult.innerHTML != "") cleanAll(); 
    else if (isNaN(screenValues[screenValues.length -1]) &&  isNaN(newValue) || isLetter);
    else {
        screenValues.push(newValue);
        screen.innerHTML += screenValues[screenValues.length -1];
        console.log(screenValues);
    }

}
//Get result
function  getResult()  {
    mainResult.innerHTML  = eval(screen.innerHTML) ;
    if (screen.innerHTML == "") mainResult.innerHTML = "";
    deleteValues.value = "C";
}

function ternaryOperator() {
    deleteValues.value == "<" ?  eraser() :  cleanAll();
}

function eraser() {
    let arr = [];
    let result = "";
    for (let i in screen.innerHTML) arr.push(screen.innerHTML[i]);
    arr.pop();
    for (let i in arr) {
        result += arr[i];
    }
    screenValues.pop();
    return screen.innerHTML = result; 
}

function cleanAll() {
    screen.innerHTML = "";
    getResult();
    deleteValues.value = "<";
}