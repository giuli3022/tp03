try {
    const getEmployees = require('./getEmployeesHTML'),
    deactivateModal = getEmployees.deactivateModal;
} catch (e) { }


let closeButton = document.querySelectorAll(".close");

closeButton.forEach(button=>{
    button.addEventListener("click",()=>{
    deactivateModal(button)})
})
