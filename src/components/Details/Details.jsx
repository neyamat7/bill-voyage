import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { format, parseISO } from "date-fns";
import usePayment from "../../context/usePayment";
import { ImCheckboxChecked } from "react-icons/im";

export default function Details() {
  const bill = useLoaderData();
  const date = parseISO(bill.due_date);
  const { setPaidItem, getPaidItem } = usePayment();
  const navigate = useNavigate();

  function isPaid() {
    if (getPaidItem().includes(bill.id)) {
      return true;
    } else {
      return false;
    }
  }

  function handlePayItem(id, paidBill) {
    const prevPaidItem = getPaidItem();

    if (prevPaidItem.includes(id)) {
      alert("already paid this item");
      return;
    }
    setPaidItem(id, paidBill);
    alert("payment successful");
    navigate("/bills");
  }

  return (
    <div className="max-w-full h-[calc(100vh-64px)] mx-auto p-6 bg-gray-100 pt-20">
      {/* Main Card with Neomorphic Effect */}
      <div className="flex flex-col gap-8 md:flex-row rounded-xl overflow-hidden bg-gray-100 shadow-xl p-4">
        {/* Left Column - Logo */}
        <div className="w-full md:w-1/2  flex items-center justify-center relative bg-white">
          {/* NESCO Logo with Neomorphic Inset */}
          <div className="flex items-center justify-center h-full bg-white">
            <div className="flex items-center relative h-full bg-white">
              <img
                className="w-full h-full bg-white object-cover"
                src={bill.organization_logo}
                alt=""
              />
              {/* Lightning bolt accent */}
              {/* <div className="absolute -left-1 top-6">
                  <svg viewBox="0 0 24 36" width="20" height="30" fill="none">
                    <path
                      d="M13 1L1 22H12L11 35L23 14H12L13 1Z"
                      fill="#ff3a3a"
                      stroke="#ff3a3a"
                      strokeWidth="1"
                    />
                  </svg>
                </div> */}
            </div>
          </div>

          {/* Bill Type Icon at Bottom Right with Neomorphic Effect */}
          <div className="absolute bottom-0 right-0">
            <div className="p-3 rounded-lg bg-gray-100 shadow-md">
              <div className="w-12 h-12 flex items-center justify-center">
                {/* House with electricity icon */}
                <img src={bill.icon} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Text content */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          {/* NESCO Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            {bill.organization}
          </h2>

          {/* Electricity Bill */}
          <p className="text-xl italic text-gray-700 mb-6">{bill.bill_type}</p>

          {/* Amount with Neomorphic Inset */}
          <div className="mb-4">
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">Amount:</span>
              <span className="font-bold text-xl px-3 py-1 rounded-md bg-gray-100 shadow-inner">
                ${bill.amount}
              </span>
            </div>
          </div>

          {/* Due Date with Neomorphic Inset */}
          <div className="mb-6">
            <div className="flex items-start">
              <span className="text-gray-700 mr-2">Due Date:</span>
              <span className="text-gray-800 px-3 py-1 rounded-md bg-gray-100 shadow-inner">
                {format(date, "dd MMMM yyyy")}
              </span>
            </div>
          </div>

          {/* Pay Bill Button with Neomorphic Raised Effect */}
          <button
            onClick={() => handlePayItem(bill.id, bill.amount)}
            className="w-full py-3 rounded-lg font-medium text-white text-lg bg-green-500 shadow-md hover:shadow-lg active:shadow-inner transition-shadow duration-300"
          >
            {isPaid() ? (
              <span className="flex items-center gap-2 text-center justify-center">
                Paid
                <ImCheckboxChecked />
              </span>
            ) : (
              "Pay"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
