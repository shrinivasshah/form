import React, { useState } from "react";
import {Redirect} from 'react-router-dom'
import { db } from "../firebase/firebase";
function Form3({ handleSubmit,id }) {
    const [phone, setPhone] = useState("");
    const [redirect,setRedirect] = useState(false)
    return (
        <div className="input">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setRedirect(true)
                    handleSubmit(phone)
                    console.log(phone)
                }}
            >
                <label htmlFor="phone">What's your phone</label>
                <input autoComplete="off" onChange={e=> {setPhone(e.target.value)
                        console.log(e.target.value)}} value={phone} type="text" id="phone" placeholder="9702519001" />
            </form>
                
            {redirect && <Redirect to="/pick"/>}
        </div>
    );
}

export default Form3;

