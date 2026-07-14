import React from 'react'
import { useState, useEffect } from 'react'
import JobListing  from './JobListing'
import Spinner from './Spinner'


const JobListings = ({ isHome = false}) => {
    // console.log(jobs); console ninja extension
    // const JobListings = isHome ? jobs.slice(0, 3) : jobs['jobs' ] // Get the first 3 jobs
    // const JobListings = isHome ? jobs.slice(0, 3) : jobs ; // Get the first 3 jobs
    const[jobs, setJobs] = useState([]); // State to hold job listings
    const[loading, setLoading] = useState(true); // State to manage loading state


    useEffect(() => { 
      const fetchJobs = async () => {
        const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
        try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
        }
        catch (error){

          console.log('Error fetching data', error); // Log any errors
        }
        finally {
          setLoading(false); // Set loading to false after fetching
        }

      }
      fetchJobs(); // Call the fetch function
     }, []);

  return (
    <div>
        {/* Browse Jobs */}
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Featured Jobs' : 'Browse All Jobs'}
        </h2>
        
          {loading ? (<Spinner loading={loading} />) :
          // If loading, show spinner
          (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) =>(
                            <JobListing key={job.id} job={job} />
                        ))}
          </div>
          )}
        
      </div>
    </section>

    </div>
  )
}

export default JobListings