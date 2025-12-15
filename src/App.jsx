
//import  Counter  from "./Counter.jsx";
import ProfileForm from "./ProfileForm.jsx";
import TodoList from "./TodoList.jsx"
//import Parent from "./Parent.jsx";
import Parent from "./Parent2.jsx";
//import Counter from "./Counter2.jsx"
import Price from "./Price.jsx";
import UserName from "./UserName.jsx"
import SessionApp from "./SessionApp.jsx"
import Counter from "./Counter3.jsx";
import Form from "./Form.jsx";
import { useState } from "react";
import { UserContext } from "./UserContext";
import A from "./A";
import B from "./B";
import Child3 from "./Child3.jsx"


function App() {
  return(
  <div>
     <h1>React状態管理練習</h1> 
       <Counter />   
      {/* <ProfileForm /> */}
      {/* <TodoList /> */}
      {/* <Parent />   */}
      {/* <Price /> */}
      {/* <UserName /> */}
      {/* <SessionApp /> */}
      {/* <Form /> */}

              
  </div>
  );
  
}

export default App;
