import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'


function Form({handleSubmit,id}) {
    const [name, setName] = useState('')
    const [redirect,setRedirect] = useState(false)
    return (
        <div className="input">
            
            <form onSubmit={(e)=>{
                e.preventDefault()
                setRedirect(true)
                // db.collection(`students`).doc(`student${id}`).set({
                //     name
                // }).then(()=> setName(''))
                handleSubmit(name)
            }}>
                <label htmlFor="name">What's your full name?
                <input autoComplete="off" onChange={(e)=> setName(e.target.value)} value={name} type="text" id="name" placeholder="John Doe"/>
                </label>
            </form>
            {redirect && <Redirect to="/form2"/>}
        </div>
    )
}

export default Form
