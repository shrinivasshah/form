import React,{useState} from 'react';
import Home from './Home'
import Header from './Header';
import Form from './Form'
import Form4 from './Form4'
import Form2 from './Form2'
import Form3 from './Form3'
import {Route, Switch} from 'react-router-dom';

const App = () =>{

    const [inputs, setInputs] = useState({
        name:'',
        college:'',
        email:'',
        phone:null
    })
    console.log(inputs)
    const handleFormOne = (inputName) => {
        
        setInputs({...inputs, name: inputName} )
    }
    const handleFormTwo = (inputName) => {
        
        setInputs({...inputs, college: inputName} )
    }
    const handleFormThree = (inputName) => {
        
        setInputs({...inputs, email: inputName} )
    }
    const handleFormFour = (inputName) => {
        
        setInputs({...inputs, phone: inputName} )
    }

    
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/form1">
                <Form  handleSubmit={handleFormOne} />
                </Route>
                <Route path="/form2">
                  <Form2 handleSubmit={handleFormTwo} />  
                </Route>
                <Route path="/form3">
                  <Form3 handleSubmit={handleFormThree}/>  
                </Route>
                <Route path="/form4">
                  <Form4 handleSubmit={handleFormFour}/>  
                </Route>
            </Switch>
            
        </div>
    )
}

export default App;