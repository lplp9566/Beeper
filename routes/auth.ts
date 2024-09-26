import express,{Router} from "express";
import{createBeeper,getAllBeepers,getBeeperById,editStatus} from "../controllers/authController.js"


const router: Router = express.Router();

router.route("/api/beepers").post(createBeeper)
router.route("/api/beepers").get(getAllBeepers)
router.route("/api/beepers/:id").get(getBeeperById)
router.route("/api/beepers/:id").put(editStatus)
router.route("api/beepers/:id").delete()
router.route("/api/beepers/status/:status").get()


export default router;
