import React, { useState } from "react";

function Form4({ handleSubmit }) {
    const [phone, setPhone] = useState(null);
    return (
        <div className="input">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit("phone",phone);
                }}
            >
                <label htmlFor="email">What's your email</label>
                <input onChange={e=> setPhone(e.target.value)} value={phone} type="text" id="email" placeholder="abc@gmail.com" />
            </form>
        </div>
    );
}

export default Form4;
