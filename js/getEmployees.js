
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
        getEmployeesHTML();
    } catch (err) {
        handleError();
    }
};

getEmployees();

