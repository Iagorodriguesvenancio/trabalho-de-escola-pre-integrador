const login = async (req,res) =>{
    try {
        const {email, senha} = req.body
       
        
       
    } catch (error) {
        res.status(500).send(err.message);
    }
}

export default login