import mongoose, {Schema} from "mongoose";

const libros=new Schema({
    img:String,
    nombre:String,
    autor:String,
    createdAct:{type:Date, default:Date.now}
})


const Biblioteca=mongoose.model('libro',libros);
export default Biblioteca;