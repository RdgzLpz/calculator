let screen;
function start( ) {
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

    if (isNumber) addToScreen( input );
}

function handleInputByKeyboard(event) {
    let input = event.key;
    let isNumber = /\d/.test( input );
    if (isNumber)  addToScreen(input);
}
/*  Add values to screen  */
function addToScreen (input ) {
    screen.innerHTML += input;
}

window.addEventListener('load', start);