import React from 'react'
import { Link } from 'react-router-dom' // Importing Link for navigation
import { useState } from 'react'  //using component state to manage job listings
import { FaMapMarker } from 'react-icons/fa' // Importing react-icons for icons



const JobListing = ({job}) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description= job.description;

    if (!showFullDescription) { // If not showing full description, truncate it
        description = description.substring(0, 90) + '...'; // Truncate to 90 characters

    }
  return (
    <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{job.type}</div>
                <h3 className="text-xl font-bold">{job.title}</h3>
              </div>

              <div className="mb-5">
               {description}
              </div>

              <button className=" text-indigo-500 mb-5 hover:text-indigo-600">
                {showFullDescription ? ' Less' : ' More'}
                <span
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="ml-2 text-indigo-500 cursor-pointer"
                >
                  {showFullDescription ? '▲' : '▼'}
                </span>
              </button>

              <h3 className="text-indigo-500 mb-2">{job.salary}/ Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <FaMapMarker className= 'inline text-lg mb-1 mr-1'/>
                  {job.location}
                </div>
                <Link
                  to={`/jobs/${job.id}`} // Using template literals to create dynamic link (backticks )
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </Link>
              </div>
            </div>
          </div>
  )
}

export default JobListing