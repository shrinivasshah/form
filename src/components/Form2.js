import React,{useState} from "react";
import {Redirect} from 'react-router-dom'
function Form2({handleSubmit}) {

    const [name,setName] = useState('')
    const [redirect,setRedirect] = useState(false)
    return (
        <div className='input'>
            <form onSubmit={(e)=>{
                setRedirect(true)
                e.preventDefault()
                handleSubmit("college",name)}
                }>
                <label htmlFor="email">What is your College's name?</label>
                <input onChange={e => setName(e.target.value)} value={name} type="text" id="college" placeholder="eg SIES" />
            </form>
            {redirect && <Redirect to="/form3"/>}
        </div>
    );
}

export default Form2;
