import React, { useState } from "react";
import {Redirect} from 'react-router-dom'
import { db } from "../firebase/firebase";
function Form3({ handleSubmit,id }) {
    const [email, setEmail] = useState("");
    const [redirect,setRedirect] = useState(false)
    return (
        <div className="input">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setRedirect(true)
                    // db.collection(`students`).doc(`student${id}`).set({
                    //     email
                    // }).then(()=>setEmail(''))
                    handleSubmit(email)
                }}
            >
                <label htmlFor="email">What's your email</label>
                <input autoComplete="off" onChange={e=> setEmail(e.target.value)} value={email} type="text" id="email" placeholder="abc@gmail.com" />
            </form>
            {redirect && <Redirect to="/form4"/>}
        </div>
    );
}

export default Form3;
