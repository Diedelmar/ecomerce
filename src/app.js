import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import productosRouter from './routes/productos'; 

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const hbs = exphbs.create({ });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use('/api/productos', productosRouter); 
app.use('/api/clientes', clientesRouter); 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
