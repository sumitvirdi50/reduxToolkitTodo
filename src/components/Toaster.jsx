import React from 'react'
import { showToaster } from '../features/todo/todoSLice';
import { useDispatch } from 'react-redux';

function Toaster() {
    const dispatch = useDispatch()

    setTimeout(function () {
        dispatch(showToaster())
    }, 2000);

    return (
        <div className="toaster" id="successToaster">
            Operation successful!
        </div>
    )
}

export default Toaster