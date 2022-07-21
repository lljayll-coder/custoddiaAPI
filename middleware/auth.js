import jwt from 'jsonwebtoken';

const auth = async (req,res,next) => {
    
    const authHeader = req.headers.authorization;
    
    try {
        const token = authHeader.split(' ')[1]

        if (!authHeader || !authHeader.startsWith('Bearer')) {
        console.log('not authorized')
        }
        
        next()
        
    } catch (error) {
        console.log(error)
        res.send({msg: 'authentication token is not valid'})
    }
    
    

}

export default auth