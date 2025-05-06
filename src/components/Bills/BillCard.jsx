import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router";
import { format, parseISO } from "date-fns";

const BillCard = ({ bill }) => {
  const date = parseISO(bill.due_date);

  return (
    <div className="relative overflow-hidden rounded-lg bg-slate-50 border-gray-700">
      <div
        className={`absolute top-0 left-0 h-full w-1 ${
          bill.bill_type === "electricity"
            ? "bg-purple-500"
            : bill.bill_type === "gas"
            ? "bg-red-500"
            : bill.bill_type === "water"
            ? "bg-blue-600"
            : bill.bill_type === "internet"
            ? "bg-yellow-400"
            : bill.bill_type === "telephone"
            ? "bg-green-500"
            : "bg-green-800"
        }`}
      ></div>

      <div className="grid grid-cols-1 min-[425px]:grid-cols-8 items-center p-4">
        <div className="min-[425px]:col-span-2 flex justify-center mb-10 min-[425px]:mb-0">
          <div
            className={`flex items-center justify-center w-28 h-28 rounded-lg border border-slate-300`}
          >
            <div className={`p-1rounded-lg w-20`}>
              <img className="w-full" src={bill.icon} alt="" />
            </div>
          </div>
        </div>

        <div className="min-[425px]:col-span-6 pl-3">
          <div className="grid grid-cols-6 gap-3 items-center place-content-center">
            <div className="col-span-4">
              <div className="text-xl text-black font-bold">
                {bill.organization}
              </div>
              <div className="text-sm text-gray-600 font-semibold capitalize mb-2">
                {bill.bill_type}
              </div>
              <div className="flex items-center text-xs text-gray-700">
                <Calendar className="h-3 w-3 mr-1" />
                <span>Due: {format(date, "dd MMMM yyyy")}</span>
              </div>

              <div className="">
                <div className="text-lg font-bold text-gray-800">
                  ${bill.amount.toFixed(2)}
                </div>
              </div>
            </div>

            <div className="col-span-2 text-center flex">
              <Link
                to={`/details/${bill.id}`}
                className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 rounded-md  font-medium transition-colors duration-200 text-lg text-center"
              >
                Pay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillCard;
