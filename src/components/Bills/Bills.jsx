import { useState } from "react";
import { Bolt, Flame, Calendar, ExternalLink } from "lucide-react";
import BillCard from "./BillCard";
import { useLoaderData } from "react-router"; 

export default function ModernBillPaymentCards() {
  const bills = useLoaderData();
  const [billType, setBillType] = useState("all");
  const [showBills, setShowBills] = useState(bills);

  

  function handleSortBills(billType) {
    
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-200 text-white p-6">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center text-slate-700">
          Utility Bills
        </h1>
        <div className="w-fit ml-auto mb-3 flex items-center gap-2 text-slate-700">
          <p className="whitespace-nowrap">SortBy Bill Type</p>
          <select
            value={billType}
            onChange={(e) => {
              setBillType(e.target.value);
              handleSortBills(e.target.value);
            }}
            // defaultValue="Sort By Bill Type"
            className="select select-accent capitalize"
          >
            <option>All</option>
            {bills.map((bill) => (
              <option
                className="capitalize"
                key={bill.id}
                value={bill.bill_type}
              >
                {bill.bill_type}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-4">
          {showBills.map((bill) => (
            <BillCard key={bill.id} bill={bill}></BillCard>
          ))}
        </div>
      </div>
    </div>
  );
}
