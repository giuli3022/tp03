try {
    const jsGetEmployees = require('./getEmployees');
    const employeesHTML = require('./getEmployeesHTML'),
        getEmployees = jsGetEmployees.getEmployees,
        baseUrl = jsGetEmployees.baseUrl,
        employees = jsGetEmployees.employees;

} catch (e) { }


const deleteEmployee = async id => {
    const borrar = await axios.delete(`${baseUrl}/${id}`);
    const index = employees.indexOf(employee => {
        return employee.id == id;
    })
    employees.splice(index, 1);
    getEmployees();
}

try {
    module.exports = deleteEmployee
} catch (e) { }

        // meterme en la lista
        // Buscar la persona para obtener el id y después 
        // aprieto el boton y me salta un alert. Buscar en la lista el nombre e id .Lo mantengo y si aprieto delete con el id guardado lo 