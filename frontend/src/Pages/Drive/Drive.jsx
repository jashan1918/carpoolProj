import React from 'react'
import CreateRideForm from '../../Components/driveform'
import Navbar from '../../Components/Navbar/Navbar'

const Drive = () => {
    const steps = [
        {
          number: 1,
          title: "Create your account",
          description:
            "Add your profile picture, a few words about you and your phone number to increase trust between members."
        },
        {
          number: 2,
          title: "Publish a ride",
          description:
            "Indicate departure and arrival points, the date of the ride and check our recommended price to increase your chances of getting your first passengers and ratings."
        },
        {
          number: 3,
          title: "Enjoy the ride",
          description:
            "That's how easy it is to start saving on travel costs!"
        }
      ];
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <div className='h-screen w-full flex overflow-hidden'>
        <div className='w-1/4 h-screen mt-30 fixed ml-10'>
          <CreateRideForm />
        </div>
        <div className='w-3/4 h-screen  ml-[15%] mt-46 '>
          <p className='font-bold text-black text-3xl text-center'>  <h1 className=' text-4xl font-bold '> 
      Publish a  <span className='text-blue-900'>Ride</span>  in just <span className='text-blue-900'>Minutes</span>  </h1></p>
      <p className=' text-gray-700 text-lg ml-40 mt-10 leading-8'>
        
    <div className="max-w-2xl mx-auto p-6 space-y-10">
      {steps.map((step) => (
        <div key={step.number} className="flex items-start space-x-4">
          <div className="bg-blue-100 text-blue-600 rounded-xl w-10 h-10 flex items-center justify-center font-semibold text-lg">
            {step.number}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {step.title}
            </h3>
            <p className="text-black max-w-prose">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
      </p>
     
   
        </div>
      </div>
    </div>
  )
}

export default Drive
