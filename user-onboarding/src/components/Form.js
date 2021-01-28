import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as yup from 'yup';
import styled from 'styled-components';

export default function Form(props) {

    const { values, errors, change, submit, disabled} = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
      }

    return (
        <UserForm onSubmit={onSubmit}>

            <label>User Name: <br />
                <input 
                type='text' 
                name='userName' 
                value={values.userName} 
                onChange={onChange}
                placeholder='Enter name here...'
                ></input>
            </label>

            <label>Email: <br />
                <input 
                type='email' 
                name='email' 
                value={values.email} 
                onChange={onChange}
                placeholder='Enter email here...'
                ></input>
            </label>

            <label>Password: <br />
                <input 
                type='password' 
                name='password' 
                value={values.password} 
                onChange={onChange}
                placeholder='Enter password here...'
                ></input>
            </label>

            <label>Role: <br />
                <select
                 onChange={onChange}
                 value={values.role}
                 name='role'
                 >
                    <option value=''>**Choose Your Role**</option>
                    <option value='Front-End'>Front-End</option>
                    <option value='Back-End'>Back-End</option>
                    <option value='UX/UI'>UX/UI</option>
                    <option value='Full-Stack'>Full Stack</option>
                </select>
            </label>

            <label>I accept the terms of service: 
                <input 
                type='checkbox' 
                value={values.tos} 
                name='tos' 
                onChange={onChange}
                ></input>
            </label>

            <button disabled={disabled}>Sign Me Up!</button>
        </UserForm>
    )
}

const UserForm = styled.form`
    height: 60vh;
    width: 50vw;
    margin: 2% auto 2% auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #000000;
    border-radius: 15px;

    button{
        width: 35%;
        background-color: rgb(80, 170, 80);
        border: 2px solid rgb(80, 130, 80);
        border-radius: 25px;
        padding: 0.5%;
        box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.5);
        transition: 0.3s;
    }

    button:disabled{
        background-color: rgb(170, 80, 80);
        border: 2px solid rgb(150, 33, 33);
    }

    button:enabled{
        cursor: pointer;
    }

    button:hover{
        box-shadow: none;
    }
`