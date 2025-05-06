import React, { useState } from "react";
import useAuth from "../../context/useAuth";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user, setUser, updateUser } = useAuth();
  const [userName, setUserName] = useState(user.displayName);
  const [photoUrl, setPhotoUrl] = useState(user.photoURL);
  console.log(user);
  const navigate = useNavigate();

  function handleProfileUpdate(e) {
    e.preventDefault();

    updateUser({ displayName: userName, photoURL: photoUrl })
      .then(() => {
        setUser({ ...user, displayName: userName, photoURL: photoUrl });
        console.log("profiile updated successfully!");
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        console.log("error profile update");
      });
  }

  return (
    <div>
      <div className="w-full px-5 mt-10">
        <form onSubmit={handleProfileUpdate}>
          
          <div className="mb-4">
            <label
              htmlFor="displayName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
          </div>
 
          <div className="mb-4">
            <label
              htmlFor="photoURL"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Photo URL:
            </label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
          </div>
 
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
