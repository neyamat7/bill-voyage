import React, { useState } from "react";
import { PaymentContext } from "./usePayment";

const getBalance = () => {
  const prevBal = localStorage.getItem("balance");
  return parseFloat(prevBal) || 10000;
};

const PaymentProvider = ({ children }) => {
  const [balance, setBalance] = useState(getBalance());

  const updateBalance = (paidBill) => {
    const prevBalance = getBalance();
    const newBalance = prevBalance - paidBill;
    localStorage.setItem("balance", newBalance);
  };

  const getPaidItem = () => {
    return localStorage.getItem("paid") || [];
  };

  const setPaidItem = (id, paidBill) => {
    const prevPaidItem = getPaidItem();
    if (prevPaidItem.includes(id)) {
      alert("already paid");
      return;
    }
    localStorage.setItem("paid", [...prevPaidItem, id]);
    updateBalance(paidBill);
    setBalance(getBalance());
  };

  const resetBalance = () => {
    localStorage.setItem("balance", 10000);
    setBalance(getBalance());
    localStorage.setItem("paid", []);
  };

  const payInfo = {
    balance,
    setPaidItem,
    getPaidItem,
    resetBalance,
  };

  return (
    <PaymentContext.Provider value={payInfo}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentProvider;
