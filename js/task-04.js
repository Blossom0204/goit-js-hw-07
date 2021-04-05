const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const counter = document.querySelector('span')
const spanValue = document.querySelector('#value');
let counterValue=0;
const increment=()=> {
    counterValue +=1;
    spanValue.textContent = counterValue;};
const decrement=()=>{
    counterValue -=1;
    spanValue.textContent = counterValue;};
  incrementBtn.addEventListener('click', increment);
  decrementBtn.addEventListener('click', decrement);