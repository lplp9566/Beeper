var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { creeteBeeper, getTheBeepers, getBeeper, setStatus } from "../services/beeperService.js";
import { error } from "console";
export const createBeeper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nameofBeeper = req.body.name;
    try {
        const beeperId = yield creeteBeeper(nameofBeeper);
        if (!beeperId) {
            res.status(400).json({ error: "not god 🤬🤬🤬🤬)." });
            return;
        }
        res.status(200).json({ beeper: beeperId });
    }
    catch (_a) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});
export const getAllBeepers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBeepers = yield getTheBeepers();
        res.status(200).send(allBeepers);
    }
    catch (_a) {
        console.error(error);
        res.status(500).json({ error: "Internal server error." });
    }
});
export const getBeeperById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const beeperId = req.params.id;
        if (!beeperId) {
            res.status(400).json({ error: "beeper not fond🤦‍♀️🤦‍♀️." });
            return;
        }
        const beeper = yield getBeeper(beeperId);
        res.status(200).send(beeper);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: " god 🤕" });
    }
});
export const editStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const beeperId = req.params.id;
        const LAT = req.body.latitude || undefined;
        const LON = req.body.Longitude || undefined;
        if (!beeperId) {
            res.status(400).json({ error: "beeper not fond🤦‍♀️🤦‍♀️." });
            return;
        }
        const newStatus = yield setStatus(beeperId, LAT, LON);
        res.status(200).json({ theNewStatusIs: newStatus });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: " god 🤕" });
    }
});
