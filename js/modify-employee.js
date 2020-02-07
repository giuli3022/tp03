
const modifyEmployee = async (id, fullname, email, address, phone) => {

    let resultado = false;
    let data = {
        id,
        fullname,
        email,
        address,
        phone

    }
    try {

        if (!document.querySelector("#name-edit").checkValidity()) {
            alert("Nombre incorrecto.");
            return resultado;
        }
        else if (!document.querySelector("#email-edit").checkValidity()) {
            alert("Email incorrecto.");
            return resultado;
        }
        else if (!document.querySelector("#Address-edit").checkValidity()) {
            alert("Dirección incorrecta.");
            return resultado;
        }
        else if (!document.querySelector("#Phone-edit").checkValidity()) {
            alert("Teléfono incorrecto.");
            return resultado;
        }

        const res = await axios.put(`${baseUrl}/${id}`, data);
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id == id) {
                employees[i] = res.data;
            }
        }
        getEmployees();
        resultado = true;
    }
    catch (err) {
        handleError()
    }
    return resultado;
};