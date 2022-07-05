import mongoose, {Schema} from "mongoose";

const persona=new Schema({
    clave:{type:String},
    nombre:String,
    apellidos:String,
    telefono:{type:Number},
    email:String,
    createdAct:{type:Date, default:Date.now}
})


const Personas=mongoose.model('persona',persona);
export default Personas;