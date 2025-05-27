function deleteElement() {
    const elements = Array.from(content.children);
    elements.forEach(element => {
        element.addEventListener("click", () => {
            element.remove();
            
        })
    })
}
deleteElement();