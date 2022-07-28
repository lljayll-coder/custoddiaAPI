import express from "express";
import dotevn from 'dotenv';
import db from './db/connect.js'
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'
import 'express-async-errors';
import { login } from './controllers/authController.js';

import notFoundMiddleware from './middleware/not-found.js'
import errorHandleMiddleware from "./middleware/error-handler.js";

import authenticateUser from './middleware/auth.js'

dotevn.config();

const app = express();

//middleware

app.use(express.json());

app.get('/', (req,res) => {
    res.send({msg: 'HI'})
})

app.get('/api/v1', (req,res) => {
    res.send({msg: 'API CONNECTED'})
})

app.post('/login', (req,res,next) => {

login(req,res,next)

});

//app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs',authenticateUser, jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandleMiddleware)

const port = process.env.PORT;

const start  = () => {

    try {
        db.connect;
        app.listen(port, ()=>{
            console.log(`Server is listenting on port ${port}`)
        });
        console.log('mysql connected');
    } catch (error) {
        throw err
    }
    

}

start();