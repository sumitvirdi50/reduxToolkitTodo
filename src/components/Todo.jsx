import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addTodo, showModal } from '../features/todo/todoSLice';
import "./todo.css"
import AddTodoModal from './AddTodoModal';

function Todo() {
  const [input, setInput] = useState("");
  const [id, setId] = useState()
  const dispatch = useDispatch();
  const todos = useSelector(state=>state.todos);
  const modal = useSelector(state=>state.modal)

  console.log("todod0",modal);

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  }
  const updateMatch = (id, arr) => {
    let text=arr.find(item => item.id === id.toString());
    setId(id)
    setInput(text?.text);
  };

  console.log("id",id);

  return (
    <>
    {/* <div className='centerdiv'>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={(e) => {addTodoHandler(e)}}>addTodo</button>
      <button onClick={() => {dispatch(updateTodo({id:id, newText:input}))}}>updateTodo</button>

    </div>
     <div className='mappeditems'>
     {todos.map((items,index) =>
      <div className='centerdiv'>
      <p id={items.id}>{items.text}</p>
      <button className='btn-delete' onClick={() => dispatch(removeTodo(items.id))}>delete</button>
      <button className='btn-update' onClick={() => updateMatch(items.id, todos)}>update</button>
     </div>)}
   </div> */}
      <div className="search-container">
    <input type="text" className="search-input" placeholder="Search..."/>
    <button className="add-btn" onClick={() => dispatch(showModal())}>Add Info</button>
  </div>

   <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((items, index) => <>
        <tr>
        <td>{items.name}</td>
        <td>{items.email}</td>
        <td>{items.address}</td>
        <td>{items.phoneNumber}</td>
        <td className="action-buttons">
          <span className="edit-btn" onclick="editRow(this)">Edit</span>
          <span className="delete-btn" onclick="deleteRow(this)">Delete</span>
        </td>
      </tr>
      </>)}
      
    </tbody>
  </table>
  {modal ? <AddTodoModal/> : ""}
   </>
  )
}

export default Todo;