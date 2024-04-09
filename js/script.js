

const displayIn = document.querySelector(".display-text");

let buttons = document.querySelectorAll(".button-number");
let operator = document.querySelectorAll(".button-operator");
const btnTotal = document.querySelector(".same");
const resetBtn = document.querySelector(".c-operator");
console.log(operator);
let primoValore = 0;
let secondoValore = 0;
let operatoreValore = "";


// creo eventi bottoni operatori click

for (let i = 0; i<4; i++) {
   const valoriOperatori = operator[i];
   valoriOperatori.addEventListener("click", operatori);   
}

// creo eventi bottoni numeri click

for(let i = 0; i< 10; i++) {
    const valoreBottoni = buttons[i];
    valoreBottoni.addEventListener("click", btnNumeri);     
}
// invoco la funzione btn totale quando premo uguale
btnTotal.addEventListener("click", btnTotale);

// sul pulsante c resetto la calcolatrice

resetBtn.addEventListener("click", function(){
    window.location.reload();
});




















