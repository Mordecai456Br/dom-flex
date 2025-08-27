const deleteButton = document.querySelector('.delete-element-button');

// criar a funcao de deletar
// pegar o id do elemento

deleteButton.addEventListener("click", () => {
    const parentSelected = parentSelector.value
    Element.deleteElement(`${parentSelected}`);
});

console.log("deletagem")