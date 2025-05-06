import React from "react";
import Heading from "../Heading/Heading";
import { Activity, CreditCard, Shield, Users } from "lucide-react";

const features = [
  {
    icon: <Activity size={24} />,
    title: "Real-time Tracking",
    description:
      "Monitor your spending and payments in real-time with instant notifications",
  },
  {
    icon: <CreditCard size={24} />,
    title: "Card Management",
    description:
      "Full control over your cards with freeze/unfreeze options and spend limits",
  },
  {
    icon: <Shield size={24} />,
    title: "Secure Payments",
    description:
      "Enhanced security protocols and biometric authentication for all transactions",
  },
  {
    icon: <Users size={24} />,
    title: "Family Banking",
    description:
      "Create sub-accounts for family members with customized permissions",
  },
];

const AboutUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <section className="pt-1 pb-16 mt-10 bg-gray-200 rounded-md">
        <div className="container mx-auto px-4">
          <Heading
            title="Why We Are Different"
            desc="Designed to make managing your finances easier and more secure"
          ></Heading>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full inline-flex mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
