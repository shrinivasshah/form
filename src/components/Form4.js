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


function Form3({ handleSubmit}) {
    const [phone, setPhone] = useState("");
    const [redirect, setRedirect] = useState(false);
    return (
        <motion.div
            className="input"
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
                    handleSubmit(phone);
                    console.log(phone);
                }}
            >
                <label htmlFor="phone">What's your phone</label>
                <input
                    autoComplete="off"
                    onChange={(e) => {
                        setPhone(e.target.value);
                        console.log(e.target.value);
                    }}
                    value={phone}
                    type="text"
                    id="phone"
                    placeholder="9702519001"
                />
            </motion.form>

            {redirect && <Redirect to="/pick" />}
        </motion.div>
    );
}

export default Form3;
