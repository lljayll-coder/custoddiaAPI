
const auth = async (req,res,next) => {
    
try {

        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1]
        if (!authHeader || !authHeader.startsWith('Bearer')) {
        res.send({msg: 'not authorized'})
        }
        
        next()
        
    } catch (error) {
        res.send({msg: 'authentication token is not valid'})
    }
    
    

}

export default auth