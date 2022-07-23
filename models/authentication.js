import db from '../db/connect.js'
import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const getAuthentication = async (req, res) => {
    
    let sql = `SELECT * FROM login WHERE username='${await req.body.username}'`;
 
    let query = db.query(sql, (err, results) => {

        console.log( results);
        
        if (results.length>0) { //in case query returns no results
            let data = results[0];

            let token = jwt.sign({username: data.username, company: data.company, access: data.access}, 
                process.env.JWT_SECRET, 
                {expiresIn: process.env.JWT_LIFETIME})
                
                if (data.username===req.body.username && data.password===req.body.password) {
                    res.status(StatusCodes.CREATED).json({msg: 'valid', token: token})
                }
                else {
                    res.status(StatusCodes.CREATED).json({msg: 'invalid'})
                }
        }
        
        else {res.status(StatusCodes.CREATED).json({msg: 'invalid'})}
            
    });

}

export default getAuthentication