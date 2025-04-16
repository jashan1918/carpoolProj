import React from 'react'
import "./About.css";
const About = () => {
  return (
    <div>
      <div className='heading h-max w-full'>
        <h1 className='text-5xl font-bold mt-20 ml-20'>Why Trust Us?</h1>
        <div className='about w-full h-max-content mt-14'>
        <h2 className='ml-72 text-3xl font-bold'>Safe and Verified Rides</h2>
            <div className=' flex w-full gap-10 '>
            <div className=' h-56 w-4xl object-fill -mt-10  ml-10 '><img src="https://cdn-icons-png.flaticon.com/512/4926/4926149.png" alt="" /> </div>
            
            <p className='mr-15 mt-4 text-lg'> 
            At our carpool, your safety is our top priority. Every user goes through a strict verification process, ensuring that both drivers and riders are genuine and trustworthy. Drivers must provide valid identification, licenses, and vehicle details, while user ratings and reviews help maintain a reliable community. Our real-time tracking feature allows you to share your ride details with friends or family for added security, and an SOS button is available for immediate assistance in case of emergencies. With these safety measures and 24/7 customer support, you can enjoy a secure and stress-free carpooling experience.</p>
            </div>
            {/* about 2 */}
            <h2 className='ml-20 mt-4 text-3xl font-bold'>Affordable & Cost-Effective</h2>
            <div className=' flex w-full'>
            <p className='ml-20 mt-4 mr-7 text-lg'> 
            Carpooling with us is a smart way to cut down on travel expenses while enjoying a comfortable ride. By sharing the cost of fuel, tolls, and parking with fellow riders, you can significantly reduce your transportation costs compared to driving alone or using taxis. Whether you're commuting daily, traveling intercity, or planning a long-distance trip, our platform provides budget-friendly options that fit your needs.
            Unlike traditional travel modes, carpooling eliminates surge pricing, hidden fees, and unpredictable costs, ensuring a transparent and economical ride every time.</p>
            <div className='h-60 w-4xl mr-15 object-fill -mt-10 '><img src="https://img.freepik.com/premium-vector/cash-back-icon-save-money-refund-cost-cashback-wallet-rebate_946691-1855.jpg" alt="" /> </div>
            </div>
            {/* about 3 */}
            <h2 className='ml-79 text-3xl font-bold'>Eco-Friendly Travel</h2>
            <div className=' flex w-full'>
            <div className=' h-56 w-6xl object-fill -mt-20  ml-10 '><img src="https://media.istockphoto.com/id/1359659563/vector/planet-earth-with-leaves-in-a-circle-green-globe-environmental-social-governance.jpg?s=612x612&w=0&k=20&c=AyyUx4eRlEBaig3Va-aFLFuOGHBxXBNJ7SHQqTWBkYg=" alt="" /> </div>
            
            <p className='mr-15 ml-2 mt-4 text-lg '> 
            Carpooling with us is a simple way to reduce your carbon footprint and help the environment. By sharing rides, fewer cars are on the road, leading to lower carbon emissions, reduced air pollution, and less traffic congestion. This not only helps fight climate change but also creates cleaner and healthier cities. Every shared ride means fewer fuel emissions and a more sustainable way to travel. Join us in making transportation greener—one ride at a time! Whether you’re commuting daily or taking a long trip, every shared ride plays a part in making transportation more sustainable.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
