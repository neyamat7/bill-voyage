import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import usePayment from "../../context/usePayment";

const Navbar = () => {
  const { balance } = usePayment();
  const [remainingBalance, setRemainingBalance] = useState(0);

  useEffect(() => {
    setRemainingBalance(balance);
  }, [balance]);

  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between">
      <div>
        <a className="btn btn-ghost text-2xl">BillVoyage</a>
      </div>

      <div className="flex gap-4">
        <NavLink>Home</NavLink>
        <NavLink to="/bills">Bills</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-3">
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn">
            Register
          </Link>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <div className="flex flex-col items-start gap-0">
                <p className="text-lg">User's Name</p>
                <p>user@test.com</p>
              </div>
            </li>
            <li>
              <a>Balance: {remainingBalance}</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
