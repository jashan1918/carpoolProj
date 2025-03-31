import React from 'react'
import "./Spots.css";
const Spots = () => {
  return (
    <div>
        <h1 className='text-5xl font-bold mt-10 ml-20'>Trending Spots</h1>
    <div className='flex gap-6 '> 
        {/* card1 */}
       <div className="left-10 top-20 relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg object-fill"> <img src="https://images.unsplash.com/photo-1650290843637-b2bb828d2481?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGxhZGFraCUyMHJvYWRzfGVufDB8fDB8fHww" alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        Leh-Ladakh, Jammu & Kashmir
        </h5>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        Known for its breathtaking landscapes, including rugged mountains and serene monasteries, Ladakh is perfect for adventure seekers and those looking to experience unique Tibetan culture. 
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
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg object-fill"> <img src="https://plus.unsplash.com/premium_photo-1697729439457-85d4b9d3a2cb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmlzaGlrZXNofGVufDB8fDB8fHww" alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Rishikesh, Uttarakhand
        </h5>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        Dubbed the 'Yoga Capital of the World,' Rishikesh offers spiritual retreats along the Ganges River and serves as a gateway to the Himalayas, attracting both pilgrims and adventure tourists.Rishikesh is also a hub for adventure sports.
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
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg object-fill"> <img src="https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFpcHVyfGVufDB8fDB8fHww" alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        Jaipur, Rajasthan
        </h5>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        Known as the 'Pink City,' Jaipur boasts historic forts, palaces, and vibrant markets, offering a glimpse into India's royal heritage and architectural grandeur.Jaipur is also famous for its vibrant festivals, including the Jaipur Literature Festival and Teej ​        </p>
      </div>
      <div className="p-6 pt-0">
        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Book Ride
        </button>
      </div>
    </div>
    {/* card4 */}
    <div className="left-10 top-20 relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg object-fill"> <img src="https://media.istockphoto.com/id/124688183/photo/taj-mahal-and-its-reflection-in-pool-hdr.webp?a=1&b=1&s=612x612&w=0&k=20&c=9e8_7WK6l7ZaQJsdCrOIFv5VNyvzRigos8Vq-nV-sV0=" alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        Agra, Uttar Pradesh
        </h5>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        Home to the iconic Taj Mahal, Agra offers rich Mughal history and architectural marvels, making it a must-visit for history enthusiasts.Agra is not just about the Taj Mahal; it also boasts other architectural marvels like Agra Fort and Fatehpur Sikri.
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

export default Spots
