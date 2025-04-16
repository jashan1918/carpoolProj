import React from "react";
import { MapPin, Fuel, Clock } from "lucide-react"; // Using lucide-react icons

const Cardicons = () => {
  return (
    <div className="space-y-4 text-sm text-gray-800 mt-2">
      {/* Extra km fare */}
      <div className="flex items-start space-x-3">
        <MapPin className="text-blue-500" size={20} />
        <div>
          <p className="font-semibold">
            Extra km fare{" "}
            <span className="font-normal text-black">
              ₹16.0/km after <strong>149 kms</strong>
            </span>
          </p>
        </div>
      </div>

      {/* Fuel Type */}
      <div className="flex items-start space-x-3">
        <Fuel className="text-blue-500" size={20} />
        <div>
          <p className="font-semibold">
            Fuel Type{" "}
            <span className="font-normal text-black">
              CNG <span className="text-gray-600">with refill breaks</span>
            </span>
          </p>
        </div>
      </div>

      {/* Cancellation */}
      <div className="flex items-start space-x-3">
        <Clock className="text-blue-500" size={20} />
        <div>
          <p className="font-semibold">
            Cancellation{" "}
            <span className="font-normal text-black">
              <span className="text-green-600 font-medium">Free</span> till 1
              hour of departure
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cardicons;
