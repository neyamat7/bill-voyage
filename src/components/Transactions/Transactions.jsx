import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownLeft,
  ChevronRight,
  Search,
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
      title: "Salary Deposit",
      company: "ABC Corporation",
      amount: 3500.0,
      date: "May 1, 2023",
      category: "Income",
      icon: <ArrowDownLeft className="text-emerald-500" />,
    },
    {
      id: 2,
      type: "expense",
      title: "Electricity Bill",
      company: "DESCO",
      amount: 125.75,
      date: "Apr 28, 2023",
      category: "Utilities",
      icon: <ArrowUpRight className="text-rose-500" />,
    },
    {
      id: 3,
      type: "expense",
      title: "Grocery Store",
      company: "SuperMart",
      amount: 87.23,
      date: "Apr 27, 2023",
      category: "Food",
      icon: <ArrowUpRight className="text-rose-500" />,
    },
    {
      id: 4,
      type: "income",
      title: "Transfer from John",
      company: "Peer-to-Peer",
      amount: 200.0,
      date: "Apr 25, 2023",
      category: "Transfer",
      icon: <ArrowDownLeft className="text-emerald-500" />,
    },
  ];

  const filteredTransactions =
    activeFilter === "all"
      ? transactions
      : transactions.filter((t) => t.type === activeFilter);

  const categories = ["All", "Income", "Expenses"];

  return (
    <div className="bg-gray-50 p-6 rounded-xl max-w-screen-xl mt-20 mx-auto shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Financial Overview</h1>
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

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search transactions..."
          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Search size={18} className="absolute left-3 top-3.5 text-gray-400" />
      </div>

      {/* Filter Categories */}
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

      {/* Transactions List */}
      <div className="space-y-3 mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Recent Transactions
        </h2>

        {filteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-white p-4 rounded-xl shadow flex items-center justify-between hover:shadow-md transition-shadow"
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
                <h3 className="font-medium text-gray-800">
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

      {/* View All Link */}
      <div className="flex justify-center">
        <button className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
          View All Transactions
          <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
}
