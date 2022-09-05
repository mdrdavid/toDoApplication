

import mongoose from "mongoose"
import User from '../models/User.js'
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { createError } from "../error.js";



export const signup = async (req,res, next)=>{
try{
    User.findOne({ email: req.body.email}, async (err, doc)=>{
        if(err){
            next(err)
        }
        if(doc){
            res.status(200).send("User already registered, please login")
        } else{
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const newUser = new User({...req.body, password:hash})
            await newUser.save()
            res.status(200).send("User has been created")
        }
    })
}catch(err){
    console.log(err)
    next(createError(404,"Not found!"))
}
}

export const signin = async (req, res, next) => {

    try {
        const user = await User.findOne({name:req.body.name})
        console.log("user", user)
        if (!user) {
            return next(createError(404, "user not found"))
        } else {
          res.status(200).json({
            message: "Login successful",
            user,
          })
        }
      } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
          })
      }
    }







    // export const googleAuth = async (req, res, next) =>{
    //     try{
    //     const user =  await User.findOne({email:req.body.email})
    //     if(user){
    //     const token = Jwt.sign({id:User._id}, process.env.JWT)
    //     res.cookie("access_token", token,{
    //         httpOnly:true
    //     }).status(200)
    //     .json(user._doc)
    // } else{
    //     const newUser = new User({
    //         ...req.body,
    //         fromGoogle:true
    //     })
    //     const savedUser = await newUser.save()
    //     const token = Jwt.sign({id:savedUser._id}, process.env.JWT)
    //     res.cookie("access_token", token,{
    //         httpOnly:true
    //     }).status(200)
    //     .json(savedUser._doc)
    // }
    // }
    // catch(err){
    //     next(err)
        
    // }

    // }