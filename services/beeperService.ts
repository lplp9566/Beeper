import {createBeeper} from "../controllers/authController.js"
import {v4 as uuidv4} from"uuid"
import { Beeper,status } from "../models/types.js";
import { Stats } from "fs";
import { DateTime } from "luxon";
import{writeBeeperToJsonFile}from "../DAL/jsonBeeper.js"

export const creeteBeeper = async (nameOfBeeper :string):Promise<string>=>{
    const newBeeperId: string = uuidv4();

    const newBepper:Beeper= {
        id:newBeeperId,
        name:nameOfBeeper,
        status: status.manufactured,
        created_at:new Date()
    }
    await writeBeeperToJsonFile(newBepper)
    return newBeeperId
}
