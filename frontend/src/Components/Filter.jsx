import React from "react";

const filters = {
  "Cab Type": [
    { label: "HATCHBACK", count: 3 },
    { label: "SEDAN", count: 3 },
    { label: "SUV", count: 7 },
  ],
  "Fuel Type": [
    { label: "CNG", count: 2 },
    { label: "PETROL", count: 3 },
    { label: "DIESEL", count: 3 },
    { label: "ELECTRIC", count: 3 },
  ],
  "Cab Model": [
    { label: "Maruti Suzuki Swift", count: 1 },
    { label: "Citroen EC3", count: 1 },
    { label: "Tata Tigor", count: 1 },
    { label: "Maruti Suzuki Ertiga", count: 1 },
    { label: "MG ZS", count: 1 },
    { label: "Toyota Innova", count: 1 },
    { label: "Innova Crysta", count: 3 },
  ],
};

const FilterSidebar = () => {
  return (
    <div className="w-80 p-4 bg-white shadow rounded ml-4">
      <h2 className="text-xl font-bold mb-4">Select Filters</h2>
      {Object.entries(filters).map(([category, options]) => (
        <div key={category} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{category}</h3>
          <ul className="space-y-2">
            {options.map((option) => (
              <li key={option.label} className="flex items-center">
                <input
                  type="checkbox"
                  id={option.label}
                  name={option.label}
                  className="mr-2"
                />
                <label htmlFor={option.label} className="flex-1">
                  {option.label}
                </label>
                <span className="text-sm text-gray-600">({option.count})</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
