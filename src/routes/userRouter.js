import { Router } from "express";
import {userModel} from "../models/user";



const router = Router();
 router.get ('/', async (req ,res)=>{
    try{
        let users= await userModel .find({});
        res.send ({result:"Success", playload: users})
    } catch (error){
        console.log("Cant not get user with Mongoose:"+error);
    }
 } )
 router.post ('/', async (req, res)=>{
    let {firts_name, last_name ,email} = req.body;
    if (!firts_name||!last_name||!email)return res.send ({status: 
        "error", error: "Incomplete values" })};
    let result  = await userModel.create ({
        firtsName : firts_name,
        lastName : last_name,
        email});
    });
    res.send ({
        status :"success",playload: result
    })
 export default router;