import React from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa'; // Importing an icon for the back button
import { toast } from 'react-toastify'; // Importing toast for notifications
// import { useState,useEffect } from 'react'
// import Spinner from '../components/Spinner';


const JobPage = ( {deleteJob} ) => {
    const navigate = useNavigate(); // Hook to programmatically navigate
    const { id } = useParams(); // Get the job ID from the URL parameters
    const job = useLoaderData(); // Get the job data from the loader

    const onDeleteClick = (jobId) => {

        const confirm= window.confirm('Are you sure you want to delete this job listing?');
        if (!confirm) 
            return; // If the user cancels, do nothing

            deleteJob(jobId); // Call the deleteJob function with the job ID

            toast.success('Job listing deleted successfully!'); // Show a success notification

            navigate('/jobs'); // Navigate back to the job listings page after deletion
        
    }
    return (
        <>
         <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to='/jobs'
          className="text-indigo-500 hover:text-indigo-600 flex items-center">
        
          < FaArrowLeft className = 'mr-2'/> Back to Job Listings
        </Link>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              
            
              <div className="text-gray-500 mb-4">{ job.type }</div>
              <h1 className="text-3xl font-bold mb-4">
                { job.title }
              </h1>
              <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              
                <FaMapMarker className= 'text-orange-700 mr-2' />
                <p className="text-orange-700">{job.location}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <div className="text-indigo-800 text-lg font-bold mb-6">Job Description</div>
                {job.description}
              

             

              <div className="text-indigo-800 text-lg font-bold mb-2">Salary</div>

              <p className="mb-4">{job.salary} / Year</p>
            </div>
          </main>

          {/*<!-- Sidebar -->*/}
          <aside>
            {/*<!-- Company Info -->*/}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-xl font-bold mb-6">Company Info</div>

              <div className="text-2xl">{job.company.name}</div>

              <div className="mb-2">
                {job.company.description} 
              </div>

              <hr className="my-4" />

              <div className="text-xl mb-1 font-semibold">Contact Email:</div>

              <div className="mb-4 bg-indigo-100 p-2 font-bold">
                {job.company.contactEmail}
              </div>

              <div className="text-xl mb-1 font-semibold">Contact Phone:</div>

              <div className="mb-4 bg-indigo-100 p-2 rounded">{job.company.contactPhone}</div>
            </div>

            {/*<!-- Manage -->*/}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
                to={`/edit-job/${job.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mb-4 block">
                Edit Job
                </Link>
             
              <button onClick= { () => onDeleteClick(job.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline block">
               
              
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
        </>
    )




   { /* const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true); // State to manage loading status 
*/}
   { /* useEffect(() => {
        const fetchJob = async () => {
            try {
                 const res = await fetch (`api/jobs/${id}`);             
                const data = await res.json();                                      // Parse the response as JSON
                setJob(data);  
        }
        catch (error){

          console.log('Error fetching data', error); // Log any errors
        }
        finally {
          setLoading(false); // Set loading to false after fetching
        }
        }

        fetchJob();
    },[]);
    */}

// { /*loading ? <Spinner />  : */}

  // return  ( <h1>{job.title}</h1> )
}

const jobLoader = async ({ params }) => {
    // const { id } = params; // Get the job ID from the URL parameters
    const res = await fetch(`/api/jobs/${params.id}`); // Fetch job data from the API
    const data = await res.json(); // Parse the response as JSON
    return data; // Return the job data

};

export  { JobPage as default, jobLoader }; // Export the JobPage component and the jobLoader function