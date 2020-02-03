/*
const searchUser = () => {
    const filter = document.querySelector("#filter");
    switch (filter.value) {

    }
}
*/


/*
// Buscar por ID
const searchById = async () => {
    const id = todoSearchInput.value;
     try{
         const todo = await axios.get(`${baseUrl}/${id}`);
         for (let item of lista) {
             if (item.id == id){
                 printTodo(item);
             }
         } 
     }catch(err){
         handleError;
     }
 }
 //Buscar por usuario
 const searchByUser = async()=>{
     const user = todoSearchInput.value;
     try {
         for (let item of lista) {
             if (item.userId == user){
                 const todo = await axios.get(`${baseUrl}/${item.id}`);
                 foundList.push(todo.data);
             }
         }  
         sortByStatus();
         printList(foundList);
     }catch (err){
         handleError;
     }
 }
 //Buscar por texto
 const searchByText = async()=>{
     const text = todoSearchInput.value;
     try {
         for (let item of lista) {
             if (item.title.includes(text)){
                 const todo = await axios.get(`${baseUrl}/${item.id}`);
                 foundList.push(todo.data);
             }
         }  
         sortByStatus();
         printList(foundList);
     }catch (err){
         handleError;
     }
 }
 
 const getToDo = event => {
     const select = document.querySelector("#searchSelect");
     switch (select.value) {
         case "0":
             foundList=lista;
             sortByStatus();
             printList(foundList)
         case "id":
             searchById();
             break
         case "user":
             searchByUser();
             break
         case "text":
             searchByText();
             break
     }
     foundList = [];
 }
 const searchButton = document.querySelector("#search-todo-button");
 searchButton.addEventListener("click", getToDo);
 

 ///podria usar un map
*/