import React, { useEffect } from 'react'
import { showToaster } from '../features/todo/todoSLice';
import { useDispatch } from 'react-redux';

function Toaster({content, setErrorToast}) {
    const dispatch = useDispatch()


useEffect(() => {
    setTimeout(function () {
        dispatch(showToaster());
    }, 2000);
},[])
    
    return (
        <div className={ content ? "toaster error" :"toaster"} id="successToaster">
            {content ? content :"Operation successful!" }
        </div>
    )
}

export default Toaster