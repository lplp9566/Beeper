import { Beeper } from "../models/types";
import jsonfile from 'jsonfile';
const DB_FILE_PATH = './db.json'

export const writeBeeperToJsonFile = async(newBeeper:Beeper):Promise<void>=>{
    const beepers: Beeper[] = await jsonfile.readFile(DB_FILE_PATH);
    beepers.push(newBeeper)
    await jsonfile.writeFile(DB_FILE_PATH, beepers);
}


