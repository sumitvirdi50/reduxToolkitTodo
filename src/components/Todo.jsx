import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, showModal, getUser, showDeleteModal } from '../features/todo/todoSLice';
import "./todo.css"
import AddTodoModal from './AddTodoModal';
import DeleteModal from './DeleteModal';
import Toaster from './Toaster';

function Todo() {
  const [id, setId] = useState()
  const [input, setInput] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: ""
  })
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const modal = useSelector(state => state.modal)
  const loader = useSelector(state => state.loader)
  const deleteModal = useSelector(state => state.deleteModal);
  const toaster = useSelector(state => state.toaster)

  console.log("toaster", toaster);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleSearch = () => {
    
  }

  console.log("inputtttttt",input);

  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
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
          {todos.length > 0 ? todos?.map((items, index) => <>
            <tr id={items.id}>
              <td>{items.name}</td>
              <td>{items.email}</td>
              <td>{items.address}</td>
              <td>{items.phoneNumber}</td>
              <td className="action-buttons">
                <span className="edit-btn"
                  onClick={() => {
                    setId(items.id);
                    setInput({
                      name: items.name,
                      email: items.email,
                      address: items.address,
                      phoneNumber: items.phoneNumber
                    });
                    dispatch(showModal());
                  }}
                >Edit</span>
                <span
                  className="delete-btn"
                  onClick={() => { dispatch(showDeleteModal()); setId(items.id) }}>Delete</span>
              </td>
            </tr>
          </> ): 
          <tr colSpan={5}>
            No Data Found!
          </tr>}

        </tbody>
      </table>
      {modal ? <AddTodoModal input={input} setInput={setInput} id={id} setId={setId}/> : ""}
      {loader && <div className="overlay" id="overlay">
        <div className="loader"></div>
      </div>}
      {deleteModal && <DeleteModal id={id} />}
      {toaster && <Toaster />}
    </>
  )
}

export default Todo;