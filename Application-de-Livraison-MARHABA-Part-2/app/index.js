const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config()
require('./models')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Data Base
require('./config/dbConfig')

// Routers
const authRouter = require('./routers/authRouter')
app.use('/api/auth', authRouter);
const userRouter = require('./routers/userRouter')
app.use('/api/user', userRouter);
app.all('*', (req, res) => {
    res.send(`Page not found`)
})


// Port
const port = process.env.PORT || 5050
app.listen(port, ()=> console.log(`Server run in port: ${port}`))
