import React, { useState } from "react";
import "../CSS/Todo.css";
import { FaPenFancy } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

function Todo() {
  const [users,setUsers] =useState([]);
  const [name,setName]=useState("");
  const [editIndex,setEditIndex] = useState(-1);
  
  const addUser=()=>{
      if(name.trim().length ===0){
          return;
      }
      else if(editIndex !==-1){
          const userList=[...users];
          userList[editIndex]=name;
          setUsers(userList)
          setEditIndex(-1)
      }else{ 
          const newUsers=[...users,name];
          setUsers(newUsers);
      }
      setName("")
  }
  const editUser=(index)=>{
      setEditIndex(index);
      setName(users[index])
  }
  const deleteUser=(userIndex)=>{
      const updatedUsers = users.filter((user,index)=> index!==userIndex);
      setUsers(updatedUsers);
  }

  return (
    <div className="todo-app">
      <div>
        <h1>ToDo Application</h1>
      </div>
      <div className="input_Div">
        <div>
          <label>Add Task</label>
          <input
            required
            type="text"
            placeholder="Add Task..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <button onClick={addUser} className="button">
            Add
          </button>
        </div>
      </div>
      <div>
        {users?.map((user, index) => (
          <div className="add_Div" key={index}>
            <div>
              <p>{index + 1}.</p>
              <span>{user}</span>
            </div>
            <div>
              <button onClick={() => editUser(index)} className="button icon">
                <FaPenFancy />
              </button>
              <button
                onClick={() => deleteUser(index)}
                className="button icon"
                style={{ color: "red" }}
              >
                <RiDeleteBin5Line />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
