// import React from 'react'
// import Cardicons from '../cardicons'

// const Ridecards = () => {
//   return (
//     <div>
// <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row h-64 mt-10 w-4xl">
//     <img classNameName="object-cover  w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ml-5" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIRERUQExAPFhUSExAWExERFxEWGBAWFhUWFhUSFhcZHSgiGhsmGxUVITEhJSkrLjEwFx8zODMsNygtLisBCgoKDg0NFQ8PGisdIB0rLSsrLi0tLTAwKzctKystKy0tNystLzE4NS81Ky0tMDcrNzcsLS8tLS4xNystLS0uK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECBQYHAwj/xABGEAACAgEBBAYFBwkGBwEAAAAAAQIDBBEFBhIhBxMxQVFxFCJhgZEyRFJUkqGxQmJygpOywdHSIzNDU2PCFhdFg6Lh8BX/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQMCBP/EACIRAQACAgIABwEAAAAAAAAAAAABEQIDEiEjMUFRcZHwE//aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKNlrsj9JfFAXg8+uj9KPxRVXR+lH4oC8FqmvFFwAAAAAAAAAAAAAAAAAAAAAAAAAFNSNl50K03KSSitW20lFLvbfJASdSNlbQrri5SnFKK1bbSUfOT5I0LeXffI6p2YeHkXw0k/SermqUl+VHvmvb2e05BnbRzNpWKMpXXyb9SmtNxX6NceXvfxC07JtnpWwqdVXN3P/RWsftvl8NTTdo9L+TPlVRXBeM3KT+C0R5bB6Is27SWROvHi/wAl6WWe9RfDH4s3jZnRFs+vnZ11z/Plwr7MdCHTl+T0j7Rl/jwj+jXD/dqQJ757Qn8+v/VcI/uo+hMPc/Z9XyMLGXnBS/e1NQ6Y8qnGw441ddUZ5M9NIRimq4aSm+S8eFfrAtya7eXNfz3L/aT/AIMsjvTmx+fZXvtk/wATrXQbgL0S+5pPrL+FarurhFfvSl8DoduzaZfKppl+lCD/ABQLfN2Pv1tGHZmTl+nGuX+0zWD0q50PlxomvYpQfxTf4HY8zczZ9vy8LH596io/u6HOOlDcPDwsN5WPGyM1ZXHh4nKLUm9eTB0k7N6Yq3orqLoeLg4zXwejNw2Rv9hZDUYZNPE+yub6ub8oz0192pzuXQ/dOmu6nKrbnXXN13RcdHKKbXFHXvfgattHcLaVUuCWHOfFyUqXCyEven6v6yQKh9I15kX36eZ7pnINwd0to0SjO7JsqqXP0WM1ZxeyWusYL9Hn5HSYNrsbKjLggQzWvlL3kmvJi+/TzA9gUTKgAAAALZSS5tgXAwm094I1vq64SttfZCPZH2yfcjyx5Xy9a6xa/wCXVyjHzfbJ/cZf1icuOPdeftH77a/ymMeWXV+XvP76Z/Uo5mpbS3swseXDdm48JfQc05fZWrPHC3y2fdJQhnYzk+yLlwt+Slpqasm3Sv8AZ8ZRX8S30l+EftRMen3+Pf4lQJF2RJ8lwrya1NP2/unLMtjK/LsdMZqXokYRUJpPXhm9dZf/AHI2cqUUWnDwtcktEuxJaaaaIjbB2bRhVqvHx64LTm1zlL9KXaySAJXpsvCP3lPTZeEfvIxScU00+x9oEmWbL81Gu7e3Xxs25XZEZTkoqK9aajGK1eiinp2vUyL2fV31xfnq/wAST/ICPsfBhiVKihcFcXJqK585Pik9X7WTHdL6TLCgF/G/pS+LLbFFr1tWlz56Ncu/mUKgeD2ljpa8WvlxP4KKJUbo6JqC56Na69/mWalk5qK4pNJLtcmkl72BMWX+bEemvwRgXvHhcXD6Zi6+HW1/zMlVbGS4oyjJeMWmvigJcsyWnZH3mqbT2/fTLhnRUvCS4uGa8UbEWX0RnHhnFST7meffr2Z4+Hlxlvo2YYZeJjyhfurtT0ilycVGUZOMkux96fwf3GZMVu/gV0xkq1opS1a1b9i7TKnWmM41xGybn1c7pwnZM64qPQABqyDG5bfE9fcZIwe3VkcSdLp7OcbE/W8mmc5ZcYur+HWGPKauvkqojHXhjFavV6Jc34s430g77W5N0sPFlONMJcEp1aqeTPXRxTXNQT5aLm2dI332nLF2bkX6pWRp4Ytd1ljjXFrylPX3HItwdMbrc/quteL1FdNbTadtzlrZLRNrhrrsevjJFiojrom5m57Stk7gJxsd+TGudNMrp42PGNtyivpNyUYyfhzfjoeFO6dGRRZfTk2QjU4xks2FSUnJapKVcnp2rtXebFDa9Vl7zqKJ02qM/S8SWsoXVS/vbK56L1kubi0uzVd+uMlRCNTxuvUcaN0rL8iPNSk0lVRD6UlBJ+GsvYVLQt395svZF3U2qcqfVc6G+JKD/wASh8+7mkuT005HccLKhdXC6uSlCyMZQkuyUWtUzi+3LqcvEkqcd1xwYRdNjblKyDnpbGb7O9SSXembJ0J7Vcqb8OT/ALiasrXhC3nKPlx6v9Zgl0oqUL4wb7iosB6qh+z4ouWP+dH4geBUkKiP+Yiqpr+n+AEUf+iZwVeLKR6rV+7xAiFSb1lXgvgWu2v6P3AQyp7ysh9B/HQ8JtPsTXv1AxO8u3K8LHnkWLXh5QrTSds38mCfdz7+5as47fLM2s5ZGRfXTjxlpx2OSpg+6uutc7Zff4tGW6WNoSyM6rAg+UHVHT/VvkorXyTj8SdtPa+JKD2Zbh2Qox5Sroy6lJ2VuPqu1wcfWUmm3o+aZFYjL3IxKsqGBLIzpXWdVwzhTjKr+0+S+GVnFp48zwztkZux7J2Y+VCyFMlG2VOulbfNRvpbfCny5817UbBK6Ubse6zhnk4cerqripcWdrFvFsin2R0k+Jvs4PaQ8DamPhympQ9My8jihkPV9XTGcv7SuKWrsn493LTVacxbfNyt6YbRo6xRUbK2o3V6/Jk+yUfGMubT813Gwc/Z+Jxzct+gbalipvgslOnn3xa6ypv2rl8WdkBKRgz0eniZEx+Hom5NpJctXy5syAQAAAwu1tp112xqssjByWsOP1VPxUZPk2vAzRB2xsijLqdORVCyD/Jl3PulFrnF+1NMDR+leqU9j5LiteFUT5c/VhfXKT+Cb9xz/o12hfwZWLjWKF9sabaW1B9Z1UmravXTSbhNSXf6jOgZ/RJRJONOZmVQa0dbm7I6eGja5eepqm8HRllYEY5eJdO2dUuJqEeGcNOycUm+L2r294VLzqJ9fDGysu/Iumn1ldU+qror0blxOK1k2u7kYbDhGPUyd91HpMbHG56WVSlGxwjXZBrlwxUPW9pZsrezFdll91U6siyucJ2VpyrcnydnB2wk9Oa7C+O3dnV4KxLHdk8Frsr6uMqeHXnpxS7PytdO6QGS3pys7Gwb6cuWO4XdXXQ641p2tvilJOOnKMFq9V3owPQ9k9XtKzilGMbMeS1k0k3Fp6avv5sl7B3ay9t2KyS6jFqjwU6KThXBdldSk9ZvXm5t8338tFtVfQpT+Vm3PyhBfxINwntbHXbkY687IfzPKW8GIu3Kxv2kTXa+hfDXysjJfl1a/wBrJMOhzZy7Z5b/AF4L8IFGVe82EvnmN9tFj3swV89xftkSHRHsxdsL352y/hoe8OinZS+bWPzuyP4TQOlXvhgfXcb7Ra99Nn/Xcf4skw6M9kr5lH32ZD/GZ7w6Pdlr5jR7+N/iwMa999nfXaPvLHvzs767T/5GajuLsxf9PxPfXB/ie0NztnLs2fg/sKf6QdNde/uzfrlfwkWvpA2b9ch9mX8jaVuvg/UcL9jT/SX/APDeF9SxP2NX8gNS/wCYOzfra+zP+RLw98dn2tRhmUavsUnw/ibD/wAN4X1LE/Y1f0njbuhs6XKWz8F/9mn+kI+ed4dpJ7WuyovijDMrnCS7JqmUNNPZ/ZnUNqwzJK7Lu2m6sFvjqlVGrrLoT5wrhpFc+fDzfcZvb3Rjs++qcaceui3R9XZXxJRl3awT0ce7TTyOWWZVuCv/AMzaePZOiMnKpwlwzpfZx0T7JwffF+Pd2EVm78GE5VTjXmcUsLIyuB5EpWz6uShTpPT1ZKMpT0S05aczJbIedKCyMDNqvg3FWrIqpVtHZr1nLVpLV6qXcR5b3bP9Opzo5M4wpp6r0Z0WNuHBKLjquXen7jWsza0ci2zG2Vi3QeU5K2bbdlkG9XVBLlVVrzb7e7VLk6I89q9btn0xKc4RyVOUqoSk+CPq8SitXo9PvOry3lst5YuBmXN9krIPHrXtlKxa6eSZO6O9z47Nx3GXDK63hldNez5NcfzY6v3tm2AlqWwd17Xa8zOt6y1tOvHg5dRiruUIv5Uvzn36s20AIAAAAAAAAwO19zcDKlx3YlMpvtsinCcvOUGm/eRMLo82ZVLijhVSaeq61zsS90219xtIAthBJJJJJcklyS9iLgAAAAAAAAAAAAAAAAABE2ls2nIh1d9NVsH+TZGMlr4rXsftJYA1F9GmynLi9DXkrLkvhxGf2TsXGxY8OPj01J9vVxjFy9smucn5k8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=" alt=""/>
//     <div className='flex'>
//     <div className="flex flex-col justify-between p-4 leading-normal">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-black flex">Dzire,Etios
//             <div className='bg-teal-500 rounded font-semibold text-sm ml-2 r w-min text-white p-2'>4.2/5</div>
//         </h5>
//         <p>Sedan  <b>. </b>AC <b>. </b> 4 Seats <b>. </b>149 km included</p>
//         <p className='font-bold text-lg'>Compact car</p>
//         <Cardicons/>
//     </div>
//     <div className="flex flex-col items-end ml-35 mt-4 gap-1">
//   <div className="flex items-center gap-1 text-sm">
//     <span className="bg-teal-500 text-white font-bold px-2 py-1 text-xs rounded">%</span>
//     <span className="text-teal-600 font-semibold">MEGA-SALE</span>
//     <span className="text-teal-600">₹115 off</span>
//   </div>

//   <div className="text-red-500 text-sm font-semibold">18% off</div>

//   <div className="flex items-center gap-2">
//     <span className="line-through text-gray-500 text-sm">₹2,771</span>
//     <span className="text-2xl font-bold text-black">₹1,814</span>
//   </div>

//   <div className="text-xs text-gray-500">+ ₹497 (Taxes & Charges)</div>
//   <button data-ripple-light="true" type="button" className="mt-3 select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
//           Book Ride
//         </button>

// </div>
//     </div>
// </a>

//     </div>
//   )
// }

// export default Ridecards
