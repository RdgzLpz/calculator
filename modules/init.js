// Refs
let button;
const screen  =   document.querySelector("#screen");
const  mainResult  =  document.querySelector("#result");
let screenValues = [ ];

let deleteValues  =  document.querySelector("#delete");
deleteValues.addEventListener("click", ternaryOperator);

let  equalSym  =  document.querySelector("#equal");
equalSym.addEventListener("click", getResult);
window.addEventListener("keydown", addKeyToScreen)
//select all the inputs except the 3rd and add by clicking
let buttons  =  document.querySelectorAll("input");
for (let i = 0;  i  <  buttons.length;  i++)  {
    if (i == 3) continue;
    button  =  buttons[ i ];   
    button.addEventListener('click' ,  addToScreen) 
     
}
/******************************************************************************************************************************************
 *      *         FUNCTIONALITY
******************************************************************************************************************************************/

//add new values to screen
function addToScreen(event)  {
    let newValue = event.target.value;
    // scientist math ( tries )
    if (newValue == "tan(") {
        screenValues.push(Math.tan());
         screen.innerHTML  +=  screenValues[screenValues.length -1];
    } ;
    // control acess
    if (isNaN(screenValues[screenValues.length -1]) && isNaN(newValue))  ; else {
        screenValues.push(newValue);
        screen.innerHTML  +=  screenValues[screenValues.length -1];
       ifScreenValuesChangeEval();
    }
    if ( screenValues.length >= 36 ) calcScreenFontSize();
    deleteValues.value = "<";
}

//add by keyDowning
function addKeyToScreen(event) {
    let newValue = event.key;
    let isLetter = /[a-z]/.test(newValue);
    deleteValues.value = "<";
    if (newValue == "Backspace") {
        eraser();
        if ( screenValues.length >= 18 )calcScreenFontSize();
        ifScreenValuesChangeEval();
    }
    else if (newValue == "Enter") {
            getResult();
            deleteValues.value = "C";
    }                               
    else if (
        newValue == "c" &&
        screen.innerHTML != "" &&
        mainResult.innerHTML == ""
    ) cleanAll(); 
    else if (isNaN(screenValues[screenValues.length -1]) &&  isNaN(newValue) || isLetter);
    else {
        if (screenValues.length >= 36) calcScreenFontSize();
        screenValues.push(newValue);
        screen.innerHTML += screenValues[screenValues.length -1];
    }
   if ( eval( screen.innerHTML ) != screen.innerHTML && screen.innerHTML != "" ) ifScreenValuesChangeEval();
}
    
//if the values on screen change: eval
const ifScreenValuesChangeEval = () => {
    if  (  screen.innerHTML == "" &&
            screenValues.indexOf("+") == -1 &&
            screenValues.indexOf("-") == -1 &&
            screenValues.indexOf("*") == -1 
        ) mainResult.innerHTML = ""; 
    else if  ( eval(screen.innerHTML) != screen.innerHTML ) mainResult.innerHTML = eval(screen.innerHTML);
} 

//Get result
function  getResult()  {
    screen.innerHTML = eval(screen.innerHTML);
    mainResult.innerHTML = "";
    screen.className = "showing-result";
    mainResult.className = "showing-result";
    deleteValues.value = "C";
}

function ternaryOperator() {
    if ( deleteValues.value == "<" ) {
        eraser();
        ifScreenValuesChangeEval();
    }  else cleanAll();
}

function eraser( ) {
    let arr = [ ];
    let result = "";
    for (let i in screen.innerHTML) arr.push(screen.innerHTML[i]);
    arr.pop( );
    for (let i in arr) {
        result += arr[i];
    }
    screenValues.pop( );
    if ( screenValues.length >= 29 ) calcScreenFontSize();
    return screen.innerHTML = result; 
}

function cleanAll() {
    screen.innerHTML = "";
    mainResult.innerHTML = "";
    deleteValues.value = "<";
    screenValues = [  ];
    screen.className ="no-showing-result";
    mainResult.className ="no-showing-result";
    calcScreenFontSize();
}
// calc screen's fontSize
function calcScreenFontSize() {
    if ( screen.innerHTML =="" ) screen.style.fontSize = "1.5rem";
     switch (innerWidth) {
         case innerWidth < 599 :
             screen.style.fontSize = 27
             break;
     
         default:
             break;
     }   
        let size =  35 * 1.5 / screenValues.length;
        screen.style.fontSize  = size + "rem"; 
    }