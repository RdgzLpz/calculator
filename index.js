let screen,
       result,
       screenValues = [ ];

function start( ) {
    result = document.querySelector("#result");
    screen = document.querySelector('#screen');
    let buttons = document.querySelectorAll('button');

    window.addEventListener('keydown', handleInputByKeyboard);

    for (let i in buttons) {
        buttons[ i ].addEventListener('click', handleInput);
    } 

}
/*  Handle inputs */
function handleInput(event) {       
    let input = event.target.innerHTML;
    let isNumber = /\d/.test( input );
    let isOperator = /[+-×÷]/.test(input);
    let backspace = input === '&lt;';
    let getResultButton = input === '=';

    if (isNumber) addToScreen( input );

    else if ( backspace ) {
        eraser( );
        if (screen.innerHTML == '') result.innerHTML = '';
    }

    else if ( getResultButton ) {
        screen.innerHTML === '' ?  result= ''  :  getResult( );
    }

    else if ( isNaN(screenValues[screenValues.length -1]) && isNaN(input) ) ;

    else if (isOperator) addToScreen(input);


}

function handleInputByKeyboard(event) {
    let input = event.key;
    let isNumber = /\d/.test( input );
    let isOperator = /[+-×÷]/.test(input);
    let backspace = /Backspace/.test( input );
    let getResultButton = input === 'Enter';

    if (isNumber)  addToScreen(input);

    else if ( backspace ) {
        eraser( );
        calcFontSize( );
    }
    
    else if ( getResultButton ) getResult( );

    else if ( isNaN(screenValues[screenValues.length -1]) && isNaN(input) ) ;

    else if ( isOperator ) addToScreen( input );

}
/*  Add values to screen  */
function addToScreen (input ) {
    if ( input === '×' ) {
        screenValues.push( '*' );
        screen.innerHTML +=  '×'; 
    }
     else if ( input === '÷' ) {
        screenValues.push( '/' );
        screen.innerHTML +=  '÷'; 
    }
    else {
        screenValues.push(input);
        screen.innerHTML += screenValues[screenValues.length -1];
    }   
}

function getResult() {
    result.innerHTML = '';
   
    let count = '';
    for (let i = 0; i < screenValues.length; i++) {
        count += screenValues[ i ];
    }

    result.innerHTML += eval(count);
}
function eraser( ) {
    let arr = [ ];
    let result = "";
    for (let i in screen.innerHTML) arr.push(screen.innerHTML[i]);
    arr.pop( );
    for (let i in arr) {
        result += arr  [ i ];
    }
    screenValues.pop( );
    
    return screen.innerHTML = result; 
}

window.addEventListener('load', start);