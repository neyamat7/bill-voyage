import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { format, parseISO } from "date-fns";
import usePayment from "../../context/usePayment";
import { ImCheckboxChecked } from "react-icons/im";
import { toast } from "react-toastify";

export default function Details() {
  const bill = useLoaderData();
  const date = parseISO(bill.due_date);
  const { setPaidItem, getPaidItem } = usePayment();
  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState("");

  const notify = (card) =>
    toast.success(`Bill paid by ${card}! Thanks for using us.`);

  const paidAlert = () => toast.error("Paid Before! You'are up to date.");

  const cardAlert = () => toast.error("Please select a card to pay!");

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
      paidAlert();
      return;
    }

    if (!selectedCard) {
      cardAlert();
      return;
    }

    setPaidItem(id, paidBill);
    notify(selectedCard);
    navigate("/bills");
  }

  return (
    <div className="max-w-full min-h-[calc(100vh-64px)] mx-auto p-6 bg-white py-20">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-8 sm:flex-row rounded-xl overflow-hidden bg-gray-100 shadow-md p-4">
        <div className="w-full md:w-1/2  flex items-center justify-center relative bg-white">
          <div className="flex items-center justify-center h-full bg-white">
            <div className="flex items-center relative h-full bg-white">
              <img
                className="w-full h-[300px] bg-white"
                src={bill.organization_logo}
                alt=""
              />
            </div>
          </div>

          <div className="absolute bottom-0 right-0">
            <div className="p-3 rounded-lg bg-gray-100 shadow-md">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={bill.icon} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            {bill.organization}
          </h2>

          <p className="text-xl italic text-gray-700 mb-3 sm:mb-6">
            {bill.bill_type}
          </p>

          <div className="mb-2 sm:mb-4">
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">Amount:</span>
              <span className="font-bold text-xl px-3 py-1 rounded-md bg-gray-100 shadow-inner">
                ${bill.amount}
              </span>
            </div>
          </div>

          <div className="mb-4 sm:mb-6">
            <div className="flex items-start">
              <span className="text-gray-700 mr-2">Due Date:</span>
              <span className="text-gray-800 px-3 py-1 rounded-md bg-gray-100 shadow-inner">
                {format(date, "dd MMMM yyyy")}
              </span>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Select Bank Card:</label>
            <select
              value={selectedCard}
              onChange={(e) => setSelectedCard(e.target.value)}
              className="w-fit border border-gray-400 px-3 py-2 rounded mb-4"
            >
              <option value="">-- Choose a card --</option>
              <option value="Visa">Visa</option>
              <option value="MasterCard">MasterCard</option>
              <option value="Amex">Amex</option>
              <option value="Nexus">Nexus</option>
              <option value="Bkash">Bkash</option>
            </select>
          </div>

          <button
            onClick={() => handlePayItem(bill.id, bill.amount)}
            className="w-fit py-3 px-6 rounded-lg font-medium text-white text-lg bg-green-500 shadow-md hover:shadow-lg"
          >
            {isPaid() ? (
              <span className="flex items-center gap-2 text-center justify-center">
                Paid
                <ImCheckboxChecked />
              </span>
            ) : (
              "Pay Bill"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
