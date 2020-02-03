
let closeButton = document.querySelectorAll(".close");

closeButton.forEach(button=>{
    button.addEventListener("click",()=>{
        button.parentElement.parentElement.classList.add("slide-out-top");
        button.parentElement.parentElement.parentElement.classList.add("fade-out");
        setTimeout(()=>{
            button.parentElement.parentElement.parentElement.classList.remove("overlay");
            button.parentElement.parentElement.parentElement.classList.remove("fade-out");
            button.parentElement.parentElement.classList.remove("slide-out-top");
        }, 1000)
    })
})
