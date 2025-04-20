import React, { useState } from "react";

export default function CreateRideForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [seats, setSeats] = useState(1);
  const [price, setPrice] = useState("");
  const [departureTime, setDepartureTime] = useState("2025-04-17T07:00");
  const [arrivalTime, setArrivalTime] = useState("2025-04-17T07:00");

  const handlePublish =  async () => {
    // Implement your publish logic here

    const rideData = {
      pickup: from,
      destination: to,
      totalSeats: seats,
      pricePerSeat: price,
      date: departureTime, // assuming you're using this as the ride's scheduled time
    };

      
      const authToken = localStorage.getItem('authToken');

      try{
          const res = await fetch("http://localhost:3000/user/create-ride", {

            method: "POST",
            headers: {
              "Content-Type" : "application/json",
              Authorization : `Bearer ${authToken}`
            },
            body: JSON.stringify(rideData)
          })

          const data = await res.json();

          if(!res.ok){
            throw new Error(data.message || "Something went wrong");
          }

          console.log("Ride created:", data);
          alert("Ride published successfully!");

      }catch(error) {
        console.log("ride not published", error);
      }

    console.log({ from, to, seats, price, departureTime, arrivalTime });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl  shadow-md space-y-4 border">
      <h2 className="text-2xl font-bold">Create a Ride</h2>
      <p className="text-gray-500">Publish your ride with just one click.</p>

      <div>
        <label className="block text-sm font-medium text-gray-700">From</label>
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">To</label>
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To"
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      <div className="flex items-center justify-between space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Available seats</label>
          <div className="flex items-center mt-1">
            <button
              className="px-3 py-1 border rounded-l shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => setSeats(seats > 1 ? seats - 1 : 1)}
            >
              −
            </button>
            <span className="px-4 border-t border-b">{seats}</span>
            <button
              className="px-3 py-1 border rounded-r shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => setSeats(seats + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => {
              const val = e.target.value;
              setPrice(val === "" ? "" : parseFloat(val));
            }}
            
            className="mt-1 w-full border rounded px-3 py-2"
            min="0"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Departure Time</label>
        <input
          type="datetime-local"
          value={departureTime}
          onChange={(e) => setDepartureTime(e.target.value)}
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Arrival Time</label>
        <input
          type="datetime-local"
          value={arrivalTime}
          onChange={(e) => setArrivalTime(e.target.value)}
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      <button onClick={handlePublish}
      data-ripple-light="true" type="button" className="select-none ml-25 rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-md text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Publish
        </button>
    </div>

  );
}
