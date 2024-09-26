import { promises } from "dns";
import express, {Request,Response} from "express";
import {creeteBeeper,getTheBeepers,getBeeper,setStatus} from "../services/beeperService.js"
import { error } from "console";


export const createBeeper = async(req: Request,res:Response):Promise<void>=>{

    const nameofBeeper = req.body.name;
    try{
    const beeperId = await creeteBeeper(nameofBeeper) 
    if (!beeperId){
        res.status(400).json({ error: "not god 🤬🤬🤬🤬)." });
        return;

    }
    res.status(200).json({beeper:beeperId})
}
catch{
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error." });
}
}
export const getAllBeepers = async(req:Request,res:Response)=>{
    try{
       
          const allBeepers = await getTheBeepers()
          res.status(200).send(allBeepers)
      
    }
    catch{
        console.error( error);
        res.status(500).json({ error: "Internal server error." });
    }
}
export const getBeeperById = async(req:Request,res:Response)=>{
    try{
         const beeperId = req.params.id;
        if (!beeperId ) {
            res.status(400).json({ error: "beeper not fond🤦‍♀️🤦‍♀️." });
            return;
          }
         const beeper = await getBeeper(beeperId) 
         res.status(200).send(beeper)

    }
    catch(error){
        console.error( error);
        res.status(500).json({error:" god 🤕"})
    }
}

export const editStatus = async (req:Request,res:Response)=>{
    try{
        const beeperId = req.params.id;
        const LAT = req.body.LAT ||undefined 
        const LON = req.body.LON || undefined
        if (!beeperId ) {
            res.status(400).json({ error: "beeper not fond🤦‍♀️🤦‍♀️." });
            return;
          }
          const newStatus = await setStatus(beeperId,LAT,LON)
          res.status(200).json({theNewStatusIs:newStatus}) 
    }
    catch(error){
        console.error( error);
        res.status(500).json({error:" god 🤕"})
    }
}