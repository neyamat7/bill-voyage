import React from "react";
import Heading from "../Heading/Heading";

const organizations = [
  { id: 1, name: "DESCO", icon: "⚡", color: "bg-blue-100" },
  { id: 2, name: "NESCO", icon: "💡", color: "bg-yellow-100" },
  { id: 3, name: "WASA", icon: "💧", color: "bg-cyan-100" },
  { id: 4, name: "TITAS Gas", icon: "🔥", color: "bg-orange-100" },
  { id: 5, name: "PDB", icon: "⚡", color: "bg-indigo-100" },
  { id: 6, name: "BTCL", icon: "📞", color: "bg-green-100" },
  { id: 7, name: "DPDC", icon: "⚡", color: "bg-purple-100" },
  { id: 8, name: "City Corp", icon: "🏙️", color: "bg-red-100" },
];

const PartnerBank = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <Heading
        title="Our Trusted Providers"
        desc="Manage and pay all your bills in one seamless platform"
      ></Heading>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {organizations.map((org) => (
          <div
            key={org.id}
            className={`${org.color} p-6 py-12 rounded-lg text-center hover:shadow-md transition-all cursor-pointer flex flex-col items-center justify-center`}
          >
            <div className="text-4xl mb-3">{org.icon}</div>
            <h3 className="font-semibold text-gray-800">{org.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerBank;
