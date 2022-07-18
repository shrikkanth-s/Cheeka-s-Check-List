import React from "react";
import Todo from "./Todo";
const Todolist =({todos,setTodos,filteredTodos})=>
{
    //console.log(todos);
    return(
        <div className="todo-container">
            <u1 className="todo-list">
            {filteredTodos.map(todo=>(
                <Todo
                setTodos={setTodos} 
                todos={todos} 
                key={todo.id} 
                todo={todo}
                text={todo.text} 
                />
            ))}
            </u1>
        </div>


    );
}
export default Todolist;