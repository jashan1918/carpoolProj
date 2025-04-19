import { NavLink } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

import { useState } from "react";

function BecomeDriver() {

      const [driverData, setDriverData] = useState({
        vehicleType: "",
        vehicleModel: "",
        vehicleCapacity: "",
        vehicleNumber: ""
      })

      const handleBecomeDriver = async (e) => {
        e.preventDefault(); // Assuming this is inside a form submit handler
      
        const authToken = localStorage.getItem('authToken'); // Retrieve the token from local storage
      
        try {
          const response = await fetch("http://localhost:3000/user/become-driver", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${authToken}`, // Include the token with "Bearer " prefix
            },
            body: JSON.stringify({ vehicleDetails: driverData }),
          });
      
          const data = await response.json();
          if (!response.ok) {
            console.log("Server response:", data);
            alert("application failed " + (data.message || "Unknown error"));
            return;
          }
      
          alert("Applied successfully!");


        } catch (e) {
          console.error("Something went wrong:", e);
          alert("Something went wrong, please try again");
        }
      };


  return (
    <>
      <Navbar />
      {/* Full page container */}
      <div className="!min-h-screen !flex !items-center !justify-center !bg-[#F8F9Fa] !px-4">
        <div className="!w-[900px] !h-[550px] !flex !bg-white !shadow-lg !rounded-lg !overflow-hidden">
          <div
            className="!w-1/2 !bg-cover !bg-center !hidden md:!block !m-3 !rounded-lg !shadow-xl"
            style={{ backgroundImage: "url('/public/pexels-adrien-gambet-537682496-31627608.jpg')" }}
          ></div>

          <div className="!w-1/2 !bg-white !text-center !text-[#333333] !flex !flex-col !justify-center !px-8">
            <h2 className="!font-semibold !text-3xl !mb-6">Become a Driver</h2>

            <form className="!flex !flex-col !space-y-4">
              <input
                type="text"
                placeholder="Vehicle Type"
                value={driverData.vehicleType}
                onChange={(e) => {
                    setDriverData({...driverData, vehicleType: e.target.value})
                }}

                className="!border !border-gray-300 !p-3 !rounded-md !bg-gray-100 !shadow-sm focus:!border-[#00A693] !outline-none !transition"
              />

              <input
                type="text"
                placeholder="Vehicle Model"
                value={driverData.vehicleModel}
                onChange={(e) => {
                    setDriverData({...driverData, vehicleModel: e.target.value})
                }}

                className="!border !border-gray-300 !p-3 !rounded-md !bg-gray-100 !shadow-sm focus:!border-[#00A693] !outline-none !transition"
              />

              <input
                type="number"
                placeholder="Vehicle Capacity"
                value={driverData.vehicleCapacity}
                onChange={(e) => {
                    setDriverData({...driverData, vehicleCapacity: e.target.value})
                }}

                className="!border !border-gray-300 !p-3 !rounded-md !bg-gray-100 !shadow-sm focus:!border-[#00A693] !outline-none !transition"
              />

              <input
                type="text"
                placeholder="Vehicle Number"
                value={driverData.vehicleNumber}
                onChange={(e) => {
                    setDriverData({...driverData, vehicleNumber: e.target.value})
                }}

                className="!border !border-gray-300 !p-3 !rounded-md !bg-gray-100 !shadow-sm focus:!border-[#00A693] !outline-none !transition"
              />
            </form>

            <button
            onClick={handleBecomeDriver}
              className="!w-full !mt-5 !bg-[#00A693] !text-white !items-center !justify-center !font-semibold !py-3 !rounded-md !shadow-md hover:!bg-[#008977] !transition !duration-300"
            >
              Submit Driver Application
            </button>
            <p className="!mt-5">Already a driver?</p>

            <NavLink to={"/driver/login"} className="!text-[#00A693] hover:!underline">Driver Login</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default BecomeDriver;
