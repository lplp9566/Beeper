import {createBeeper} from "../controllers/authController.js"
import {v4 as uuidv4} from"uuid"
import { Beeper,status,Latitude,Longitude } from "../models/types.js";
import { Stats } from "fs";
import { DateTime } from "luxon";
import{writeBeeperToJsonFile,getAllBeepersFromJson,editBeeperToJsonFile}from "../DAL/jsonBeeper.js"

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
export const getTheBeepers = async ()=>{
    const beepers = await getAllBeepersFromJson()
    return beepers
}
export const getBeeper =async (beeperId:string):Promise<Beeper>=>{
    const beepers = await getAllBeepersFromJson();

    const beeper = beepers.find(be =>{return be.id == beeperId});
    if (!beeper){
        throw new Error("Invalid beeper by the id 🥵.");
    }
    return beeper
    }

 export const setStatus = async(beeperid:string,LAT:number,LON:number):Promise<status>=>{
    
    const beepers = await getAllBeepersFromJson();
    let newStatus:status = 0
    const beeper = beepers.find(be =>{return be.id == beeperid});
    if (beeper?.status == 3){
        
    }
    if (beeper?.status! <4 ){
        
   
    switch (beeper?.status) {
        case 0:
            newStatus =1
            break;
        case 1:
            newStatus = 2 
            break;
            case 2: 
            newStatus = 3
            break;
            case 3 :
            await beeperBoom(beeper)
            newStatus = 4
            break;
        default:
            break;
    }
    const newBepper:Beeper= {
        id:beeperid,
        name:beeper!.name,
        status:newStatus,
        created_at:beeper!.created_at,
        latitude:LAT,
        longitude: LON
        
    }
    await editBeeperToJsonFile(newBepper)
    return newBepper.status

    }
    else{
        throw new Error("Invalid beeper by the id 🥵.");
    }
 }    
    
 export const CheckLocition = async(beeper:Beeper,LAT:number,LON:number)=>{
    const indexLat = Latitude.indexOf(LAT);
          const indexLot = Longitude.indexOf(LON);
          
          if (indexLat != indexLat){
              throw new Error("its nut good location");
              
          }
          else{
           const beep = await beeperBoom(beeper)
              const newBepper:Beeper= {
                  id:beeper.id,
                  name:beeper!.name,
                  status:4,
                  created_at:beeper!.created_at,
                  detonated_at: new Date(),
                  latitude:LAT,
                  longitude: LON
                  
              }
              await editBeeperToJsonFile(newBepper)
              return newBepper.status
          
         
  
  }
  }
export const beeperBoom = async(beeper:Beeper):Promise<void>=>{

    if (!beeper.latitude== undefined || !beeper.longitude == undefined ){
        let time = 10
        const startBooming = setInterval(()=>{
          
                console.log(`is gowning to explode in ${time} seconds`);
                time -= 1;
    
            if(time == 0){
                clearInterval(startBooming)
                console.log("💥💥💥💥💥💥")
            }
           
    
        },1000)
       
    }
    
    
    }
   
