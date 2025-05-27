/* quero que ele adicione os conteudos na pagina content
para criar um novo elemento ele deve apresentar um selector com os elementos possiveis
e os seus respectivos conteudos. Apos isso ele ira adicionar no array de elementos a
serem criados e no de conteudo.

quando for criar os elementos adicione na lista
*/

// -----------------------------------------------------------------------------------------------------------------------
// Configurations
let allowNullContents = true;
let applyBackground = true;
// -----------------------------------------------------------------------------------------------------------------------
const content = document.querySelector('.content');

// Cores
// color-selector and colors
let backgroundColors = [["none", ''],
["red", 'rgba(218, 22, 22, 1)'],
["orange", 'rgba(242, 127, 26, 1)'],
["yellow", 'rgba(248, 209, 13, 1)'],
["green", 'rgba(30, 218, 70,1)'],
["blue", 'rgba(26, 145, 242,1 )'],
["dark-blue", 'rgba(0, 83, 217.1)'],
["purple", 'rgba(26, 76, 242,1)'],
["pink", 'rgba(197, 28, 155,1)']];

let colorSelected = 0;
let elementBackground = [backgroundColors[colorSelected][1]];

function updateColor() {
    const colorSelector = document.querySelector('.color-selector');
    colorSelector.addEventListener('change', function () {
        colorSelected = parseInt(this.value);
        elementBackground = [backgroundColors[colorSelected][1]];

        console.log("Cores atualizadas: ", elementBackground);
        console.log("Cor atualizada: ", colorSelected);
    });
}
// -----------------------------------------------------------------------------------------------------------------------
// Elementos
const newElementSelector = document.querySelector('.newElementSelector');
const elementos = ['div', ['p', 'h1', 'h2', 'h3', 'h4'], 'span', 'button'];
let elementToBeCreated = [];
// -----------------------------------------------------------------------------------------------------------------------
// Conteudos

let elementWithContent = [];

// -----------------------------------------------------------------------------------------------------------------------
// Add Button
const addElementButton = document.querySelector(".add-element-button");
let newElementContent = "";
let newElementSelected = "";
addElementButton.addEventListener('click', () => {
    const contentInput = document.getElementById("elementContentInput");
    newElementContent = contentInput.value;
    newElementSelected = document.querySelector('.newElementSelector').value.split(",").map(Number);
    let index0Selected = newElementSelected[0];
    let index1Selected = newElementSelected[1];
    if (newElementSelected.length < 2) {
        newElementSelected = elementos[index0Selected];
    } else {
        newElementSelected = elementos[index0Selected][index1Selected]
    };
    addElements(newElementSelected, newElementContent, elementBackground);
    updateColor();

});
// -----------------------------------------------------------------------------------------------------------------------
// Funcoes principais - AddElements, LoadElements, AddToList
function addElements(newElementSelected, newElementContent, elementBackground) {
    let elementCreated = document.createElement(newElementSelected);
    elementToBeCreated.push(newElementSelected);
    elementWithContent.push(newElementContent);

    let index = elementToBeCreated.indexOf(newElementSelected);// ja q ele é o novo elemento, pega o tamanho do array

    console.log("este é o index da lista: " + index)
    if (newElementContent != null) {
        elementCreated.innerHTML = newElementContent;
        addToList(index);
        content.append(elementCreated);
    } else if (allowNullContents === false) {
        console.log(`${elementToBeCreated[index]} or element[${index}] has not any content, and not created. You can
allow null contents setting allowNullContents = true`);

    } else {
        console.log(`${elementCreated[index]} has not any content, but created anyway`);
    }
    if (elementBackground && applyBackground === true) {
        elementCreated.style.background = elementBackground;
        console.log("background: "+elementBackground);
        content.append(elementCreated);
    }
    console.log(elementCreated);
    deleteElement();
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
            elementCreated.style.background = elementBackground[i];
            console.log(elementBackground[i])
            console.log(`${elementToBeCreated[i]} element[${i}] has not any content, but created anyway`);
            addToList(i);
            content.append(elementCreated);
        }
    }
    console.log(`Elementos carregados: ${elementToBeCreated}`);
}

function addToList(index) {
    const list = document.querySelector('.created-elements-list');
    newListElement = document.createElement('li');
    newListElement.innerText = `${elementToBeCreated[index]} | content: ${elementWithContent[index]}`;
    list.append(newListElement);
}

// licao 2, sempre lembrar de colocar .length lidando com arrays

loadElements(elementToBeCreated, elementWithContent, elementBackground);
updateColor();