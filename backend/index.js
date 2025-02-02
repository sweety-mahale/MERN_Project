const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')
// const stripe = require('stripe')('sk_test_51PJVJZSGpZvoPybBYEufDLfAHcVXwiHaWRJugJpwhjZOAIZs7giMxWe6YRpiIfgZSWBMYdv4Kib76McP8bEtLQqP00HRQH2rYz')


const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

//stripe
app.use(bodyParser.json());

// Route to create a payment session
// app.post('/create-payment-session', );

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
