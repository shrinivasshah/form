import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'

const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: 5
      }
    }
  }

function Home() {
    return (
        <div className="home container">
            <motion.h2
            animate={{fontSize:"50px"}}>Appdid Course Registration</motion.h2>
            <Link to="/form1">
                <motion.button
                variants={buttonVariants}
                whileHover="hover"
                >Fill the Form</motion.button>
            </Link>
        </div>
    )
}

export default Home
