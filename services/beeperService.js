var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { v4 as uuidv4 } from "uuid";
import { status, Latitude, Longitude } from "../models/types.js";
import { writeBeeperToJsonFile, getAllBeepersFromJson, editBeeperToJsonFile } from "../DAL/jsonBeeper.js";
export const creeteBeeper = (nameOfBeeper) => __awaiter(void 0, void 0, void 0, function* () {
    const newBeeperId = uuidv4();
    const newBepper = {
        id: newBeeperId,
        name: nameOfBeeper,
        status: status.manufactured,
        created_at: new Date()
    };
    yield writeBeeperToJsonFile(newBepper);
    return newBeeperId;
});
export const getTheBeepers = () => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield getAllBeepersFromJson();
    return beepers;
});
export const getBeeper = (beeperId) => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield getAllBeepersFromJson();
    const beeper = beepers.find(be => { return be.id == beeperId; });
    if (!beeper) {
        throw new Error("Invalid beeper by the id 🥵.");
    }
    return beeper;
});
export const setStatus = (beeperid, LAT, LON) => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield getAllBeepersFromJson();
    let newStatus = 0;
    const beeper = beepers.find(be => { return be.id == beeperid; });
    if ((beeper === null || beeper === void 0 ? void 0 : beeper.status) == 3) {
    }
    if ((beeper === null || beeper === void 0 ? void 0 : beeper.status) < 4) {
        switch (beeper === null || beeper === void 0 ? void 0 : beeper.status) {
            case 0:
                newStatus = 1;
                break;
            case 1:
                newStatus = 2;
                break;
            case 2:
                newStatus = 3;
                break;
            case 3:
                yield beeperBoom(beeper);
                newStatus = 4;
                break;
            default:
                break;
        }
        const newBepper = {
            id: beeperid,
            name: beeper.name,
            status: newStatus,
            created_at: beeper.created_at,
            latitude: LAT,
            longitude: LON
        };
        yield editBeeperToJsonFile(newBepper);
        return newBepper.status;
    }
    else {
        throw new Error("Invalid beeper by the id 🥵.");
    }
});
export const CheckLocition = (beeper, LAT, LON) => __awaiter(void 0, void 0, void 0, function* () {
    const indexLat = Latitude.indexOf(LAT);
    const indexLot = Longitude.indexOf(LON);
    if (indexLat != indexLat) {
        throw new Error("its nut good location");
    }
    else {
        const beep = yield beeperBoom(beeper);
        const newBepper = {
            id: beeper.id,
            name: beeper.name,
            status: 4,
            created_at: beeper.created_at,
            detonated_at: new Date(),
            latitude: LAT,
            longitude: LON
        };
        yield editBeeperToJsonFile(newBepper);
        return newBepper.status;
    }
});
export const beeperBoom = (beeper) => __awaiter(void 0, void 0, void 0, function* () {
    if (!beeper.latitude == undefined || !beeper.longitude == undefined) {
        let time = 10;
        const startBooming = setInterval(() => {
            console.log(`is gowning to explode in ${time} seconds`);
            time -= 1;
            if (time == 0) {
                clearInterval(startBooming);
                console.log("💥💥💥💥💥💥");
            }
        }, 1000);
    }
});
