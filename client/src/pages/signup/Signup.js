
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import "../signin/signin.css"
import { URL } from '../../components/Constants'
import NavBar from '../../components/navbar/Navbar'


const Signup = () => {
    const nav = useNavigate()
    const [value, setValue] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSignUp = async () => {
        const message = "you are signed up"
        try {
            if (!(value.email && value.password && value.name)) {
                alert("complete form")
            } 
            else if(value.password.length <8){
                alert('A Strong Password should contain  a lowercase, uppercase,a number, minimum 8 charactors')
            } 
            else {
                const res = await axios({
                    method: 'post',
                    url: `${URL}/auth/signup`,
                    data: value
                })
                console.log("data", res)
                setValue({ name: "", email: "", password: "" })
                alert(message)
                nav("/")
            }
            }catch (error) {
         alert("Unable to sign up")
        }
    }

    return (
        <>
            <NavBar />
            <div className='container'>
                <div className='wrapper'>
                    <div className='alt_login ' id='signup'>
                        <input type="text"
                            name="name"
                            className='input'
                            placeholder="username"
                            value={value.name}
                            onChange={handleChange} />
                        <input type="email"
                            name="email"
                            className='input'
                            placeholder="email"
                            value={value.email}
                            onChange={handleChange} />
                        <input type="password"
                            name="password"
                            className='input'
                            placeholder="password"
                            value={value.password}
                            onChange={handleChange} />
                        <button type="submit" className='signin-button' onClick={handleSignUp}>Sign up</button>
                        <Link to='/'> <h5>or Login</h5></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
