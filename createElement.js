const content = document.querySelector('.content');

// elementos
const elementos = ['div', ['p', 'h1', 'h2', 'h3', 'h4'], 'span', 'button'];
let elementToBeCreated = [elementos[1][1], elementos[3]];

// conteudos
let element_possible_contents = [];
let element_textContent = '';
if (elementToBeCreated ===
    elementos[1][0] || elementos[1][1] ||
    elementos[1][2] || elementos[1][3] ||
    elementos[1][4]
) { element_possible_contents = element_textContent } else {
    element_possible_contents = [element_textContent,
        elementos[1][0], elementos[1][1], elementos[1][2], elementos[1][3], elementos[1][4],
        elementos[0], elementos[2], elementos[3]];
}
let elementWithContent = ["ola", null, "eai"];


`let element_content = ["ola este seria o conteudo", '<div style="background:#a6ff52; width:100%; height:20px "><div/>'];
const novoElemento = document.createElement(elementToBeCreated);
novoElemento.innerHTML = element_content;
content.append(novoElemento);`// essa pequena area tava recebendo a lista e era preparada apenas
// para um 1 tava quebrando meu codigo 😒

/* primeiro aprendizado: quando a funcao espera 1 unico valor como string e vc retorna um array,
ele so ira percorrer caso vc crie um for e nao um forEach. 
Tava tentando adicionar elementos com createElement passando um array.
*/

//minha ideia aqui consiste em garantir que o sistema tenha opcao de aceitar ou
//nao elementos de conteudos vazios
let allowNullContents = false;

function addElements(elementToBeCreated, element_content) {
    for (let i = 0; i < elementToBeCreated.length; i++) {
        const elementCreated = document.createElement(elementToBeCreated[i]);

        if (element_content[i]) {
            elementCreated.innerHTML = element_content[i];
        } else if (allowNullContents === false) {
            console.log(`${elementToBeCreated[i]} has not any content, and not created. You can
allow null contents setting allowNullContents = true`);
            return;
        } else {
            console.log(`${elementToBeCreated[i]} has not any content, but created anyway`);
            content.append(elementCreated);
        }
        content.append(elementCreated);
    }

    console.log(elementToBeCreated);
}
// licao 2, sempre lembrar de colocar .length lidando com arrays

addElements(elementToBeCreated, elementWithContent);