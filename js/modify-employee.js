

const modifyEmployee = async (id, fullname, email, address, phone) => {
    try {
        let data = {
            id,
            fullname,
            email,
            address,
            phone
        }
        const res = await axios.put(`${baseUrl}/users/${id}`, data);
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id == id) {
                employees[i] = res.data;
            }
           console.log (employees);
        }
    }
    catch (err) {
        handleError()
    }
};
 

try {
    module.exports = {
        modifyEmployee,
    }
} catch (e) { }