import React, { useState } from "react";
import Home from "./Home";
import Header from "./Header";
import Form from "./Form";
import Form4 from "./Form4";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Modal from './Modal'
import { Route, Switch,useLocation } from "react-router-dom";
import { db } from "../firebase/firebase";
import PickCourse from "./PickCourse";
import ThankYou from "./ThankYou";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const [showModal, setShowModal] = useState(false)
    const location = useLocation()
    const [inputs, setInputs] = useState({
        name: "",
        college: "",
        email: "",
        phone: "",
    });

    const [course, setCourse] = useState("");

    const addCourse = (course) => {
        setCourse(course);
    };

    console.log(inputs);

    const handleFormOne = (input) => {
        setInputs({ ...inputs, name: input });
    };
    const handleFormTwo = (input) => {
        setInputs({ ...inputs, college: input });
    };
    const handleFormThree = (input) => {
        setInputs({ ...inputs, email: input });
    };
    const handleFormFour = (input) => {
        setInputs({ ...inputs, phone: input });
        db.collection("students")
            .add({
                name: inputs.name,
                college: inputs.college,
                email: inputs.email,
                phone: inputs.phone,
                course,
            })
            .then(() =>
                setInputs({
                    name: "",
                    college: "",
                    email: "",
                    phone: "",
                })
            );
    };

    return (
        <div>
            <Header />
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <AnimatePresence exitBeforeEnter onExitComplete={()=>{
                setShowModal(false)
            }}>
                <Switch location={location} key={location.key}>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/form1">
                        <Form handleSubmit={handleFormOne} />
                    </Route>
                    <Route path="/form2">
                        <Form2 handleSubmit={handleFormTwo} />
                    </Route>
                    <Route path="/form3">
                        <Form3 handleSubmit={handleFormThree} />
                    </Route>
                    <Route path="/form4">
                        <Form4 handleSubmit={handleFormFour} />
                    </Route>
                    <Route path="/pick">
                        <PickCourse course={course} addCourse={addCourse} />
                    </Route>
                    <Route path="/thanks">
                        <ThankYou course={course} setShowModal={setShowModal}/>
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
};

export default App;
