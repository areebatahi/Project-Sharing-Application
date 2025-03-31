import joi from "joi";

const projectSchema = joi.object({
   projectTitle: joi.string().required(),
   developerName : joi.string().required(),
   projectDescription: joi.string().required(),
   hostedURL : joi.string().required()
})

export default projectSchema;