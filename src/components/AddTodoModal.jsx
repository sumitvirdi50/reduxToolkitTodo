import React, { useState } from 'react'
import "./todo.css"
import { useDispatch } from 'react-redux'
import { createUser, showModal, updateUser } from '../features/todo/todoSLice'


function AddTodoModal({input, setInput, id, setId}) {
 
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if(id){
      dispatch(updateUser({input,id}))
      setId();
    }
    else{
    dispatch(createUser(input))
    }
    setInput({
      name: "",
      email: "",
      address: "",
      phoneNumber: ""
    })
  }

  const handleChange = (e) => {
    setInput((prev) =>({...prev, [e.target.id]:e.target.value}))
  }

  console.log("input", input,"setId",setId);
  return (
    <div className="modal overlay" id="myModal">
      <div className="modal-content">
        <span className="close" onClick={() => {dispatch(showModal()); setId("")}}>&times;</span>
        <h2 style={{ color: "#3498db", marginBottom: "20px" }}>{id? "Update":"Add"} Information</h2>

        <div className="input-container">
          <label for="name" className="modal-label" >Name</label>
          <input type="text" id="name" className="modal-input" placeholder="Enter your name" value={input?.name} onChange={handleChange}/>
        </div>

        <div className="input-container">
          <label for="email" className="modal-label">Email</label>
          <input type="text" id="email" className="modal-input" placeholder="Enter your email" value={input?.email} onChange={handleChange} />
        </div>

        <div className="input-container">
          <label for="address" className="modal-label">Address</label>
          <input value={input?.address} onChange={handleChange}type="text" id="address" className="modal-input" placeholder="Enter your address" />
        </div>

        <div className="input-container">
          <label for="phone" className="modal-label">Phone Number</label>
          <input value={input?.phoneNumber} onChange={handleChange}type="text" id="phoneNumber" className="modal-input" placeholder="Enter your phone number" />
        </div>

        <button className="modal-button" onClick={() => handleSubmit()}>{id? "Update":"Add"}</button>
      </div>
    </div>


  )
}

export default AddTodoModal