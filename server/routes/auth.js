import express from 'express'
import { signup } from '../controllers/auth.js'


const router = express.Router()

//CREATE USER
router.post("/signup", signup)

//SIGN IN
router.post("/signin", )

//GOOGLE AUTH

export default router
// module.exports = router;