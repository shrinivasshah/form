import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <div className="home container">
            <h2>Appdid Course Registration</h2>
            <Link to="/form1">
                <button>Fill the Form</button>
            </Link>
        </div>
    )
}

export default Home
