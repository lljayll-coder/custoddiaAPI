import db from '../db/connect.js'
import { StatusCodes } from "http-status-codes";
import tokenData from './tokenData.js';

const writeFiles = async(req, res) => {
    
    let company = await tokenData(req).company

    let post = await req.body;
    
    let sql = `INSERT INTO ${company} SET ?`;
try {
    let query = db.query(sql, post, (err, result) => {
        if (err) {
            res.send(err.sqlMessage)
        }
        else{
        res.send('Success')
        }
    });

} catch (error) {
    console.log(error)
}
    
}

export { writeFiles }