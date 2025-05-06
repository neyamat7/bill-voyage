import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import usePayment from "../../context/usePayment";
import useAuth from "../../context/useAuth";
import { CiDollar } from "react-icons/ci";
import { LuDollarSign } from "react-icons/lu";

const Navbar = () => {
  const { balance, resetBalance } = usePayment();
  const [remainingBalance, setRemainingBalance] = useState(0);
  const { user, signOutUser } = useAuth();
  const userEmail = user?.email || user?.providerData[0].email;
  const { pathname } = useLocation();

  function handleLogOut() {
    signOutUser()
      .then(() => {
        console.log("User signed out");
        resetBalance();
      })
      .catch((error) => {
        console.log("Sign out error:", error);
      });
  }

  useEffect(() => {
    setRemainingBalance(balance);
  }, [balance]);

  return (
    <div className="bg-base-200 shadow-sm">
      <div className="navbar max-w-screen-xl mx-auto w-full flex justify-between">
        <div>
          <a className="btn btn-ghost text-2xl">BillVoyage</a>
        </div>

        <div className="flex gap-4 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "underline text-green-500" : "";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/bills"
            className={({ isActive }) => {
              return isActive ? "underline text-green-500" : "";
            }}
          >
            Bills
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => {
              return isActive ? "underline text-green-500" : "";
            }}
          >
            Profile
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          {!user && (
            <div className="flex gap-3">
              <Link
                to="/login"
                className={`btn ${pathname === "/login" ? "btn-active" : ""}`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={`btn ${
                  pathname === "/register" ? "btn-active" : ""
                }`}
              >
                Register
              </Link>
            </div>
          )}

          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <div className="flex flex-col items-start gap-0">
                    <p className="text-lg">{user.displayName}</p>
                    <p>{userEmail}</p>
                  </div>
                </li>
                <li>
                  <a className="text-base">
                    Balance:
                    <span className="flex gap-[2px] items-center">
                    <LuDollarSign />
                      {remainingBalance}
                    </span>
                  </a>
                </li>
                <li>
                  <a className="text-base" onClick={handleLogOut}>
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
