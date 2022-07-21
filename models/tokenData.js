import jwt from 'jsonwebtoken';

const tokenData = (req) => {
    
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1]
    const data = jwt.verify(token, process.env.JWT_SECRET);
    
    return data
}

export default tokenData