import React from "react";
import Heading from "../Heading/Heading";

const Testimonial = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-gray-50 py-6 my-10">
      <Heading
        title="What Our Customers Say"
        desc="Trusted by millions of users nationwide"
      ></Heading>

      <section className="py-10 px-5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="Small Business Owner"
              content="The utility payment feature has saved me so much time. I used to spend hours managing bills for my business, now it's just a few clicks."
            />
            <TestimonialCard
              name="Michael Chen"
              role="Software Engineer"
              content="I love how I can pay my DESCO and WASA bills right from the same app I use for banking. The interface is clean and user-friendly."
            />
            <TestimonialCard
              name="Priya Sharma"
              role="Student"
              content="As a student living away from home, this app makes it easy to manage my finances. The bill payment reminders are especially helpful!"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

function TestimonialCard({ name, role, content }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 text-blue-600 p-1 rounded-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 11L7 16H4L8 10V4H14V11H10ZM18 11L15 16H12L16 10V4H22V11H18Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
