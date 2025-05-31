const content = document.querySelector('.content')
let id = 0;
const elementsArray = []
class Element {
    constructor({ id, tag, parentId = null, attributes = {}, content = "" }) {
        this.id = id;
        this.tag = tag;
        this.parentId = parentId;
        this.attributes = attributes
        this.content = content
    }

    static generateId() {
        return `element_${id++}`
    }

    static pushElement(tag, parentId, attributes, content) {
        let newId = Element.generateId();

        const newElement = new Element({
            id: newId,
            tag: tag,
            parentId: parentId,
            attributes: attributes,
            content: content
        })
        elementsArray.push(newElement)
        return newElement;
    }
    // pegar o content, resetar ele
    // renderizar todos os elementos do array
    // cria todos e organiza colocando nos pais dele
    static renderAllElements (elementsArray){
        content.innerHTML= ""
        elementsArray.forEach(element => {
            element.classList.add(element.id)
        })
    }
}
Element.pushElement('h1', null, {}, "Ola")
Element.pushElement('h4', null, {}, "Ola")
Element.pushElement('h1', null, {}, "Ola")
Element.pushElement('h1', null, {}, "Ola")
console.log(elementsArray)

