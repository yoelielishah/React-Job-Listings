import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom' // Importing React Router components for multiple pages
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import HomeCards from './components/HomeCards'
// import JobListings from './components/JobListings'
// import ViewAllJobs from './components/ViewAllJobs'


import MainLayout from './layouts/MainLayout' // Importing the MainLayout component
import HomePage from './pages/HomePage' // Importing the HomePage component
import JobsPage from './pages/JobsPage' // Importing the JobsPage component
import NotFoundPage from './pages/NotFoundPage'
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'



// Adds new Job
const App = () => {
  const addJob = async (newJob) =>{
  // console.log(newJob);
  const res = await fetch ('/api/jobs', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJob), // Converting the new job object to a JSON string
  })
  return;
}

  //Deletes a job
  const deleteJob = async (id) => {
    //console.log('delete', id);

  const res = await fetch (`/api/jobs/${id}`, { //note: the URL should be `/api/jobs/${id}` to correctly target the job by its ID
    method:'DELETE',
  })
  return;

  };

  // Updates a job
   const updateJob = async (id, job) => {
    //console.log('update', id);

  const res = await fetch (`/api/jobs/${id}`, { //note: the URL should be `/api/jobs/${id}` to correctly target the job by its ID
    method:'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job), // Converting the updated job object to a JSON string
  })
  return;

  };


const router = createBrowserRouter(
 createRoutesFromElements(

  <Route path='/' element={<MainLayout/>}> 
    < Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobsPage/>}/>
    <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
     <Route path= '/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/> } loader={jobLoader} />
    <Route path= '/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />      {/*Note: The path sis '/jobs/:id' to match the job ID parameter Dynamic */}
    <Route path='*' element={<NotFoundPage/>}/>

    
  </Route>
)
);
  return <RouterProvider router = {router}/>;
 
};

export default App