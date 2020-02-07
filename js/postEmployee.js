
const clearForm = () => {

    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("address").value = ""
    document.getElementById("phone").value = ""

}

const createEmployee = async () => {
    try {
        const url = baseUrl
        const fullname = document.getElementById("name").value
        const email = document.getElementById("email").value
        const address = document.getElementById("address").value
        const phone = document.getElementById("phone").value

        await axios.post(url, {
            fullname,
            email,
            address,
            phone

        })
        clearForm();
        getEmployees();

    } catch (error) {
        console.log(error)
    }

};

const addEmployee = document.getElementById("addEmployee")
addEmployee.addEventListener("click", () => { activateModal("#modal-add") })

const submitEmployee = document.getElementById("create-employee");

submitEmployee.addEventListener("click", createEmployee)