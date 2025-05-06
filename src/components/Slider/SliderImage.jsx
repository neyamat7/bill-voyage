import React from "react";
import { Link } from "react-router";

const SliderImage = ({ slogan, desc, imgUrl }) => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imgUrl}
          alt="Bill management dashboard"
          className="w-full h-full object-fill"
        />

        <div className="absolute inset-0 bg-gray-900/50"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          {slogan}
        </h1>

        <p className="text-xl sm:text-2xl text-white max-w-2xl mb-8 px-5 sm:px-0">
          {desc}
        </p>

        <Link
          to="/bills"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300"
          onClick={() => console.log("Button clicked!")}
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default SliderImage;
