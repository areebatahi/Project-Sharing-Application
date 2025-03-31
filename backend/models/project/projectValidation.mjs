import { required } from 'joi';
import mongoose from 'mongoose';
const projectSchema = new mongoose.Schema(
    {
        projectTitle: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        developerName: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        projectDescription: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        hostedURL: {
            type: mongoose.Schema.Types.String,
            required: true,
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    },
);
const project = mongoose.model('Project', projectSchema);
export default project;