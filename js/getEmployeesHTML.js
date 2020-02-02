try {
    const jsGetEmployees = require('./getEmployees'),
    baseUrl = jsGetEmployees.baseUrl,
    employees = jsGetEmployees.employees,
    handleError = jsGetEmployees.handleError,
    getEmployees = jsGetEmployees.getEmployees;

} catch (e) {}




const getEmployeesHTML = () => {
    const table = document.querySelector("#employees-list");
    table.innerHTML = "";
    employees.map(employee => {
        let row = document.createElement("tr");
        let tdSelect = createSelectButton();
        tdSelect.id = employee.id;

        let cellName = document.createElement("td");
        cellName.innerHTML = employee.fullname;

        let cellMail = document.createElement("td");
        cellMail.innerHTML = employee.email;

        let cellAddress = document.createElement("td");
        cellAddress.innerHTML = employee.address;

        let cellPhone = document.createElement("td");
        cellPhone.innerHTML = employee.phone;

        let cellActions = employeesActions();

        row.appendChild(tdSelect);
        row.appendChild(cellName);
        row.appendChild(cellMail);
        row.appendChild(cellAddress);
        row.appendChild(cellPhone);
        row.appendChild(cellActions);
        table.appendChild(row);

    })
};

const createSelectButton = () => {
    let cell = document.createElement("td");
    const select = document.createElement("label");
    select.classList.add("check");
    const icon1 = document.createElement("i");
    icon1.classList.add("material-icons");
    icon1.classList.add("unchecked")
    icon1.innerHTML = "check_box_outline_blank";
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.classList.add("checkbox");
    const icon2 = document.createElement("i");
    icon2.classList.add("material-icons");
    icon2.classList.add("checked")
    icon2.innerHTML = "check_box";
    select.appendChild(icon1);
    select.appendChild(input);
    select.appendChild(icon2);
    cell.appendChild(select);
    return cell;
}

const employeesActions = () => {
    let cell = document.createElement("td");
    let iconEdit = createEditButton();
    let iconDelete = createDeleteButton();
    cell.appendChild(iconEdit);
    cell.appendChild(iconDelete);
    return cell;
}

const createEditButton = () =>{
    let button = document.createElement("button");
    button.classList.add("transparent-button");
    let iconEdit = document.createElement("i");
    iconEdit.setAttribute("title","Edit");
    iconEdit.classList.add("material-icons", "yellow");
    iconEdit.innerHTML = "&#xE254";
    button.appendChild(iconEdit);
    //ACÁ VAN LAS FUNCIONES AL HACER CLIC EN BOTON EDIT
    // EL ID DE CADA EMPLOYEE ESTA EN EL PRIMER TD, DONDE ESTA EL BOTON DE SELECT, LO PUEDEN SACAR DE AHI
    return button;
}

const createDeleteButton = () =>{
    let button = document.createElement("button");
    button.classList.add("transparent-button");
    let iconDelete = document.createElement("i");
    iconDelete.setAttribute("title","Delete");
    iconDelete.classList.add("material-icons", "red");
    iconDelete.innerHTML = "&#xE872";
    button.appendChild(iconDelete);
    //ACA VAN LAS FUNCIONES AL HACER CLIC EN BOTON DELETE
    // EL ID DE CADA EMPLOYEE ESTA EN EL PRIMER TD, DONDE ESTA EL BOTON DE SELECT, LO PUEDEN SACAR DE AHI
    return button;
}

try {
    module.exports = {
        getEmployeesHTML,
        createSelectButton,
        employeesActions,
        createEditButton,
        createDeleteButton
    }
 } catch (e) {}