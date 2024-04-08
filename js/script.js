
const contButt = document.querySelector(".container-button-left");
const contOper = document.querySelector(".container-button-rigth");

// ciclo for per creare i bottoni dei numeri
for(let i = 1; i<= 11; i++) {
    const bottoneCall = creaBtnNum(i);
    console.log(bottoneCall);
    contButt.append(bottoneCall);
    
}

// ciclo for per creare i bottoni degli operatori

for (let i = 1; i<=5; i++) {
   const operatori = creaOperatori(i);
   console.log(operatori);
   contOper.append(operatori);
}





