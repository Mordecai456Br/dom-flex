const htmlElements = ['div', ['p', 'h1', 'h2', 'h3', 'h4'], 'span', 'button', ['img', 'video'], ['ol', 'ul', 'li']];

let id = 0;
function generateId() {
    return id++;
}

const elements = [{}];

function createNewElement(htmlElementWithIndex) {

    let newId = generateId();
    let newElement = {
        id: newId,
        htmlElement: htmlElementWithIndex
    }
    elements.push(newElement)

}
createNewElement(htmlElements[3]);
createNewElement(htmlElements[3]);
createNewElement(htmlElements[3]);
createNewElement(htmlElements[3]);
console.log(elements);

let elementsChatosos = [
    {
        id: "element_1",
        tag: "div",
        parentId: null,
        attributes: {
            class: "container",
            style: "padding: 1rem;"
        },
        content: "",
    },
    {
        id: "element_2",
        tag: "h1",
        parentId: "element_1",
        attributes: {
        },
        content: "Hello World!",
    },
    {
        id: "element_3",
        tag: "p",
        parentId: "element_1",
        attributes: {
        },
        content: "Este é um parágrafo",
    }
];
function renderElementById(id, elementsArray) {
    let resultado = document.createElement('div')
    elementsArray.forEach(element => {
        content.append(resultado)
        
        const elementId = element.id;
        const elementTag = element.tag;
        const elementParentId = element.parentId;
        const elementClass = element.attributes.class
        const elementStyle = element.attributes.style
        const childerns = elementsArray.filter(e => e.parentId === elementId)
        const elementContent = element.content;

        const Class = `class="${elementClass}"`
        const Style = `style="${elementStyle}"`
        // devo adicionar o pai depois imprimo o html de onde ele fica

        // O localToAdd deve procurar no array o id que seja igual do elemento
        // e inserir ele dentro
        const elementToAdd = document.createElement(elementTag)
        
        elementToAdd.setAttribute("id", elementId)
        if (elementClass && elementClass != ""){elementToAdd.classList.add(elementClass)}
        if (elementStyle && elementStyle != ""){elementToAdd.style = elementStyle}
        if (elementContent && elementContent != ""){elementToAdd.innerHTML = elementContent}
        
        if (elementToAdd.elementParentId != "" && elementToAdd.elementParentId !== null){
            let elementParent = resultado.getElementsByClassName(elementParentId)
            elementParent.append(elementToAdd)
        } else {resultado.append(elementToAdd)}
        
    });
    console.log("resultado:" +resultado.innerHTML)
}
renderElementById("element_1", elementsChatosos);