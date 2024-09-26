var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jsonfile from 'jsonfile';
const DB_FILE_PATH = './db.json';
export const writeBeeperToJsonFile = (newBeeper) => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield jsonfile.readFile(DB_FILE_PATH);
    beepers.push(newBeeper);
    yield jsonfile.writeFile(DB_FILE_PATH, beepers);
});
export const getAllBeepersFromJson = () => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield jsonfile.readFile(DB_FILE_PATH);
    return beepers;
});
export const editBeeperToJsonFile = (editBeeper) => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield getAllBeepersFromJson();
    console.log(beepers);
    const oldBeeper = beepers.find((u) => u.id === editBeeper.id);
    beepers[beepers.indexOf(oldBeeper)] = editBeeper;
    yield jsonfile.writeFile(DB_FILE_PATH, beepers);
});
