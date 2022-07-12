import mongoose, {Schema} from "mongoose";
var libro = mongoose.model('libro');

const tema=new Schema({
        libro: { type: Schema.ObjectId, ref: "libro" },
        sinopsis: String,
})

const Ubicacion=mongoose.model('temas',tema);
export default Ubicacion;