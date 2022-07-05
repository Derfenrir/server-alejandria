import models from "../models";



export default{
    addPersona:async(req,res,next)=>{
        try{
            const{
                clave,
                nombre,
                apellidos,
                telefono,
                email
            }=req.body;
            const persona=new models.Personas({
                clave,
                nombre,
                apellidos,
                telefono,
                email
            });

            const guardar=await persona.save();
            res.status(200).json(guardar);
        }catch(e){
            res.status(500).send({
                message: 'Ocurrio un error al guardar en el server'
            });
            next(e);
        }
    }
}
