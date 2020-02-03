const handleError = err => {
    alert(`Error loading.`);
    throw `Error loading. ${err}`
};

let employees = [];
let employee;



const getEmployees = async () => {
    try {
        const res = await axios.get(`${baseUrl}/users`);
        employees = res.data;
    } catch (err) {
        handleError();
    }
};


const getEmployee = async (user) => {
    try {
        const res = await axios.get(`${baseUrl}/users?search=${user}`);
        employee = res.data;
    } catch (err) {
        handleError();
    }
};

