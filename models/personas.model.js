import mongoose, {Schema} from "mongoose";

const persona=new Schema({
    nombre:String,
    email:String,
    contraseña:{type:Number},
    createdAct:{type:Date, default:Date.now}
})


const Personas=mongoose.model('persona',persona);
export default Personas;