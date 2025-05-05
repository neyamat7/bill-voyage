import { createContext, use } from "react";

export const PaymentContext = createContext();

const usePayment = () => {
  return use(PaymentContext);
};

export default usePayment;
