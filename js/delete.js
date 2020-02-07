
const deleteEmployee = async id => {
    const borrar = await axios.delete(`${baseUrl}/${id}`);
    const index = employees.indexOf(employee => {
        return employee.id == id;
    })
    employees.splice(index, 1);
    getEmployees();
}
