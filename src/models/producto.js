import { Schema, model, connect, connection } from 'mongoose';


const productoSchema = new Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: { type: String },
  existencia: { type: Number, required: true }
});


const Producto = model('Producto', productoSchema);

connect('mongodb://localhost:27017/tuBaseDeDatos', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
    
   
    Producto.find({}, (err, productos) => {
      if (err) {
        console.error('Error al consultar productos:', err);
      } else {
        console.log('Productos encontrados en la base de datos:');
        console.log(productos);
      }
      
      connection.close();
    });
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

