const htmlElements = ['div', ['p', 'h1', 'h2', 'h3', 'h4'], 'span', 'button', ['img', 'video'], ['ol', 'ul', 'li']];

const addElementButton = document.querySelector(".add-element-button");
const content = document.querySelector('.content');

let id = 0;
function generateId() {
    return `element_${id++}`;
}

const element = {
    id: "element_1",
    tag: "div",
    parentId: null,
    attributes: {
        class: "container",
        style: "padding: 1rem;"
    },
    content: ""
}

let elementsChatosos = [
    {
        id: "element_1",
        tag: "div",
        parentId: null,
        attributes: {
            class: "container",
            style: "padding: 1rem;"
        },
        content: ""
    },
    {
        id: "element_2",
        tag: "h1",
        parentId: "element_1",
        attributes: {
            style: "background:rgb(234, 71, 255); color: rgb(253, 242, 242)"
        },
        content: "Hello World!"
    },
    {
        id: "element_3",
        tag: "p",
        parentId: "element_1",
        attributes: {
        },
        content: "Este é um parágrafo"
    }
];

/* Para adicionar um elemento eu preciso pegar o valor de newElementSelector e separar ele pela , 
valor recebido: value=1,2 -> aplica .split(",") e .(map para transformar em array de numero)

id: "element_3",
        tag: "p",
        parentId: "element_1",
        attributes: {
        },
        content: "Este é um parágrafo"

*/

const resultado = document.createElement('div')

function renderAllElements(elementsArray) {
    content.innerHTML = null;
    elementsArray.forEach(element => {
        content.append(resultado)
        
        const elementId = element.id;
        const elementTag = element.tag;
        const elementParentId = element.parentId;
        const elementClass = element.attributes.class
        const elementStyle = element.attributes.style
        
        const elementContent = element.content;
      
        const Class = `class="${elementClass}"`
        const Style = `style="${elementStyle}"`
        // devo adicionar o pai depois imprimo o html de onde ele fica
        
        // O localToAdd deve procurar no array o id que seja igual do elemento
        // e inserir ele dentro
        const elementToAdd = document.createElement(elementTag)
        
        elementToAdd.setAttribute("id", elementId)
        if (elementClass && elementClass != "") { elementToAdd.classList.add(elementClass) }
        if (elementStyle && elementStyle != "") { elementToAdd.style = elementStyle }
        if (elementContent && elementContent != "") { elementToAdd.innerHTML = elementContent }
        
        if (element.parentId != "" && element.parentId !== null) {
            let elementParent = document.getElementById(elementParentId);
            elementParent.append(elementToAdd)
        } else { resultado.append(elementToAdd) }
        
    });
    console.log("resultado:" + resultado.innerHTML)
}

// pega o id do elemento, coloca classe e style, ve se tem filhos e ve se tem pais  
function renderElementById(id, elementsArray) {
    
    const elementData = elementsArray.find(e => e.id === id)
    if (!elementData) return console.log("elemento nao encontrado");
    
    const element = document.createElement(elementData.tag)
    element.setAttribute("id", elementData.id);
    
    if (elementData.attributes.class) { element.className = elementData.attributes.class }
    
    if (elementData.attributes.style) { element.style = elementData.attributes.style }
    
    if (elementData.content) { element.innerHTML = elementData.content }

    const childrens = elementsArray.filter(e => e.parentId === elementData.id)
    childrens.forEach(children => {
        const childElement = renderElementById(children.id, elementsArray)
        if (childElement) element.appendChild(childElement)
        });
    return element;
}

/*
function pushElement(elementsArray, parentId ,content) {
    let newId = generateId();

    const elementSelected = document.querySelector(".newElementSelector").value;
    
    const newElement = {
        id: newId,
        tag: elementSelected,
        parentId: parentId,
        attributes: {
        },
        content: content
    }
    elementsArray.push(newElement);
    renderAllElements(elementsArray);
}

addElementButton.addEventListener("click", pushElement(elementsChatosos, "element_1", "ola"))
pushElement(elementsChatosos, "element_1", "ola");
console.log(Array.isArray(elementsChatosos))
//const novoElemento = renderElementById("element_1", elementsChatosos)
//renderAllElements(elementsChatosos);
pushElement();
*/
renderAllElements(elementsChatosos)