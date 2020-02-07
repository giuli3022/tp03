
const clearForm = () => {
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#address").value = "";
    document.querySelector("#phone").value = "";
}

const createEmployee = async () => {
    let resultado = false;
    try {

        if (!document.querySelector("#name").checkValidity()) {
            alert("Nombre incorrecto.");
            return resultado;
        }
        else if (!document.querySelector("#email").checkValidity()) {
            alert("Email incorrecto.");
            return resultado;
        }
        else if (!document.querySelector("#address").checkValidity()) {
            alert("Dirección incorrecta.");
            return resultado;
        }
        else if (!document.querySelector("#phone").checkValidity()) {
            alert("Teléfono incorrecto.");
            return resultado;
        }
        const fullname = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const address = document.querySelector("#address").value;
        const phone = document.querySelector("#phone").value;

        await axios.post(baseUrl, {
            fullname,
            email,
            address,
            phone

        });

        clearForm();
        getEmployees();
        resultado = true;

    } catch (err) {
        handleError();
    }
    return resultado;
};
