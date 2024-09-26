import { promises } from "dns";
import express, {Request,Response} from "express";
import {creeteBeeper} from "../services/beeperService.js"
import { error } from "console";


export const createBeeper = async(req: Request,res:Response):Promise<void>=>{

    const name = req.body.name;
    try{
    const beeperId = await creeteBeeper(name) 
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