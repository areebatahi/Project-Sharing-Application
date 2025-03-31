import express from "express";
const router = express.Router();
import tokenVerification from "../Middleware/tokenVerification.mjs";
import {newProject,getAllProject} from "../controller/projectController.mjs";

router.get("/project",tokenVerification, getAllProject);
router.post("/project", newProject);
// router.put("/user/:id", updateUser);
// router.delete("/user/:id", deleteUser);

export default router;