const htmlElements = ['div', ['p', 'h1', 'h2', 'h3', 'h4'], 'span', 'button',['img','video'],['ol','ul','li']];

let id = 0;
function generateId () {
    return id++;
}

const elements = [{}];

function createNewElement(htmlElementWithIndex){
    
    let newId = generateId();
    let newElement = {
        id: newId,
        htmlElement: htmlElementWithIndex}
    elements.push(newElement)
    elements.pop(0)
}
createNewElement(htmlElements[3]);
createNewElement(htmlElements[3]);
createNewElement(htmlElements[3]);
createNewElement(htmlElements[3]);
console.log(elements);