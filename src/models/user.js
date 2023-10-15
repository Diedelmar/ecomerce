import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://Veronica:3170@cluster0.jn6wv09.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firts_name: String,
  last_name: String,
  email: String,
  
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());


app.post('/api/users', (req, res) => {
  const userData = req.body;

  User.create(userData)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error al crear el usuario' });
    });
});


app.get('/api/users', (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error al obtener usuarios' });
    });
});



app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
module.exports = {userModel}