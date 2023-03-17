const express = require('express');           //import express
const app = express();                         //use express
const mongoose = require('mongoose');         //import mongodb
const dotenv = require('dotenv');               //import dotenv
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')
const cors = require("cors")



dotenv.config();                           // use dotenv

mongoose.connect(process.env.mongoose_URL)       // use Mongodb its a promise
.then(()=>{
    console.log('DBconnection Successful!')
})
.catch((err)=>{
    console.log(err)
});

app.use(cors())
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.listen(5000, ()=>{                             // run express
    console.log('backend server is running');                   
});