import React from 'react'
import "./Fest.css";
const Fest = () => {
  return (
    <div>
        <h1 className='text-5xl font-bold mt-40 ml-20'>Upcoming Events</h1>
    <div className='flex gap-6 '> 
        {/* card1 */}
       <div className="left-10 top-20 relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
      <div className="relative mx-4 -mt-6 h-36 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg object-contain"> <img src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-mehfil-e-sartaaj-shimla-0-2025-1-21-t-6-42-54.jpg" alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        Music Show
        </h5>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        Sartaaj is on the road most of the time kicking off his creative projects.Currently he is promoting his signing on the Rukus Avenue music label. Don't miss the oppurtunity to catch up with him on tour.
        </p>
      </div>
      <div className="p-6 pt-0">
        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Book Ride
        </button>
      </div>
    </div>
    {/* card2 */}
    <div className="left-10 top-20 relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
      <div className="relative mx-4 -mt-6 h-36 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg object-fill"> <img src="https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-rambo-circus-group-page-0-2025-2-5-t-14-37-3.jpg" alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
         Rambo Circus
        </h5>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        A total family entertainer which always takes lead in entertainment and creating a new acts.For the first time in mall with 90 minutes of mesmerizing circus acts which includes roller skating, ladder balance.
        </p>
      </div>
      <div className="p-6 pt-0">
        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Book Ride
        </button>
      </div>
    </div>
    {/* card3 */}
    <div className="left-10 top-20 relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
      <div className="relative mx-4 -mt-6 h-36 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg object-fill"> <img src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-rajasthan-royals-vs-punjab-kings-0-2025-4-5-t-15-9-15.jpg" alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        Rajasthan ROYALS VS punjab KINGS 
        </h5>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        Rajasthan ROYALS face off against punjab KINGS, and it's more than just a match - it's a battle we take on together.Every wicket we roar. Every moment we live with you.
               </p>
      </div>
      <div className="p-6 pt-0">
        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Book Ride
        </button>
      </div>
    </div>
    {/* card4 */}
    <div className="left-10 top-20 relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
      <div className="relative mx-4 -mt-6 h-36 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg object-fill"> <img src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-gobindgarh-fort-0-2024-5-31-t-12-31-0.jpg" alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        Gobindgarh Fort
        </h5>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        Gobindgarh Fort - the very symbol of Punjab.A character of times when punjab was forged. Spread across a grand 43 acres, right in the heart of Amritsar city.Now finally, it open it's gates to the people of Punjab.
        </p>
      </div>
      <div className="p-6 pt-0">
        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Book Ride
        </button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Fest
