//import logo from './logo.svg';
import React, { useState,useEffect } from 'react';
import './App.css';

//Components adding here
import Form from "./components/Form";
import Todolist from './components/Todolist';
function App() {
  //states creating
  const[inputText,setInputText]=useState("");
  const[todos,setTodos]=useState([]);
  const[status,setStatus]=useState('All');
  const[filteredTodos,setFilteredTodos]=useState([]);
  //Running this only once when the application starts
  useEffect(() => { 
    getLocalTodos();
  },[]);
    //The useEffect
  useEffect(()=>{
    //console.log("HEYYYYYY");
    const filterHandler= () =>
  {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=> todo.completed ===true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=> todo.completed ===false))
        break;
      default:
        setFilteredTodos(todos);
        break; 
    }
  };
//Saving to local
  const saveLocalTodos= () =>{
      localStorage.setItem("todos",JSON.stringify(todos));
  };
    saveLocalTodos();
    filterHandler();    
  },[todos,status]);
  //All functions
  /*const filterHandler= () =>
  {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=> todo.completed ===true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=> todo.completed ===false))
        break;
      default:
        setFilteredTodos(todos);
        break; 
    }
  };
//Saving to local
  const saveLocalTodos= () =>{
      localStorage.setItem("todos",JSON.stringify(todos));
  };*/
  const getLocalTodos = () =>
  { 
      if(localStorage.getItem("todos") === null){
        localStorage.setItem("todos",JSON.stringify([]));
      }
      else{
        let todoLocal=JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);        
      }
  };
  return (
    <div className="App">
      <header>
        <h1>CHEEKA's CHECK List</h1>
      </header>
      <Form 
            inputText={inputText} 
            todos={todos}
            setTodos={setTodos} 
            setInputText={setInputText}
            setStatus={setStatus}
            />
      <Todolist 
      setTodos={setTodos} 
      todos={todos}
      filteredTodos={filteredTodos}
      />
      
    </div>
  );
}

export default App;
