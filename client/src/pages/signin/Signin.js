
import React, { useState } from 'react'
import "./signin.css"
import axios from 'axios'
import { URL } from '../../components/Constants'
import NavBar from '../../components/navbar/Navbar'


const SignIn = () => {
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
                // res.status(400).send("All input is required");
            } else {
                const res = await axios.post(`${URL}/auth/signup`, JSON.stringify(value))
                console.log("data", res)
                res.status(200).json("sendUser")
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
            const res = await axios.post(`${URL}/signin`, { name, password })
            const rese = res.data
            console.log(rese)
            setName('')
            setPassword('')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
        <NavBar/>
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