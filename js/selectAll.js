let selectAllButton = document.querySelector("#checkAll");

selectAllButton.addEventListener("check", ()=>{
    let selectedButtons = document.querySelectorAll(".check");
    selectedButtons.forEach(checkbox=>{
        checkbox.checked =1;
    })
})



try {
    module.exports = {
        selectAllButton,
    }
} catch (e) { }
