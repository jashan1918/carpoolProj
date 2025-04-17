import React, { useState } from 'react';
import "./Ride.css";
import Navbar from "../../Components/Navbar/Navbar";
import FilterSidebar from '../../Components/Filter';
import Footer from '../../Components/Footer/Footer';
import Cardicons from '../../Components/Cardicons.jsx';

const Ride = () => {
 
  return (
    <div>
      <Navbar />
      <div className="mt-16 nav2 w-full bg-gray-100 h-20 flex flex-wrap justify-center items-center  gap-4">
           
            <div className="inbox h-15 w-36 bg-white text-white flex items-center justify-center rounded-2xl ml-25">
              <input type="text" placeholder='From' className='rounded-2xl text-black h-15 w-36 text-center ' />
        </div>
        {/*  */}
        <div className="inbox h-15 w-36 bg-white text-white flex items-center justify-center rounded-2xl">
              <input type="text" placeholder='To' className=' text-black h-15 w-36 rounded-2xl text-center' />
        </div>
        {/*  */}
        <div className="inbox h-15 w-36 bg-white text-white flex items-center justify-center rounded-2xl">
              <input type="Number" placeholder='Passengers' className='text-black h-15 rounded-2xl w-36 text-center' />
        </div>
        {/*  */}
        <div className="inbox h-15 w-36 bg-white text-white flex items-center justify-center rounded-2xl">
              <input type="date" className='text-black h-15 rounded-2xl w-36 text-center' placeholder='pick a date'/>
        </div>
        <div className='text-white search bg-blue-400 border-1 px-4 py-2 rounded-3xl' >
          Search
        </div>
      </div>
      {/* cards */}
      <div className='container-fluid h-screen flex justify-items-center w-full '>
      <div className='leftside h-screen w-1/4 fixed'>
      <FilterSidebar />
      </div>
      <div className='rightside h-screen w-3/4 ml-100 '>

      {/* card 1 */}
          
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row h-64 mt-5 w-4xl">
    <img classNameName="object-cover  w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ml-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnlrZwbqLfeeV2AyRHvK5SEcV6o3q35JtECQ&s" alt=""/>
    <div className='flex mr-5'>
    <div className="flex flex-col justify-between  p-1 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black flex">Dzire,Etios
            <div className='bg-teal-500 rounded font-semibold text-sm ml-2 r w-min text-white p-2'>4.2/5</div>
        </h5>
        <p>Sedan  <b>. </b>AC <b>. </b> 4 Seats <b>. </b>149 km included</p>
        <p className='font-bold text-lg'>Spacious car</p>
        <Cardicons/>
    </div>
    <div className="flex flex-col items-end ml-35 mt-4 gap-1">
    <div className="flex gap-3 items-start">
  {/* Icon */}
  <div className="bg-teal-500 text-white font-bold px-2 py-1 text-xs rounded">
    %
  </div>

  {/* Text next to the icon */}
  <div className="flex flex-col leading-tight">
    <span className="text-teal-600 font-semibold text-sm">MEGA-SALE</span>
    <div className="flex items-baseline space-x-1">
      <span className="text-teal-600 text-sm">₹115</span>
      <span className="text-teal-600 text-xs">off</span>
    </div>
  </div>
</div>
  <div className="text-red-500 text-sm mr-6 font-semibold">18% off</div>

  <div className="flex items-center gap-2">
    <span className="line-through text-gray-500 text-sm">₹2,771</span>
    <span className="text-2xl font-bold text-black">₹1,814</span>
  </div>

  <div className="text-xs text-gray-500">+ ₹497 (Taxes & Charges)</div>
  <button data-ripple-light="true" type="button" className="mt-3 select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Book Ride
        </button>

</div>
    </div>
</a>
{/* card2 */}
       
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row h-64 mt-5 w-4xl">
    <img classNameName="object-cover  w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ml-5" src="data:image/jpeg;base64,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" alt=""/>
    <div className='flex  mr-7'>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black flex">Indica, Swift
            <div className='bg-teal-500 rounded font-semibold text-sm ml-2 r w-min text-white p-2'>4.1/5</div>
        </h5>
        <p>Sedan  <b>. </b>AC <b>. </b> 4 Seats <b>. </b>59 km included</p>
        <p className='font-bold text-lg'>Compact car</p>
        <Cardicons/>
    </div>
    <div className="flex flex-col items-end ml-35 mt-4  gap-1">
    <div className="flex gap-3 items-start ">
  {/* Icon */}
  <div className="bg-teal-500 text-white font-bold px-2 py-1 text-xs rounded">
    %
  </div>

  {/* Text next to the icon */}
  <div className="flex flex-col leading-tight">
    <span className="text-teal-600 font-semibold text-sm">MEGA-SALE</span>
    <div className="flex items-baseline space-x-1">
      <span className="text-teal-600 text-sm">₹115</span>
      <span className="text-teal-600 text-xs">off</span>
    </div>
  </div>
</div>

  <div className="text-red-500 mr-8 text-sm font-semibold">18% off</div>

  <div className="flex items-center gap-2">
    <span className="line-through text-gray-500 text-sm">₹3,049</span>
    <span className="text-2xl font-bold text-black">₹1,919</span>
  </div>

  <div className="text-xs text-gray-500">+ ₹497 (Taxes & Charges)</div>
  <button data-ripple-light="true" type="button" className="mt-3 select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Book Ride
        </button>

</div>
    </div>
</a>
{/* card 3 */}
       
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row h-64 mt-5 w-4xl">
    <img classNameName="object-cover  w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ml-5" src="data:image/jpeg;base64,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" alt=""/>
    <div className='flex mr-6'>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black flex">Citroen EC3
            <div className='bg-teal-500 rounded font-semibold text-sm ml-2 r w-min text-white p-2'>4.4/5</div>
        </h5>
        <p>Hatchback <b>. </b>AC <b>. </b> 4 Seats <b>. </b></p>
        <p className='font-bold text-lg'>Compact car</p>
        <Cardicons/>
    </div>
    <div className="flex flex-col items-end ml-35 mt-4 gap-1">
    <div className="flex gap-3 items-start ">
  {/* Icon */}
  <div className="bg-teal-500 text-white font-bold px-2 py-1 text-xs rounded">
    %
  </div>

  {/* Text next to the icon */}
  <div className="flex flex-col leading-tight">
    <span className="text-teal-600 font-semibold text-sm">MEGA-SALE</span>
    <div className="flex items-baseline space-x-1">
      <span className="text-teal-600 text-sm">₹115</span>
      <span className="text-teal-600 text-xs">off</span>
    </div>
  </div>
</div>    

  <div className="text-red-500 text-sm font-semibold">18% off</div>

  <div className="flex items-center gap-2">
    <span className="line-through text-gray-500 text-sm">₹3800</span>
    <span className="text-2xl font-bold text-black">₹3132</span>
  </div>

  <div className="text-xs text-gray-500">+ ₹380 (Taxes & Charges)</div>
  <button data-ripple-light="true" type="button" className="mt-3 select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Book Ride
        </button>

</div>
    </div>
</a>
{/* card 4 */}
       
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row h-64 mt-5 w-4xl">
    <img classNameName="object-cover  w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ml-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmS1deXwy2syNwNBvgpXy5YWq3fgGSo6iCiA&s" alt=""/>
    <div className='flex'>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black flex">Tata Tigor
            <div className='bg-teal-500 rounded font-semibold text-sm ml-2 r w-min text-white p-2'>4.2/5</div>
        </h5>
        <p>Sedan  <b>. </b>AC <b>. </b> 4 Seats <b>. </b>149 km included</p>
        <p className='font-bold text-lg'>Compact car</p>
        <Cardicons/>
    </div>
    <div className="flex flex-col items-end ml-35 mt-4 gap-1">
 



  <div className="flex items-center gap-2">

    <span className="text-2xl font-bold text-black">₹3134</span>
  </div>

  <div className="text-xs text-gray-500">+ ₹597 (Taxes & Charges)</div>
  <button data-ripple-light="true" type="button" className="mt-3 select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Book Ride
        </button>

</div>
    </div>
</a> 
{/* card 5 */}
       
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row h-64 mt-5 w-4xl">
    <img classNameName="object-cover  w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ml-5" src="data:image/jpeg;base64,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oGbnNAIkYOJ7JxW5sC5q2tlGjirrdq1I0lcPNBCY60YA1zcVtLG1+V8r5W1CtNlNy46kknzW/qdhiRxfm0k3NgLXOptw8l6g3WB1c4+QCDO6L9jGr2lDcXjhcJ5TwAjILG+Lnhotyxcl9MioXIt061lJF1UMIYCbuIJc550u5xzP0HBS6l24TwKCY9cq9YtBDtC6y46lBtMapiWG2Vew9BkXS6tAr00oLzSrrSrLVdag9oqIgqiIgJZEQULV5LF7RBZMStugWUqWQYLqZWnUq2WFUwINU6jVt1Ctz1ap1aDQuoO5Wn7N7lIjEqdSgi79ldysP2MOSlxgVPRwghEu74PBa+r3QY8FrmAgixFtQujejBPRQg4bW9ETCbxyyM7jZ4HcLi/xJWGOiV7T+0LvHL6D8V330UKnog5IOIx7izMGFrRYcl6/sdP7q7Z6IOSp6IOSDio3Pm5K43c6TiF2b0MclT0MckHIo9zXcVkxbnc11P0Mck9EHJBziLdIDgs2Hdlo4KdeiBPRggiUOwmjgsyLZgHBSH0dOoQaeOjsshkC2IhVREgw2xq61iyRGvYjQWGsV1rFdDF6AQeWtXsBVRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREFLJZVRB5sqYV7VEHjCll6VUHkNXqyqiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICoqqhQEVFVBVERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREFFQoiCl1UFEQVVURAREQEREBERB//9k=" alt=""/>
    <div className='flex mr-5 mt-10'>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black flex">Xylo, Ertiga
            <div className='bg-teal-500 rounded font-semibold text-sm ml-2 r w-min text-white p-2'>4.1/5</div>
        </h5>
        <p>SUV <b>. </b>AC <b>. </b> 6 Seats <b>. </b></p>
        <p className='font-bold text-lg'>Large car</p>
        <Cardicons/>
    </div>
    <div className="flex flex-col items-end ml-35 mt-4 gap-1">
  <div className="flex items-center gap-2">
    <span className="text-2xl font-bold text-black">₹1,800</span>
  </div>

  <div className="text-xs text-gray-500">+ ₹497 (Taxes & Charges)</div>
  <button data-ripple-light="true" type="button" className="mt-3 select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Book Ride
        </button>
</div>
    </div>
</a>
      </div>
        </div>
    </div>

    
  );
};

export default Ride;
