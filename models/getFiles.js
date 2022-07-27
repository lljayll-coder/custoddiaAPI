import db from '../db/connect.js'
import { StatusCodes } from "http-status-codes";
import tokenData from './tokenData.js';

const getFiles = async(req, res) => {

    try {
        
    let company = await tokenData(req).company
    
    let get = await req.body.searchParameter;

    let sql = `SELECT * FROM ${company} WHERE first_name LIKE '%${get}%' OR last_name LIKE '%${get}%' OR phone LIKE '%${get}%' OR id = '${get}'`;
    
    let query = db.query(sql, (err, result) => {
    
        if (err) {
            res.send(err.sqlMessage)
        }
        else{
        res.send(result)
        
        }
    });

} catch (error) {
    res.send(error)
    
}
    
}

export { getFiles }