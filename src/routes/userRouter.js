import { Router} from "express";
import { userModel } from "../models/user";

const router = Router();

router.get('/', async (req, res) => {
  try {
    let users = await userModel.find({});
    res.send({ result: "Success", payload: users });
  } catch (error) {
    console.log("Cannot get users with Mongoose: " + error);
    res.status(500).send({ status: "error", error: "Internal Server Error" });
  }
});

router.post('/', async (req, res) => {
  let { first_name, last_name, email } = req.body;
  if (!first_name || !last_name || !email) {
    return res.status(400).send({ status: "error", error: "Incomplete values" });
  }

  try {
    let result = await userModel.create({
      firstName: first_name,
      lastName: last_name,
      email: email,
    });

    res.send({
      status: "success",
      payload: result,
    });
  } catch (error) {
    console.log("Cannot create user with Mongoose: " + error);
    res.status(500).send({ status: "error", error: "Internal Server Error" });
  }
});

export default router; 
