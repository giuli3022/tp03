try {
const getEmployeesHTML = require('./getEmployeesHTML.js');
} catch(e){}

const baseUrl = "https://tp-js-2-api-wjfqxquokl.now.sh/users";

let employees = [];


const handleError = err => {
    alert(`Error loading.`);
    throw `Error loading. ${err}`
};



const getEmployees = async () => {
    try {
        const res = await axios.get(baseUrl);
        employees = res.data;
        getEmployeesHTML()
    } catch (err) {
        handleError();
    }
};



const getEmployeesHTML = () => {
    const table = document.querySelector("#employees-list");
    const primerFila= document.querySelector("#table-header")
    table.innerHTML = "";
    table.appendChild(primerFila)
    employees.map(employee => {
        let row = document.createElement("tr");
        let tdSelect = createSelectButton();

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
    let iconEdit = document.createElement("i");
    iconEdit.setAttribute("title","Edit");
    iconEdit.classList.add("material-icons", "yellow");
    iconEdit.innerHTML = "&#xE254";
    let iconDelete = document.createElement("i");
    iconDelete.setAttribute("title","Delete");
    iconDelete.classList.add("material-icons", "red");
    iconDelete.innerHTML = "&#xE872";
    cell.appendChild(iconEdit);
    cell.appendChild(iconDelete);
    return cell;
}

getEmployees();


try {
module.exports = {getEmployees,employee};
} catch (e) {}