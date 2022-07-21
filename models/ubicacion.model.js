import mongoose, {Schema} from "mongoose";


const tema=new Schema({
        libro: { type: Schema.Types.ObjectId, ref: 'libro' },
        img:String,
        nombre:String,
        autor:String,
        descripcion: String,
        
})

const Ubicacion=mongoose.model('temas',tema);
export default Ubicacion;