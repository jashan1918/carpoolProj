import React from 'react'
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div className="h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512067214276-9f5a6ec1b26d?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
  <div className="flex pt-60 justify-center bg-opacity-50">
    <h1 className="text-white text-4xl sm:text-6xl font-bold">Find.Share.Ride</h1>
  </div>
  <h2 className="text-white place-self-center text-lg sm:text-lg font-bold">Save money, Reduce traffic, Enjoy your journey</h2>
  <div className='w-full  flex items-center justify-center pt-40'>
<div className='form  h-40'>
<form className="flex form flex-wrap justify-center gap-4 bg-white p-4 h-44">
            <input
              type="text"
              placeholder="From"
              className="border-2 input  text-xl text-center border-gray-200 p-2 rounded-lg b text-black placeholder-black w-full sm:w-auto "
            />
            <input
              type="text"
              placeholder="To"
              className="border-2 input  text-xl text-center border-gray-200 p-2 rounded-lg text-black placeholder-black w-full sm:w-auto"
            />
            <input
              type="number"
              placeholder="Passengers"
              className="border-2 input  text-xl text-center border-gray-200 p-2 rounded-lg  text-black placeholder-black w-full sm:w-auto"
            />
            <input
              type="date"
              className="border-2 input text-xl text-center border-gray-200 p-2 rounded-lg  text-black w-full sm:w-auto"
            />
          </form>
          <button className="find mt-16 place-self-center">
       Find Rides
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
        </svg>
      </button>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Hero
