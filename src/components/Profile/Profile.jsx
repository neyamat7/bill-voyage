import React, { useState } from "react";
import { MdOutlineAttachEmail } from "react-icons/md";
import useAuth from "../../context/useAuth";
import { FaUserEdit } from "react-icons/fa";
import { Link, Outlet } from "react-router";

const Profile = () => {
  const { user, setUser, updateUser } = useAuth();

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gray-100">
      <div className="relative w-md p-14 rounded-2xl bg-gray-100 shadow-lg hover:shadow-xl flex flex-col items-center transition-all duration-300 ease-in-out transform hover:-translate-y-1">
        {/* Decorative elements */}
        <div className="absolute w-20 h-20 bg-white opacity-10 rounded-full -top-8 -left-8 blur-lg"></div>
        <div className="absolute w-2.5 h-2.5 bg-indigo-500 rounded-full top-5 right-5 animate-pulse"></div>
        <div className="absolute w-2.5 h-2.5 bg-indigo-500 rounded-full bottom-6 left-6 animate-pulse delay-700"></div>
        {/* Profile image container */}
        <div className="relative w-40 h-40 rounded-full mb-6 flex justify-center items-center">
          {/* Profile image container */}
          <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100 shadow-inner border border-gray-200">
            <img
              src={user?.photoURL}
              alt={`${name}'s profile`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Edit icon - positioned absolutely relative to the main container */}
          <Link
            to="/profile/update-profile"
            className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <FaUserEdit size={20} className="text-blue-500" />
          </Link>
        </div>
        {/* User name */}
        <div className="relative mb-2.5">
          <h2 className="text-lg font-semibold text-gray-800 text-center tracking-wide">
            {user?.displayName}
          </h2>
          <div className="absolute w-8 h-0.5 bg-indigo-500 -bottom-1 left-1/2 transform -translate-x-1/2"></div>
        </div>
        {/* Email container */}
        <div className="mt-4 w-full h-10 rounded-lg bg-gray-200 flex items-center px-4">
          <p className="text-sm text-gray-700 opacity-80 m-0 flex items-center gap-1 overflow-hidden text-ellipsis w-fit mx-auto">
            <span>
              <MdOutlineAttachEmail size={20} color="blue" />
            </span>
            <span className="mb-1 text-lg">{user?.email}</span>
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
