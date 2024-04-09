#SIMPLE CALCULATOR

La nostra calcolatrice deve fare i calcoli tra numeri interi. Quindi l'utente inserisce le cifre del primo numero, dopo dovrà cliccare sull'operazione, poi inserirà le cifre del secondo numero e infine dovrà cliccare sul tasto uguale per vedere il risultato.
Non si può applicare più di un operazione alla volta

Svolgimento.

creo ciclo for per creare tasti della calcolatrice che vanno da 1 a 9.

- creo variabile divElem nella quale grazie a document.cerateElement creo nel html un tag "button"

- al nodo al quale è collegato divElem tramite classList.add associo la classe "button-number".

- divElem.innerHTML = numeri (bottoneCall del mio script) ovvero il parametro della mia funzione mi permettera di stampare in pagina il valore numerico associato al tasto della calcolatrice.

- creo una funzione creaOperatori con parametro
(operatori)

- creo una variabile divOper nella quale depositero l'elemento html "button" grazie a document.createElement("button")

- associo al tag appena creato attraverso la variabile la classe ("button-operetor").

- grazie al parametro operatori ovvero(operatoriCall del mio script) mi permetterà di stampare in pagina il simbolo degli operatori
della calcolatrice.

- Creo condizione 
  Se operatore è strettamente uguale a 1 allora 
  associa la classe c-operator 

- Creo sintassi con switch(operatori)
  al case 1 grazie a .innerHTML inserisco il valore c
  ripeto questo procedimento per tutti i simboli degli operatori.

Sia per i bottoni con valore numerico da 1 a 9, sia per gli operatori ho creato un ciclo for

- nel primo caso richiamando la funzione creaBtnNum ho creato un ciclo for con lunghezza 11 per creare appunto 11 button.
Ai primi 9 ho associato la classe "button-number"
Ho creato una condizione per gli altri 2

- se numeri è === a 10 allora dai classe "zero"
e nell innerHTML stampa 0

- altrimenti se  numeri è === 11 da la classe 
"same" e nell innerHTML stampa "="


