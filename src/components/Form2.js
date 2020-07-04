import React,{useState} from "react";
import {Redirect} from 'react-router-dom'
import {db} from '../firebase/firebase'
function Form2({handleSubmit,id}) {
    const [collegeName,setCollegeName] = useState('')
    const [redirect,setRedirect] = useState(false)
    return (
        <div className='input'>
            <form onSubmit={(e)=>{
                setRedirect(true)
                e.preventDefault()
                // db.collection(`students${id}`).doc(`student${id}`).set({
                //     collegeName
                // }).then(()=>setCollegeName(''))
                handleSubmit(collegeName)
            }   
                }>
                <label htmlFor="email">What is your College's name?</label>
                <input autoComplete="off" onChange={e => setCollegeName(e.target.value)} value={collegeName} type="text" id="college" placeholder="eg SIES" />
            </form>
            {redirect && <Redirect to="/form3"/>}
        </div>
    );
}

export default Form2;
