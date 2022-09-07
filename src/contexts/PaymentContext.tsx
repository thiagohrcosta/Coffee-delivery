import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export const PaymentContext =  createContext({});

interface PaymentContextProviderProps {
  children: ReactNode;
}

export default function PaymentContextProvider({children}:PaymentContextProviderProps) {
  const [paymentSelected, setPaymentSelected] = useState();

  useEffect(() => {
    console.log(paymentSelected);
  },[paymentSelected])

  return (
    <PaymentContext.Provider
     value={{ paymentSelected, setPaymentSelected }}
    >
      {children}
    </PaymentContext.Provider>
  )
}

export function useCart() {
  return useContext(PaymentContext)
}
