import React from 'react'
import { showDeleteModal, deleteUser } from '../features/todo/todoSLice'
import { useDispatch } from 'react-redux'

function DeleteModal({id}) {
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(deleteUser(id))
    }

    console.log("iddddd",id);
  return (
    <div className="overlay" id="deleteOverlay">
    <div className="delete-modal" id="deleteModal">
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this record?</p>
      <button onClick={() => handleSubmit()}>Delete</button>
      <button className="cancel" onClick={() => dispatch(showDeleteModal())}>Cancel</button>
    </div>
  </div>
  )
}

export default DeleteModal