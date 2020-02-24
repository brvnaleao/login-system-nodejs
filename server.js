const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const postRoute = require('./routes/posts.js')

dotenv.config();

//Connect to DB
mongoose.connect( process.env.DB_CONNECT,
    {useNewUrlParser: true,
    useUnifiedTopology: true },
    () => console.log('connected to db!')
)
const authRoutes = require('./routes/auth.js')


//Middelware
app.use(express.json())
var cors = require('cors');
app.use(cors());

//Routes Middlewares
app.use('/api/user', authRoutes)
app.use('/api/posts', postRoute)




app.listen(3000, ()=> console.log("Server up  and running"))