function creaBtnNum(numeri) {
  const divElem = document.createElement("button");
  divElem.classList.add("button-number");
  divElem.innerHTML = numeri;
  if(numeri === 10){
    divElem.classList.add("zero");
    divElem.innerHTML = "0"
  } else if (numeri === 11) {
      divElem.classList.add("same");
      divElem.innerHTML = "=";

  } 
  return divElem;
}


function creaOperatori(operatori) {
    const divOper = document.createElement("button");
    divOper.classList.add("button-operator");
    divOper.innerHTML = operatori

    if(operatori === 1) {
        divOper.classList.add("c-perator");
        
       
    }

    switch (operatori) {
        case 1 :
            divOper.innerHTML = "c";
            break;
            
        case 2:
            divOper.innerHTML = "+"; 
            break;   
        
        case 3:
            divOper.innerHTML = "-"; 
            break;   
        
        case 4:
            divOper.innerHTML = "x"; 
            break;   
        
        case 5:
            divOper.innerHTML = "/"; 
            break;   
    }



    return divOper;
}