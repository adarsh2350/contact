const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require("../db/conn")
const User = require("../model/userSchema")

router.get('/',(req,res)=>{
    res.send('hello from router')
})

// router.post('/register',(req,res)=>{
//     const { name, email, phone, work, password, cpassword} = req.body
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"fill the fields properly"}) 
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Email already exist"})
//         }
//         const user = new User({name, email, phone, work, password, cpassword})
//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfully"})
//         }).catch((err)=>{res.status(500).json({error:"failed to register"})})
//     }).catch((err)=>{console.log(err)})
// })

router.post('/register',async (req,res)=>{
    const { name, email, phone, work, password, cpassword} = req.body
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"fill the fields properly"}) 
    }
    try{
        const userExist = await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({error:"Email already exist"})
        }
        else if(password!=cpassword){
            return res.status(422).json({error:"password error"})
        }
        else{
            const user = new User({name, email, phone, work, password, cpassword})
            await user.save()
            res.status(201).json({message:"user registered successfully"})
        }    
    }catch (err){console.log(err)}
})


router.post('/signin',async (req,res)=>{
    try{
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({error:"fill the fields properly"}) 
        }
        const userLogin = await User.findOne({email: email})
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password)
            let token = await userLogin.generateAuthToken()
            console.log(token)
            res.cokkie('jwttoken',token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })
            if(isMatch){
                res.json({message:"user Signin successfully"})
            }
            else{
                res.status(400).json({error:"Invalid credentials"})    
            }
        }
        else{
            res.status(400).json({error:"User error"})
        }
    }catch (err){console.log(err)}
})

module.exports = router