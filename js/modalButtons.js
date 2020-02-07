

let closeButton = document.querySelectorAll(".close");

closeButton.forEach(button=>{
    button.addEventListener("click",()=>{
    deactivateModal(button)})
})
