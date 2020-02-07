try {
    const jsGetEmployees = require('./getEmployees');
    const modEmployee = require('./modify-employee'),
        modifyEmployee = modEmployee.modifyEmployee,
        baseUrl = jsGetEmployees.baseUrl,
        employees = jsGetEmployees.employees,
        handleError = jsGetEmployees.handleError,
        getEmployees = jsGetEmployees.getEmployees;
    const del = require('./delete'),
        deleteEmployee = del.deleteEmployee;
} catch (e) { }



const modifyEmployee = async (id, fullname, email, address, phone) => {
    try {
        let data = {
            id,
            fullname,
            email,
            address,
            phone
        }
        const res = await axios.put(`${baseUrl}/${id}`, data);
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id == id) {
                employees[i] = res.data;
            }
        }
        getEmployees();
    }
    catch (err) {
        handleError()
    }
};
 

try {
    module.exports = {
        baseUrl,
        employees,
        handleError,
        getEmployees
    }
 } catch (e) {}