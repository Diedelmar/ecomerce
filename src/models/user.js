const {Router} = require ('express')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/miBaseDeDatos', { useNewUrlParser: true, useUnifiedTopology: true });


const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});


const User = mongoose.model('User', userSchema);

const usersData = [
  {
    username: 'usuario1',
    email: 'usuario1@example.com',
    password: 'contraseña1',
  },
  {
    username: 'usuario2',
    email: 'usuario2@example.com',
    password: 'contraseña2',
  },
  {
    username: 'usuario3',
    email: 'usuario3@example.com',
    password: 'contraseña3',
  },
  {
    username: 'usuario4',
    email: 'usuario4@example.com',
    password: 'contraseña4',
  },
];

User.insertMany(usersData)
  .then((result) => {
    console.log('Usuarios registrados con éxito:', result);
  })
  .catch((error) => {
    console.error('Error al registrar usuarios:', error);
  });
  