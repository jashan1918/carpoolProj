import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { NavLink } from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
      e.preventDefault();

      try{
      const response = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        console.log("Server response:", data);
        alert("Signup failed: " + (data.message || "Unknown error"));
        return;
      }
  
      alert("Signup successful!");
    } catch (err) {
      console.error("Error caught:", err);
      alert("Something went wrong, please try again");
    }
      

  }
  
  

  return (

    <>
<Navbar />
     {/* Full page container */}
    <div className="!min-h-screen !flex !items-center !justify-center !bg-[#F8F9Fa] !px-4">
      <div className="!w-[900px] !h-[550px] !flex !bg-white !shadow-lg !rounded-lg !overflow-hidden">
        <div
          className="!w-1/2 !bg-cover !bg-center !hidden md:!block !m-3 !rounded-lg !shadow-xl"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610831176233-ff0dbf203815?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9sZCUyMGNhcnN8ZW58MHx8MHx8fDA%3D')" }}
        ></div>

        <div className="!w-1/2 !bg-white !text-center !text-[#333333] !flex !flex-col !justify-center !px-8">
          <h2 className="!font-semibold !text-3xl !mb-6">Create an account</h2>

          <form className="!flex !flex-col !space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => {
                setFormData({ ...formData, username: e.target.value })
              }}

              className="!border !border-gray-300 !p-3 !rounded-md !bg-gray-100 !shadow-sm focus:!border-[#00A693] !outline-none !transition"
            />

            <input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
              }}

              className="!border !border-gray-300 !p-3 !rounded-md !bg-gray-100 !shadow-sm focus:!border-[#00A693] !outline-none !transition"
            />

            <div className="!relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({...formData, password: e.target.value})
                }}

                className="!border !border-gray-300 !p-3 !rounded-md !bg-gray-100 !shadow-sm focus:!border-[#00A693] !outline-none !w-full !transition"
              />
              <button
                type="button"

                className="!absolute !inset-y-0 !right-3 !flex !items-center !mt-1 !text-gray-500 hover:!text-[#00A693] !p-0 !bg-transparent !border-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </form>

          <button 
          onClick={handleSignup}
          className="!w-full !mt-5 !bg-[#00A693] !text-white !items-center !justify-center !font-semibold !py-3 !rounded-md !shadow-md hover:!bg-[#008977] !transition !duration-300">
            Sign Up
          </button>
          <p className="!mt-5">Already have an account?</p>

          <NavLink to={"/login"} className="!text-[#00A693] hover:!underline" >Login</NavLink>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup;