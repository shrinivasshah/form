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

function Form2({ handleSubmit }) {
    const [collegeName, setCollegeName] = useState("");
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
                    setRedirect(true);
                    e.preventDefault();
                    // db.collection(`students${id}`).doc(`student${id}`).set({
                    //     collegeName
                    // }).then(()=>setCollegeName(''))
                    handleSubmit(collegeName);
                }}
            >
                <label htmlFor="email">What is your College's name?</label>
                <input
                    autoComplete="off"
                    onChange={(e) => setCollegeName(e.target.value)}
                    value={collegeName}
                    type="text"
                    id="college"
                    placeholder="eg SIES"
                />
            </motion.form>
            {redirect && <Redirect to="/form3" />}
        </motion.div>
    );
}

export default Form2;
