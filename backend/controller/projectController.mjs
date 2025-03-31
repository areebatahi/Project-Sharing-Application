import User from "../models/user/validation.mjs";
import "dotenv/config";
import JWT from "jsonwebtoken";
import chalk from "chalk";
import projectSchema from "../../schema/projectSchema.mjs";

const newProject = async (req, res) => {
    if (!req.body) {
        return req.status(400).json({ message: "Bad request" });
    }
    try {
        const project = await projectSchema.validateAsync(req.body)
        const newProject = await User.create({ ...project});
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
        const project = await project.find();
        res.json(project);
    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
};
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ message: "User updated successfully", user });
    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
};

export {newProject,getAllProject}