import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader' // Importing a spinner component from react-spinners

const override = {
    display: 'block',
    margin: '100px auto',
}


const Spinner = ({loading }) => {
  return (
    <ClipLoader
        color="#36d7b7" // Color of the spinner
        loading={loading} // Boolean to control the loading state
        size={150} // Size of the spinner
        cssOverride={override} // Custom CSS for the spinner
    />
  )
}

export default Spinner



// {/*prop*/} // {/*loading*/}