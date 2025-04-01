import express from "express";
const router = express.Router();
import { newProject, getAllProject, deleteProject, updateProject } from "../controller/projectController.mjs";

router.get("/project", getAllProject);
router.post("/project", newProject);
router.put("/project/:id", updateProject);
router.delete("/project/:id", deleteProject);

export default router;