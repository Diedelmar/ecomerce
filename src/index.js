import express, { json } from "express";
import mongoose from "mongoose";
import userRouter from './routes/userRouter';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});

app.use(json());

mongoose.connect("mongodb+srv://Veronica:3170@cluster0.jn6wv09.mongodb.net/?retryWrites=true")
  .then(() => {
    console.log('Conectado a la base de datos');
  });

app.use("/api/user", userRouter);
