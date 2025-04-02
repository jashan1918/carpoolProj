import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { NavLink } from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (

        <>   
        <Navbar />
             <div className="!min-h-screen !flex !items-center !justify-center !bg-[#F8F9Fa] !px-4">
            <div className="!w-[900px] !h-[550px] !flex !bg-white !shadow-lg !rounded-lg !overflow-hidden">
                <div
                    className="!w-1/2 !bg-cover !bg-center !hidden md:!block !m-3 !rounded-lg !shadow-xl"
                    style={{ backgroundImage: "url('/pexels-tima-miroshnichenko-6169866.jpg')" }}
                ></div>

                <div className="!w-1/2 !bg-white !text-center !text-[#333333] !flex !flex-col !justify-center !px-8">
                    <h2 className="!font-semibold !text-3xl !mb-6">Login account</h2>

                    <form className="!flex !flex-col !space-y-4">
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="!border !border-gray-300 !p-3 !rounded-md !bg-gray-100 !shadow-sm focus:!border-[#00A693] !outline-none !transition"
                        />

                        <div className="!relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
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

                    <button className="!w-full !mt-5 !text-xl !bg-[#00A693] !text-white !font-semibold !py-3 !rounded-md !shadow-md hover:!bg-[#008977] !transition !duration-300 !flex !justify-center !items-center">
                        Login
                    </button>
                    <p className="!mt-5">Doesn't have an account?</p>

                    <NavLink to={"/signup"} className="!text-[#00A693] !hover:underline">Create account</NavLink>
                </div>
            </div>
        </div>
        </>

    );
}

export default Login;
