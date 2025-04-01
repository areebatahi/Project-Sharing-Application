import Project from "../models/project/projectValidation.mjs";
import "dotenv/config";
import JWT from "jsonwebtoken";
import chalk from "chalk";
import projectSchema from "../schema/projectSchema.mjs";

const newProject = async (req, res) => {
    if (!req.body) {
        return req.status(400).json({ message: "Bad request" });
    }
    try {
        const project = await projectSchema.validateAsync(req.body)
        const newProject = await Project.create({ ...project});
        var token = JWT.sign({ id: project.id }, process.env.JWT_SECRET);

        await newProject.save();

        res.status(201).json({
            message: "Project submit successfully",
            user: { id: newProject.id, ...project },
            token: token
        });
    } catch (error) {
        console.error(chalk.bgRed("Error:"), error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
}

const getAllProject = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
        console.log(err)
    }
};

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await Project.findByIdAndDelete(id);
        res.json({ message: "Project deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
};
const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ message: "Project updated successfully", project });
    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
};

export {newProject,getAllProject,deleteProject,updateProject}