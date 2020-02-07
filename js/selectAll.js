
let boton = document.querySelector("#checkAll")
boton.addEventListener("click", () => {
    let elem = document.querySelectorAll(".checkbox");
    elem.forEach(a => { a.checked = boton.checked }
    )
});