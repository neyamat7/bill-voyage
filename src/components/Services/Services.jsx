import React from "react";
import Heading from "../Heading/Heading";
import { CheckIcon } from "lucide-react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";

const appFeatures = [
  "Quick utility bill payments",
  "Fund transfers between accounts",
  "Mobile recharge and data packages",
  "QR code payments at merchants",
  "Split bills with friends",
  "Transaction history and analytics",
];

const Services = () => {
  return (
    <div className="bg-gray-400 max-w-screen-xl mx-auto text-white mt-20 rounded-md border pb-12 px-5">
      <Heading
        title="Manage Your Bill From Anywhere"
        desc="Download our mobile app to manage your finances anytime, anywhere"
        text="text-white"
      ></Heading>

      <div>
        <ul className="space-y-3 mb-8 w-fit   mx-auto">
          {appFeatures.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="bg-blue-500 p-1 rounded-full mr-3">
                <CheckIcon />
              </div>
              <span className="text-xl font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-4 w-fit mx-auto">
        <button className="bg-black text-white px-6 py-3 rounded-md flex items-center">
          <FaAppStore className="mr-2" />
          App Store
        </button>
        <button className="bg-black text-white px-6 py-3 rounded-md flex items-center">
          <IoLogoGooglePlaystore className="mr-2" />
          Google Play
        </button>
      </div>
    </div>
  );
};

export default Services;
