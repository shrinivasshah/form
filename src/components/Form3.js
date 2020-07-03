import React, { useState } from "react";
import {Redirect} from 'react-router-dom'
function Form3({ handleSubmit }) {
    const [email, setEmail] = useState("");
    const [redirect,setRedirect] = useState(false)
    return (
        <div className="input">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setRedirect(true)
                    handleSubmit(email);
                }}
            >
                <label htmlFor="email">What's your email</label>
                <input onChange={e=> setEmail(e.target.value)} value={email} type="text" id="email" placeholder="abc@gmail.com" />
            </form>
            {redirect && <Redirect to="/form4"/>}
        </div>
    );
}

export default Form3;
