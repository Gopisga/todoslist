import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import{AddTodo} from "./MyComponents/AddTodo";
import {About}  from   "./MyComponents/About";
import React, { useEffect, useState } from 'react'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
  
function App() {
  let initTodo
  if (localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
   const onDelete=(todo)=>{
    console.log("I am onDelete of todo ",todo);
   // let index = todos.indexOf(todo);
   // todos.splice(index, 1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.getItem("todos",JSON.stringify(todos));
   }
   const addTodo =(title,desc)=>{
    console.log("I am adding this todo ",title,desc)
    let slno;
    if(todos.length==0) {
      slno = 1;
    }
    else {
      slno = todos[todos.length-1].slno + 1;
    }
    const myTodo ={
      slno:slno,
      title:title,
      desc:desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  
   }

   const [todos, setTodos] = useState([initTodo]);
   useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
   },[todos])

return (
  
   
    <Router>
    <Header title="My Todo List" searchBar={true} />
    <Routes>
        <Route exact path="/"  render ={()=>{
          return(
            <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos}  onDelete={onDelete} />
            </>
          )
          }}/>
        <Route exact path="/about" element= {<About />}>
        </Route>
      </Routes>
   
        <AddTodo addTodo={addTodo}/>
             <Todos todos={todos}  onDelete={onDelete} />
    <Footer/>
    </Router>
    
    
  );
}

export default App;

