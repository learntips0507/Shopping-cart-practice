let removeClickButtons = document.getElementsByClassName("btn-danger");
for (let i = 0; i < removeClickButtons.length; i++) {
    const button = removeClickButtons[i];
    button.addEventListener('click',(event)=>{
        const buttonClick = even.target
        buttonClick.parentElement.parentElement.remove()
    })
}