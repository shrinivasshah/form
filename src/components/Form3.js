import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            
            duration: 1.5,
        },
    },
    exit: {
        y: "-100vh",
        transition: { ease: "easeInOut" },
    },
};

function Form3({ handleSubmit, id }) {
    const [email, setEmail] = useState("");
    const [redirect, setRedirect] = useState(false);
    
    return (
        <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="input"
        >
            <motion.form
                initial={{ y: "100vw" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", delay: 0.5, stiffness: "90" }}
                onSubmit={(e) => {
                    e.preventDefault();
                    setRedirect(true);
                    // db.collection(`students`).doc(`student${id}`).set({
                    //     email
                    // }).then(()=>setEmail(''))
                    handleSubmit(email);
                }}
            >
                <label htmlFor="email">What's your email</label>
                <input
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    id="email"
                    placeholder="abc@gmail.com"
                />
            </motion.form>
            {redirect && <Redirect to="/form4" />}
        </motion.div>
    );
}

export default Form3;
