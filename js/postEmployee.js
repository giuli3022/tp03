
const clearForm = () => {
    document.querySelector("#name").value = ""
    document.querySelector("#email").value = ""
    document.querySelector("#address").value = ""
    document.querySelector("#phone").value = ""
}

const createEmployee = async () => {
    try {
        const url = baseUrl;
        const fullname = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const address = document.querySelector("#address").value;
        const phone = document.querySelector("#phone").value;

        await axios.post(url, {
            fullname,
            email,
            address,
            phone

        })
        clearForm();
        getEmployees();

    } catch (err) {
        handleError();
    }

};
