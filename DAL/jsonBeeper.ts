import { Beeper } from "../models/types";
import jsonfile from 'jsonfile';
const DB_FILE_PATH = './db.json'

export const writeBeeperToJsonFile = async(newBeeper:Beeper):Promise<void>=>{
    const beepers: Beeper[] = await jsonfile.readFile(DB_FILE_PATH);
    beepers.push(newBeeper)
    await jsonfile.writeFile(DB_FILE_PATH, beepers);
}

export const getAllBeepersFromJson = async ():Promise<Beeper[]>=>{
    const beepers: Beeper[] = await jsonfile.readFile(DB_FILE_PATH); 
    return beepers
}

export const editBeeperToJsonFile = async(editBeeper:Beeper):Promise<void>=>{

    const beepers: Beeper[] = await getAllBeepersFromJson();
    console.log(beepers)
    const oldBeeper = beepers.find((u) => u.id === editBeeper.id);
    beepers[beepers.indexOf(oldBeeper!)] = editBeeper
    await jsonfile.writeFile(DB_FILE_PATH,beepers)
   }


