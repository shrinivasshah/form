import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
function ThankYou({ setShowModal, course }) {
    const [showTitle, setShowTitle] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowModal(true);
        }, 5000);
    });

    return (
        <AnimatePresence>
            <motion.div
                className="container"
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                exit={{
                    opacity: 0,
                }}
                transition={{ delay: 0.2 }}
            >
                <h1>Thank You for selecting {course}</h1>
                <h2>₹2000</h2>
            </motion.div>
        </AnimatePresence>
    );
}

export default ThankYou;
