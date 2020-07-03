import React,{useState} from 'react';
import Home from './Home'
import Header from './Header';
import Form from './Form'
import Form4 from './Form4'
import Form2 from './Form2'
import Form3 from './Form3'
import {Route, Switch} from 'react-router-dom';

const App = () =>{

    const [inputs, setInputs] = useState([])
    console.log(inputs)
    const handleSubmit = (inputType,inputName) => {
        
        setInputs([...inputs, {[inputType]: inputName}] )
    }
    
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/form1">
                <Form  handleSubmit={handleSubmit} />
                </Route>
                <Route path="/form2">
                  <Form2 handleSubmit={handleSubmit} />  
                </Route>
                <Route path="/form3">
                  <Form3 handleSubmit={handleSubmit}/>  
                </Route>
                <Route path="/form4">
                  <Form4 handleSubmit={handleSubmit}/>  
                </Route>
            </Switch>
            
        </div>
    )
}

export default App;