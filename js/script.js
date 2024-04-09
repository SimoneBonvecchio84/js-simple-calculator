//INPUT
const btnTotal = document.querySelector(".same");
const resetBtn = document.querySelector(".c-operator");
const displayIn = document.querySelector(".display-text");
let buttons = document.querySelectorAll(".button-number");
let operator = document.querySelectorAll(".button-operator");
let primoValore = 0;
let secondoValore = 0;
let operatoreValore = "";

//LOGIC
// creo eventi bottoni numeri click

for(let i = 0; i< buttons.length; i++) {
    const valoreBottoni = buttons[i];
    valoreBottoni.addEventListener("click", btnNumeri);     
}

// creo eventi bottoni operatori click

for (let i = 0; i< operator.length; i++) {
   const valoriOperatori = operator[i];
   valoriOperatori.addEventListener("click", operatori);   
}

//OUTPUT
// invoco la funzione btn totale quando premo uguale

btnTotal.addEventListener("click", btnTotale);

// sul pulsante c resetto la calcolatrice

resetBtn.addEventListener("click", function(){
    window.location.reload();
});

























