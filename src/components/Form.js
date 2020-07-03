import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
function Form({handleSubmit}) {
    const [name, setName] = useState('')
    const [redirect,setRedirect] = useState(false)
    return (
        <div className="input">
            
            <form onSubmit={(e)=>{
                e.preventDefault()
                setRedirect(true)
                handleSubmit("name",name)    
            }}>
                <label htmlFor="name">What's your full name?
                <input onChange={(e)=> setName(e.target.value)} value={name} type="text" id="name" placeholder="John Doe"/>
                </label>
            </form>
            {redirect && <Redirect to="/form2"/>}
        </div>
    )
}

export default Form
