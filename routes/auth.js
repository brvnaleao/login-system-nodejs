const router = require('express').Router()
const User = require('../model/User')
const {registerValidation, loginValidation} = require('./validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



router.post('/register', async (req, res)=>{

    
    const {error} = registerValidation(req.body)
    
    if(error) return res.status(400).send(error.details[0].message)

        //Checking if the user is already in the database
        const emailExist = await User.findOne({email: req.body.email})
        if(emailExist) return res.status(400).send("This E-mail already exists in our database!")

        //Hash password

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        //Create new user
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        })
        try{
            const savedUser = await user.save()
            res.send({user: savedUser._id})
        }catch(err){
            res.status(400).send(err)
        }

    
    
})





router.post('/login', async (req, res) =>{

  

    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error)

    //chenkin is the user is already in the database, cause he needs to be registered to login

    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send("This E-mail is wrong!")

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send("Password is wrong!")
    //Create and assign a token

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
   
    res.header('auth-token', token).send(token)
    //res.send('Logged in!')

})
module.exports = router