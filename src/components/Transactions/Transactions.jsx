import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownLeft,
 
  Calendar,
  Filter,
  ArrowRight,
} from "lucide-react";
import usePayment from "../../context/usePayment";

export default function Transaction() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { balance } = usePayment();

  const transactions = [
    {
      id: 1,
      type: "income",
      title: "Transfer from Payoneer",
      company: "ABC Corporation",
      amount: 2600.0,
      date: "Feb 1, 2025",
      category: "Income",
      icon: <ArrowDownLeft className="text-emerald-500" />,
    },
    {
      id: 2,
      type: "expense",
      title: "Electricity Bill",
      company: "DESCO",
      amount: 225.75,
      date: "Apr 22, 2024",
      category: "Utilities",
      icon: <ArrowUpRight className="text-rose-500" />,
    },

    {
      id: 4,
      type: "income",
      title: "Transfer from Rakib",
      company: "Peer-to-Peer",
      amount: 450.0,
      date: "May 15, 2022",
      category: "Transfer",
      icon: <ArrowDownLeft className="text-emerald-500" />,
    },
    {
      id: 3,
      type: "expense",
      title: "Internet Bill",
      company: "Link3",
      amount: 117.35,
      date: "June 30, 2024",
      category: "Food",
      icon: <ArrowUpRight className="text-rose-500" />,
    },
  ];

  const filteredTransactions =
    activeFilter === "all"
      ? transactions
      : transactions.filter((t) => t.type === activeFilter);

  const categories = ["All", "Income", "Expense"];

  return (
    <div className="bg-gray-100 p-6 rounded-md max-w-screen-xl mt-20 mx-auto border-b border-gray-300">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 w-fit mx-auto">
          Your Financial Overview
        </h1>
        <div className="flex items-center space-x-2">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-50">
            <Calendar size={20} className="text-gray-500" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-50">
            <Filter size={20} className="text-gray-500" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500 mb-1">Total Balance</p>
          <p className="text-2xl font-bold text-gray-800">${balance}</p>
          <div className="flex items-center mt-2">
            <span className="text-xs text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">
              +2.4%
            </span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500 mb-1">Income</p>
          <p className="text-2xl font-bold text-emerald-500">$3,700.00</p>
          <div className="flex items-center mt-2">
            <span className="text-xs text-gray-500">This month</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500 mb-1">Expenses</p>
          <p className="text-2xl font-bold text-rose-500">$212.98</p>
          <div className="flex items-center mt-2">
            <span className="text-xs text-gray-500">This month</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Transactions History
        </h2>

        <div className="flex mb-6 space-x-2 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                category.toLowerCase() === activeFilter ||
                (category === "All" && activeFilter === "all")
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() =>
                setActiveFilter(
                  category === "All" ? "all" : category.toLowerCase()
                )
              }
            >
              {category}
            </button>
          ))}
        </div>

        {filteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-[#f6f6f6] p-4 rounded-xl shadow border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === "income"
                    ? "bg-emerald-100"
                    : "bg-rose-100"
                }`}
              >
                {transaction.icon}
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-800 text-lg">
                  {transaction.title}
                </h3>
                <p className="text-sm text-gray-500">{transaction.company}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-semibold ${
                  transaction.type === "income"
                    ? "text-emerald-500"
                    : "text-rose-500"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}$
                {transaction.amount.toFixed(2)}
              </p>
              <p className="text-xs text-gray-500">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer">
          View More
          <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
}
