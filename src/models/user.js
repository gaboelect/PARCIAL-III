const {Schema,model} =require('mongoose')
const userSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "nombre es requerido"],
  },
  codigo: {
    type: String,
    required: [true, "codigo es requerido"],
  }
});
module.exports=model('User',userSchema)