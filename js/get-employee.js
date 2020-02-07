

const search = async () => {

    const text = event.target.value;
    try {
        const filtered = await axios.get(`${baseUrl}?search=${text}`);
        employees = filtered.data;
        getEmployeesHTML();
    }
    catch (err) {
        handleError();
    }
}

const filter = document.querySelector("#filter");
filter.addEventListener("keyup", search);
