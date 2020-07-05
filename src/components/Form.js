import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion";


const containerVariant = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            
            duration:1.5
        }
    },
    exit:{
        y:'-100vh',
        transition: {ease:'easeInOut'}
    }
}

function Form({ handleSubmit, id }) {
    const [name, setName] = useState("");
    const [redirect, setRedirect] = useState(false);
    return (
        <motion.div className="input"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.form 
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", delay: 0.5, stiffness: "90" }}
                onSubmit={(e) => {
                    e.preventDefault();
                    setRedirect(true);
                    // db.collection(`students`).doc(`student${id}`).set({
                    //     name
                    // }).then(()=> setName(''))
                    handleSubmit(name);
                }}
            >
                <label htmlFor="name">
                    What's your full name?
                    <input
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        id="name"
                        placeholder="John Doe"
                    />
                </label>
            </motion.form>
            {redirect && <Redirect to="/form2" />}
        </motion.div>
    );
}

export default Form;
