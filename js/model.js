export default class Model{
    constructor(params) {
        this.view=null;
        this.todos=[];
        this.currentId=1;
    }

    setView(view){
        this.view=view;
    }

    getTodos(){
        return this.todos;
    }

    findTodo(id){
        return this.todos.findIndex((todo)=>todo.id===id);
    }

    toggleCompleted(id){
        const index=this.findTodo(id);
        const todo=this.todos[index];
        todo.completed=!todo.completed;
        console.log(this.todos);
    }

    addTodo(title,description){
        const todo={
            id:this.currentId++,
            title:title,
            description,//es lo mismo que decir "description:description"
            completed:false,
        }
        this.todos.push(todo);
        console.log(this.todos);

        return {...todo}//Hace un clon de "todo"
    }

    removeTodo(id){
        const index=this.findTodo(id);
        this.todos.splice(index,1);
    }
}