import React from 'react'
import "./todo.css"
import { showModal } from '../features/todo/todoSLice'
import { useDispatch } from 'react-redux'


function AddTodoModal() {
    const dispatch = useDispatch()
  return (
    <div className="modal" id="myModal">
  <div className="modal-content">
    <span className="close" onClick={() => dispatch(showModal())}>&times;</span>
    <h2 style={{color: "#3498db", marginBottom: "20px"}}>Add Information</h2>

    <div className="input-container">
      <label for="name" className="modal-label">Name</label>
      <input type="text" id="name" className="modal-input" placeholder="Enter your name"/>
    </div>

    <div className="input-container">
      <label for="email" className="modal-label">Email</label>
      <input type="text" id="email" className="modal-input" placeholder="Enter your email"/>
    </div>

    <div className="input-container">
      <label for="address" className="modal-label">Address</label>
      <input type="text" id="address" className="modal-input" placeholder="Enter your address"/>
    </div>

    <div className="input-container">
      <label for="phone" className="modal-label">Phone Number</label>
      <input type="text" id="phone" className="modal-input" placeholder="Enter your phone number"/>
    </div>

    <button className="modal-button">Add</button>
  </div>
</div>

  
  )
}

export default AddTodoModal