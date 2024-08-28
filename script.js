 let counter = 0;

 const counterValue = document.getElementById('counter-value');
 const incrementBtn = document.getElementById('increment-btn');
 const decrementBtn = document.getElementById('decrement-btn');
 const resetBtn = document.querySelector('#reset');


incrementBtn.onclick = function() {
    counter++
    counterValue.textContent = counter;
}

decrementBtn.onclick = function() {
    counter--
    counterValue.textContent = counter;
}

resetBtn.onclick = function() {
    counter = 0
    counterValue.textContent = counter;
}