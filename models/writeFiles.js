import db from '../db/connect.js'
import { StatusCodes } from "http-status-codes";
import tokenData from './tokenData.js';

const writeFiles = async(req, res) => {
    
    try {

    let company = await tokenData(req).company

    let post = await req.body;
    
    let sql = `INSERT INTO ${company} SET ?`;

    let query = db.query(sql, post, (err, result) => {
        if (err) {
            res.send(err.sqlMessage)
        }
        else{
        res.send('Success')
        }
    });

} catch (error) {
    res.send(error)
}
    
}

export { writeFiles }