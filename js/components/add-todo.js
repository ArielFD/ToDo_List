export default class AddTodo{
    constructor(params) {
        this.title = document.getElementById("title");
        this.description = document.getElementById("description");
        this.btn = document.getElementById("add");
    }

    onClick(callback){
        this.btn.onclick=()=>{
            if (title.value === "" || description.value === "") {
                // alert.innerText = "Title and description are required";
                console.error("incorrecto")
            }else{
                callback(this.title.value,this.description.value);
            }
        }
    }
}