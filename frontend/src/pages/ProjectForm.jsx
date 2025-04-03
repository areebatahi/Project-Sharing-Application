import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";


// Validation Schema (Same as Backend Joi)
const ProjectSchema = Yup.object({
  projectTitle: Yup.string().min(10, "Must be at least 10 characters").required("Required"),
  developerName: Yup.string().min(3, "Must be at least 3 characters").required("Required"),
  projectDescription: Yup.string().min(30, "Must be at least 30 characters").required("Required"),
  hostedURL: Yup.string().url().required("Required"),
});

const ProjectForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    projectTitle: "",
    developerName: "",
    projectDescription: "",
    hostedURL: "",
  };

  return (
    <div className="max-w-lg mx-auto m-15 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Submit Your Project</h2>
      <Formik
        initialvalues={initialValues}
        validationSchema={ProjectSchema}
        onSubmit={async (values) => {
          setLoading(true);
          console.log("values:", values);
          try {
            const response = await fetch("http://localhost:4000/api/data/project", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            });

            const data = await response.json();
            setLoading(false);
            console.log("Response:", response, "data", data);
            if (response.ok) {
              toast.success(data.message);
              navigate('/project');
            } else {
              toast.error(data.message || "An error occurred while adding project");
            }
          } catch (error) {
            setLoading(false);
            console.log("Error:", error);
            toast.error(error.message || "An error occurred while adding project");
          }
        }}
      >
        <Form>
          {/* Project Title */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Project Title</label>
            <Field
              type="text"
              name="projectTitle"
              placeholder="Enter project title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />

          </div>

          {/* Developer Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Developer Name</label>
            <Field
              type="text"
              name="developerName"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />

          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <Field
              as="textarea"
              name="projectDescription"
              placeholder="Describe your project"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />

          </div>

          {/* Hosted URL */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Hosted URL</label>
            <Field
              type="url"
              name="hostedURL"
              placeholder="Enter hosted project URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 rounded-md transition-all duration-300 disabled:bg-gray-500"
            disabled={loading}
          >
            {loading ? "Add Project..." : "Add Project"}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
export default ProjectForm