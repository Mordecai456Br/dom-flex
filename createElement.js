const content = document.querySelector('.content');
// elements

// color-selector and colors
let backgroundColors = [["red", 'CC3A3A'], ["orange", 'DD6033'], ["yellow", 'EDC63A'], ["green", '94CC3A'],
["blue", '3AADCC'], ["dark-blue", '3A70CC'], ["purple", '943ACC'], ["pink", 'CC3A94']];

let colorSelected = 0;
let elementBackground = [backgroundColors[colorSelected][1]];

const colorSelector = document.querySelector('.color-selector');
colorSelector.addEventListener('change', function () {
    colorSelected = parseInt(this.value);

    // atualiza o array de cores qnd o valor muda (change) e aplica a cor aos elementos
    elementBackground = elementToBeCreated.map(() => backgroundColors[colorSelected][1]);
    addElements(elementToBeCreated, elementWithContent, elementBackground);
    console.log("Cores atualizadas: ", elementBackground);
});

// content
/* quero que ele adicione os conteudos na pagina content
para criar um novo elemento ele deve apresentar um selector com os elementos possiveis
e os seus respectivos conteudos. Apos isso ele ira adicionar no array de elementos a
serem criados e no de conteudo.

quando for criar os elementos adicione na lista
*/

// elementos
const newElementSelector = document.querySelector('.newElementSelector');

const elementos = ['div', ['p', 'h1', 'h2', 'h3', 'h4'], 'span', 'button'];
let elementToBeCreated = [elementos[1][1], elementos[3], elementos[3]];


`let iTest=0;
newListElement = document.createElement('li');
newListElement.innerHTML = elementToBeCreated[iTest];
list.append(newListElement);` // prototipo de adicionar os elementos criados na lista
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

let newElementContent = "balela";
let newElementSelected = "";
newElementSelector.addEventListener('change', () => {
    newElementSelected = document.querySelector('.newElementSelector').value.split(",").map(Number);
    let index0Selected = newElementSelected[0];
    let index1Selected = newElementSelected[1];
    
    if (newElementSelected.length < 2) {
        newElementSelected = elementos[index0Selected];
    } else newElementSelected = elementos[index0Selected][index1Selected];
    addElements(newElementSelected, newElementContent, elementBackground);

    console.log(newElementSelected);
    console.log(elementToBeCreated);
    });
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
    let allowNullContents = true;
    let applyBackground = true;

    function addElements(newElementSelected, element_content, elementBackground) {
        let elementCreated = document.createElement(newElementSelected);
        elementToBeCreated.push(newElementSelected);
        let index = elementToBeCreated.length; // ja q ele é o novo elemento, pega o tamanho do array

        if (newElementContent != null) {
            elementCreated.innerHTML = newElementContent;
            addToList(index);
            content.append(elementCreated);
        } else if (allowNullContents === false) {
            console.log(`${elementToBeCreated[index]} or element[${index}] has not any content, and not created. You can
allow null contents setting allowNullContents = true`);

        } else {
            console.log(`${elementToBeCreated[index]} has not any content, but created anyway`);
        }
        if (elementBackground && applyBackground === true) {
            elementCreated.style.background = `#${elementBackground}`;
            console.log(elementBackground)
            console.log(`${elementToBeCreated[index]} element[${index}] has not any content, but created anyway`);
            addToList(index);
            content.append(elementCreated);
        }
        console.log(elementToBeCreated);
    }

    function loadElements(elementToBeCreated, element_content, elementBackground) {
        for (let i = 0; i < elementToBeCreated.length; i++) {
            const elementCreated = document.createElement(elementToBeCreated[i]);

            if (element_content[i]) {
                elementCreated.innerHTML = element_content[i];
                addToList(i);
                content.append(elementCreated);
            } else if (allowNullContents === false) {
                console.log(`${elementToBeCreated[i]} or element[${i}] has not any content, and not created. You can
allow null contents setting allowNullContents = true`);

            } else {
                console.log(`${elementToBeCreated[i]} has not any content, but created anyway`);
            }
            if (elementBackground[i] && applyBackground === true) {
                elementCreated.style.background = `#${elementBackground[i]}`;
                console.log(elementBackground[i])
                console.log(`${elementToBeCreated[i]} element[${i}] has not any content, but created anyway`);
                addToList(i);
                content.append(elementCreated);
            }
        }
        console.log(elementToBeCreated);
    }

    function addToList(index) {
        const list = document.querySelector('.created-elements-list');
        newListElement = document.createElement('li');
        newListElement.innerHTML = `${elementToBeCreated[index]} | content: ${elementWithContent[index]}`;
        list.append(newListElement);
    }
    // licao 2, sempre lembrar de colocar .length lidando com arrays

    loadElements(elementToBeCreated, elementWithContent, elementBackground);