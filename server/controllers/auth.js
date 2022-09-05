

import mongoose from "mongoose"
import User from '../models/User.js'
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { createError } from "../error.js";

export const signup = async (req, res, next) => {
    try {
        const user = User.findOne({ email: req.body.email }, async (err, doc) => {
            if (err) {
                next(err)
            }
            if (doc) {
                res.status(200).send("User already registered, please login")
            } else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.password, salt);
                const newUser = new User({ ...req.body, password: hash })
                await newUser.save()
                res.status(200).send("User has been created")
            }
        })
    } catch (err) {
        console.log(err)
        next(createError(404, "Not found!"))
    }
}

export const signin = async (req, res, next) => {

    try {
        const user = await User.findOne({ name: req.body.name })
        // check if no user user 
        if (!user) {
            return next(createError(404, "user not found"))
        }
        else if (user && (await bcrypt.compare(req.body.password, user.password))) {

            //Authente user by assing a json web token
            const token = Jwt.sign({ id: user._id }, process.env.TOKEN_KEY)
            // save user token
            user.token = token;
            res.status(200).json({
                message: "Login successful",
                user,
                token
            })
        }
    } catch (error) {
        return next(createError(400, "An error occured"))
    }
}

