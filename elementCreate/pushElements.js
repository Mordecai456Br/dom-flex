const elementSelector = document.querySelector('.newElementSelector');
const elementContentSelector = document.getElementById('elementContentInput');
const parentSelector = document.querySelector('.parentSelector');


Element.pushElement('div', "no-parent", { style: "background-color:rgb(116, 148, 111); padding: 4px" }, "");
Element.pushElement('h4', "element_1", { style: "background-color:rgb(70, 56, 56); color: white" }, "belezura");
Element.pushElement('h1', "no-parent", {}, "Ola");
Element.pushElement('h1', "no-parent", {}, "Ola");
Element.pushElement('h1', "element_1", {style: "color: yellow"}, "Banana  🍌");

const addButton = document.querySelector('.add-element-button')
addButton.addEventListener("click", () => {
    const parentSelected = parentSelector.value;
    Element.pushElement(elementSelector.value, parentSelected, {}, elementContentSelector.value);
    console.log(parentSelector.value);

})

// logica para selecionar os pais
/* 
Varre o array e lista no formato [TAG + element.id], em seguida adiciona isso como uma nova opcao em 
*/
function appendParentToSelector() {
    parentSelector.innerHTML = '<option value="no-parent">No parent</option>'
    for (element of elementsArray) {
        let optionValue = element.id
        let optionContent = element.tag

        const newOption = document.createElement("option")
        newOption.setAttribute("value", optionValue)
        newOption.text = `${optionContent} | ${optionValue}`
        parentSelector.append(newOption)
    }
}

Element.renderAllElements(elementsArray)
console.log(elementsArray)
Element.deleteElement('element_3')
appendParentToSelector()
