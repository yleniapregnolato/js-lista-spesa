// definsco l'array con all'interno gli elementi della lista

const shoppingList = ["pomodori", "fragole", "insalata", "zucchine"]; // array

// prelevo l'elemento <ul> di HTML tramite la classe

let listElem = document.querySelector(".shopping-list");
console.log(listElem);

// dichiaro una variabile di appoggio che mi permetterà di scrivere il risultato nel DOM un'unica volta
let result = ""; // string

// imposto il ciclo while per scorrere l'array 

let i = 0;
while (i < shoppingList.length) {
    const curItem = shoppingList[i]; //string
    console.log(curItem);
    result += `<li>${curItem}</li>`; //string
    i++;
}

// stampo il risultato nel DOM

listElem.innerHTML = result;