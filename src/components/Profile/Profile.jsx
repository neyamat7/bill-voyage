import React from "react";
import { MdOutlineAttachEmail } from "react-icons/md";
import useAuth from "../../context/useAuth";
import { FaUserEdit } from "react-icons/fa";
import { Link, Outlet } from "react-router";

const Profile = () => {
  const { user } = useAuth();

  const userEmail = user.email || user.providerData[0].email;

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-300px)]  bg-gray-100 py-20 px-3">
      <div className="relative w-md p-14 rounded-2xl bg-gray-200 border border-gray-300 hover:shadow-xl flex flex-col items-center transition-all duration-300 ease-in-out transform hover:-translate-y-1">
        <div className="absolute w-20 h-20 bg-white opacity-10 rounded-full -top-8 -left-8 blur-lg"></div>
        <div className="absolute w-2.5 h-2.5 bg-indigo-500 rounded-full top-5 right-5 animate-pulse"></div>
        <div className="absolute w-2.5 h-2.5 bg-indigo-500 rounded-full bottom-6 left-6 animate-pulse delay-700"></div>

        <div className="relative w-40 h-40 rounded-full mb-6 flex justify-center items-center">
          <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100 shadow-inner border border-gray-200">
            <img
              src={user?.photoURL}
              alt={`user's profile`}
              className="w-full h-full object-cover"
            />
          </div>

          <Link
            to="/profile/update-profile"
            className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <FaUserEdit size={20} className="text-blue-500" />
          </Link>
        </div>

        <div className="relative mb-2.5">
          <h2 className="text-2xl font-semibold text-gray-900 text-center tracking-wide">
            {user?.displayName}
          </h2>
          <div className="absolute w-8 h-0.5 bg-indigo-500 -bottom-1 left-1/2 transform -translate-x-1/2"></div>
        </div>

        <div className="mt-4 w-full h-10 rounded-lg bg-gray-200 flex items-center px-4">
          <p className="text-sm text-gray-700 opacity-80 m-0 flex items-center gap-1 overflow-hidden text-ellipsis w-fit mx-auto">
            <span>
              <MdOutlineAttachEmail size={20} color="blue" />
            </span>
            <span className="mb-1 text-lg font-medium">{userEmail}</span>
          </p>
        </div>
        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Profile;
