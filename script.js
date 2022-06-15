var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    //alert("AUMENTANDO");

}
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML= currentNumber;
    //alert("DIMINUINDO");
}