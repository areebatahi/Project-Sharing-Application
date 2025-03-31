import { useState } from "react";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    developer: "",
    description: "",
    hostedUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Project:", formData);
    // You can add API integration here to send data to a backend
    setFormData({ title: "", developer: "", description: "", hostedUrl: "" });
  };

  return (
    <div className="max-w-lg mx-auto m-15 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Submit Your Project</h2>

      <form onSubmit={handleSubmit}>
        {/* Project Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Project Title</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            placeholder="Enter project title" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required
          />
        </div>

        {/* Developer Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Developer Name</label>
          <input 
            type="text" 
            name="developer" 
            value={formData.developer} 
            onChange={handleChange} 
            placeholder="Enter your name" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Project Description</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            placeholder="Describe your project" 
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required
          />
        </div>

        {/* Hosted URL */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Hosted URL</label>
          <input 
            type="url" 
            name="hostedUrl" 
            value={formData.hostedUrl} 
            onChange={handleChange} 
            placeholder="Enter hosted project URL" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Submit Project
        </button>
      </form>
    </div>
  );
}
export default ProjectForm