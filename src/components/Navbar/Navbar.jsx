import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import usePayment from "../../context/usePayment";
import useAuth from "../../context/useAuth";
import { LuDollarSign } from "react-icons/lu";
import { toast } from "react-toastify";

const Navbar = () => {
  const { balance, resetBalance } = usePayment();
  const [remainingBalance, setRemainingBalance] = useState(0);
  const { user, signOutUser } = useAuth();
  const userEmail = user?.email || user?.providerData[0].email;
  const { pathname, state } = useLocation();

  const notify = () =>
    toast.info(
      "Log out complete! Come back soon to manage your bills with ease."
    );

  function handleLogOut() {
    signOutUser()
      .then(() => {
        resetBalance();
        notify();
      })
      .catch((error) => {
        console.log("Sign out error:", error);
      });
  }

  useEffect(() => {
    setRemainingBalance(balance);
  }, [balance]);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `btn text-lg sm:!p-0 sm:!bg-transparent sm:!shadow-none  sm:!border-none ${
            isActive ? "underline text-green-500 font-medium" : "font-normal"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/bills"
        className={({ isActive }) =>
          `btn text-lg  sm:!p-0 sm:!bg-transparent sm:!shadow-none sm:!border-none ${
            isActive ? "underline text-green-500 font-medium" : "font-normal"
          }`
        }
      >
        Bills
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `btn text-lg font-normal sm:!p-0 sm:!bg-transparent sm:!shadow-none sm:!border-none ${
            isActive ? "underline text-green-500 font-medium" : "font-normal"
          }`
        }
      >
        Profile
      </NavLink>
    </>
  );

  const buttonLinks = (
    <>
      <Link
        to="/login"
        className={`btn ${pathname === "/login" ? "btn-active" : ""}`}
      >
        Login
      </Link>
      <Link
        to="/register"
        state={state}
        className={`btn ${pathname === "/register" ? "btn-active" : ""}`}
      >
        Register
      </Link>
    </>
  );

  return (
    <div className="bg-[#f0e8db] shadow-sm">
      <div className="navbar max-w-screen-xl mx-auto w-full flex justify-between pr-4">
        <div className="flex items-center">
          <div className="dropdown sm:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3"
            >
              {navLinks}
              {buttonLinks}
            </ul>
          </div>
          <Link to="/" className=" font-bold text-2xl sm:pl-2">
            BillVoyage
          </Link>
        </div>

        <div className="hidden sm:flex gap-4 text-lg">{navLinks}</div>

        <div className="flex items-center gap-4">
          {!user && <div className="hidden sm:flex gap-3">{buttonLinks}</div>}

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
