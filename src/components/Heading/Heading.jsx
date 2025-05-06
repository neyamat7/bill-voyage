import React from "react";

const Heading = ({ title, desc, text }) => {
  return (
    <div className="text-center my-12">
      <h2 className={`text-3xl font-bold ${text || "text-gray-800"}`}>
        {title}
      </h2>
      <p className={`${text || "text-gray-600"} mt-2`}>{desc}</p>
    </div>
  );
};

export default Heading;
