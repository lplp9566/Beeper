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
import { status } from "../models/types.js";
import { writeBeeperToJsonFile } from "../DAL/jsonBeeper.js";
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
