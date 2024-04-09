
function btnNumeri() {
    if(displayIn.innerHTML.length <=6) {
        // dammi il valore di questo pulsante cliccato e salvalo nel display
        displayIn.innerHTML += this.innerHTML;
    } 
   
}

function operatori () {
    // salvo il valore display in primo valore
    primoValore = parseInt(displayIn.innerHTML);
    displayIn.innerHTML = "";
    console.log(primoValore , "primo valore");
    // dammi il valore di questo pulsante cliccato e salvalo nella variabile operatoreValore
    operatoreValore = this.innerHTML;
    console.log(operatoreValore);

}
// faccio operazioni algebriche e do totale al display

function btnTotale() {   
    secondoValore = parseInt(displayIn.innerHTML);
    console.log(secondoValore);
    switch(operatoreValore) {
        case "+":risultato = primoValore + secondoValore; break;
        case "-":risultato = primoValore - secondoValore; break;         
        case "*":risultato = primoValore * secondoValore; break;           
        case "/":risultato = primoValore / secondoValore; break;   
    }
    
    displayIn.innerHTML = risultato;
}



