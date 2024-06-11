import {Router} from "express"

let servidor = Router();

servidor.post('/login',(req, resp)=>{
    const{user,senha} = req.body;

    if(user ==='guilherme' && senha ==="1234"){
        return resp.status(200).json({message:'Login com sucesso'});

    }else{
        return resp.status(401).json({message:'User/senha inválidos'});
    }
});

export default servidor