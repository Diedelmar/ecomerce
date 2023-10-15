import express from 'express';
import userRouter from './routes/userRouter';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import productosRouter from './routes/productos';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/api/productos', productosRouter);
app.use('/api/clientes', clientesRouter);
app.use('/api/users', userRouter);
mongoose.connect('mongodb+srv://Veronica:3170@cluster0.jn6wv09.mongodb.net/?retryWrites=true&w=majority', (error) => {
  if (error) {
    console.log("Error al conectar a la base de datos" + error);
    process.exit();
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


