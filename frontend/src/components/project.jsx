import React from 'react'
import { Search } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Project = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-between m-3 ">
        <div className="flex">
          <div className="flex items-center bg-white border border-gray-300 m-2 shadow-md p-2 w-full max-w-md">
            <Search className="text-gray-500 ml-2" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-3 py-2 outline-none bg-transparent"
            />
          </div>
          <button className='w-auto bg-white border hover:bg-gray-100 border-gray-300 shadow-md m-2 p-2 max-w-md cursor-pointer'>search</button>
        </div>
        <button className='w-auto bg-green-600 hover:bg-green-700 text-white border border-gray-300 shadow-md m-2 p-2 max-w-md cursor-pointer' onClick={()=>{navigate('/projectForm')}}>Add Project</button>
      </div>

      <hr />

      <div class="container mx-auto px-4 py-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <div class="bg-white shadow-lg rounded-lg border border-gray-200 p-5 m-2">
            <h2 class="text-xl font-bold text-gray-900">Project Title</h2>
            <p class="text-gray-600 text-sm mt-1">By <span class="font-medium">Developer Name</span></p>

            <p class="text-gray-700 text-sm mt-3">
              This is a short description of the project. It provides an overview of what the project does.
            </p>

            <a href="https://example.com" target="_blank"
              class="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300">
              View Project ↗
            </a>
          </div>

        </div>
      </div>

    </>
  )
}

export default Project
