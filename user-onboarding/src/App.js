import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import axios from 'axios';
import schema from './validation/formSchema';
import User from './components/User';

const initialFormValues = {
  userName: '',
  email: '',
  password: '',
  tos: false,
  role: '',
}

const initialErrorValues = {
  userName: '',
  email: '',
  password: '',
  tos: '',
  role: '',
}

const initialDisabled = true;

function App() {

  //Slices of State

  const [formValues, setFormValues] = useState(initialFormValues);

  const [errorValues, setErrorValues] = useState(initialErrorValues);

  const [users, setUsers] = useState([]);

  const [disabled, setDisabled] = useState(initialDisabled);

  //Handle Input Changes

  const handleChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  //Handle Form Submission

  const formSubmit = () => {
    const newUser = {
      userName: formValues.userName,
      email: formValues.email,
      password: formValues.password,
      tos: formValues.tos,
      role: formValues.role,
    }

    postData(newUser)
  }

  //Post New User Data to Database

  const postData = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([...users, res.data]);
      setFormValues(initialFormValues);
    })
    .catch(err => {
      console.log(err);
    })
  }

  //Validate Data

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })

  }, [formValues])

  //Webpage Structure

  return (
    <div className="App">
      <Form
      values={formValues} 
      errors={errorValues} 
      change={handleChange} 
      submit={formSubmit} 
      disabled={disabled}
       />

       {
         users.map(user => {
           return <User key={user.id} details={{user}} />
         })
       }
    </div>
    
  );
}

export default App;