// arquivo script.js

console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

let ingredientesItens = [
    'ovo',
    'leite',
    'macarrao',
    'carne'
];

let classIngrediente = document.querySelector('.ingredientes-list');

for (i = 0 ; i <= ingredientesItens.length ; i++){
    let ingrediente = ingredientesItens[i];
    let listaDeIngredeiente = document.createElement('li'); // vai criar a lista de uma tag ainda vazia
    listaDeIngredeiente.innerText = ingrediente; // colocando na lista acima cada ingrediente q o for esta pegando 
    // elemento ate aqui criado mas ainda nao esta no html 
    //console.log(listaDeIngredeiente);
    listaDeIngredeiente.classList ='lista_ingredientes_itens' // dar uma classe aos li

    classIngrediente.appendChild(listaDeIngredeiente);// criando um filho para a classe q buscamo pelo query  e adicionando a lista 
}

// para remover algum item da lista 
let ListaDeingredientes = document.querySelectorAll('.lista_ingredientes_itens');

for (i = 0 ; i <= ListaDeingredientes.length ; i++){
    let elemento = ListaDeingredientes[i]; //percorrer a lista e armazenar na variavel para poder comparar
    if (elemento.innerText.includes('ovo')) {// vai procurar no texto se possui aa palavra que quero remover 
    classIngrediente.removeChild(elemento) // remove o elemento se encontrado 
    }
}
