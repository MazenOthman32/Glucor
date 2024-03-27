const express = require('express');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello World!");
})
app.post('/signup', userRouter);
app.post('/login', userRouter);
app.get('/logout', userRouter)
app.post('/forgotPassword',userRouter)
app.patch('/resetpassword/:token',userRouter)

module.exports = app;