
import React, { useState } from 'react'
import "./signin.css"
import axios from 'axios'
import { URL } from '../../components/Constants'
import NavBar from '../../components/navbar/Navbar'
import { useNavigate } from "react-router-dom";


const SignIn = () => {
    const nav = useNavigate();
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const [value, setValue] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handelName = (e) => {
        setName(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChange = (e) => {
        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        const message = "you are signed up"
        try {
            if (!(value.email && value.password && value.name)) {
                alert("complete form")
            } else {
                const res = await axios({
                    method: 'post',
                    url: `${URL}/auth/signup`,
                    data: value
                })
                console.log("data", res)
                alert(message)
                setValue({ name: "", email: "", password: "" })
            }
        } catch (error) {
            console.log("eror code", JSON.stringify(error))
        }
    }
    const handleSignin = async (e) => {
        e.preventDefault()
        const message = "Login successful"
        try {
            const res = await axios({
                method: "post",
                url: `${URL}/auth/signin`,
                data: { name, password }
            })
            //add to local storage
            localStorage.setItem("token", res.data.token)
            console.log("localStorage", res.data)
            nav("/todo")
            setName('')
            setPassword('')
        } catch (err) {
            console.log(err)
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

                    <h5>or Sign up</h5>

                    <div className='alt_login'>
                        <input type="text"
                            name="name"
                            className='alt_input'
                            placeholder="username"
                            value={value.name}
                            onChange={handleChange} />
                        <input type="text"
                            name="email"
                            className='alt_input'
                            placeholder="email"
                            value={value.email}
                            onChange={handleChange} />
                        <input type="password"
                            name="password"
                            className='alt_input'
                            placeholder="password"
                            value={value.password}
                            onChange={handleChange} />
                        <button type="submit" className='signin-button' onClick={handleSignUp}>Sign up</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default SignIn