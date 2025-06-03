const content = document.querySelector('.content')


let id = 1;

const elementsArray = []
class Element {
    constructor({ id, tag, parentId = "no-parent", attributes = {}, content = "" }) {
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
        Element.renderAllElements(elementsArray)
        appendParentToSelector()
        return newElement;
    }
    // pegar o content, resetar ele
    // renderizar todos os elementos do array
    // cria todos e organiza colocando nos pais dele
    static renderAllElements(elementsArray) {
        content.innerHTML = ""
        elementsArray.forEach(element => {
            const newElement = document.createElement(element.tag)

            // geral - ID & content
            newElement.setAttribute("id", element.id)
            newElement.innerHTML = element.content;
            //atributos - Class & Style
            if (element.attributes.class) {
                newElement.classList.add(element.attributes.class)
            }
            if (element.attributes.style) {
                newElement.style = element.attributes.style
            }
            // parents
            if (element.parentId !== "no-parent") {
                let elementParent = document.getElementById(element.parentId)
                elementParent.append(newElement)
            } else { content.append(newElement) }
        })
    }
}



