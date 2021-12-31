// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');
// const reset = document.getElementById('reset');
// const btns = document.querySelectorAll('.btns');

// let value = 0;


// increase.addEventListener('click', function(){
//   const number = document.getElementById('value');
//   number.innerHTML = value++;
//   if(value > 0) 
//   number.style.color = 'green';
// })

// decrease.addEventListener('click', function(){
//   const number = document.getElementById('value');
//   number.innerHTML = value--;
//   if(value < 0) 
//   number.style.color = 'red';
// })

// reset.addEventListener('click', function(){
//   const number = document.getElementById('value');
//   number.innerHTML = 0;
//   if(value===0){
//     number.style.color = "#222";
//   }  
// })


// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--}
       else if (styles.contains("increase")) {
      count++;
    }
     else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  
  });
});