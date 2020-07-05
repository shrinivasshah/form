import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            yoyo: 5,
        },
    },
};

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

function PickTopic({ course, addCourse }) {
    let topics = ["Python", "React", "Vue", "GoLang"];
    return (
        <motion.div className="topic container"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div
                initial={{ y: "100vw" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", delay: 0.5, stiffness: "85" }}
            >
                <h3>Choose Your Course</h3>
                <ul>
                    {topics.map((topic) => {
                        let spanClass = topic === course ? "active" : "";
                        return (
                            <motion.li
                                whileHover={{
                                    scale: 1.3,
                                    color: "#ffffb8",
                                    originX: 0,
                                }}
                                key={topic}
                                onClick={() => addCourse(topic)}
                            >
                                <span className={spanClass}>{topic}</span>
                            </motion.li>
                        );
                    })}
                </ul>

                {course && (
                    <motion.div
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        className="next"
                    >
                        <Link to="/thanks">
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                            >
                                Next
                            </motion.button>
                        </Link>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
}

export default PickTopic;
