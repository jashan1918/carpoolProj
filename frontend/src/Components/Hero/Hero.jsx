import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div
        className="h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1661883289130-2ef3b6612fb3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjByb2Fkc3xlbnwwfHwwfHx8MA%3D%3D)",
        }}
      >
        <div className="flex pt-42 justify-center bg-opacity-50">
          <h1 className="text-white text-4xl sm:text-6xl font-bold">
            Find.Share.Ride
          </h1>
        </div>
        <h2 className="text-white place-self-center text-lg sm:text-lg font-bold">
          Save money, Reduce traffic, Enjoy your journey
        </h2>
        <div className="w-full  flex items-center justify-center pt-50">
          <div className="form  h-24">
            <form className="flex form flex-wrap  gap-4 bg-white p-4 h-30">
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
              <button
                type="submit"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold mt-6 px-6 rounded-lg shadow transition-all duration-300"
              >
                Find Rides
                <svg
                  className="w-5 h-7 ml-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
