
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./signin.css"
import axios from 'axios'
import { URL } from '../../components/Constants'
import NavBar from '../../components/navbar/Navbar'


const SignIn = () => {
    const nav = useNavigate();
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handelName = (e) => {
        setName(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignin = async () => {
        try {
            const res = await axios({
                method: "post",
                url: `${URL}/auth/signin`,
                data: { name, password }
            })
            //add to local storage
            localStorage.setItem("token", res.data.token)
            nav("/todo")
            setName('')
            setPassword('')
        } catch (err) {
            alert("Unable to login")
        }
    }

    return (
        <>
            <NavBar />
            <div className='container'>
                <div className='wrapper'>
                    <div className='title'>
                        <h5>Sign in </h5>
                    </div>
                    <input type="text"
                        name="name"
                        className='input'
                        placeholder="user name"
                        value={name}
                        onChange={handelName} />
                    <input type="password"
                        name="password"
                        className='input'
                        placeholder="password"
                        value={password}
                        onChange={handlePassword} />
                    <button type='submit' className='signin-button' onClick={handleSignin}>Sign in</button>
                    <Link to='/signup'> <h5>or Sign up</h5></Link>
                </div>
            </div>
        </>
    )
}
export default SignIn
