import express,{Router} from "express";
import{createBeeper} from "../controllers/authController.js"


const router: Router = express.Router();

router.route("/api/beepers").post(createBeeper)
router.route("/api/beepers").get()
router.route("/api/beepers/:id").get()
router.route("/api/beepers/status").put()
router.route("api/beepers/:id").delete()
router.route("/api/beepers/status/:status").get()


export default router;
