import { createContext, ReactNode, useContext, useState } from "react";

export const PaymentContext =  createContext({});

interface PaymentContextProviderProps {
  children: ReactNode;
}

export default function PaymentContextProvider({children}:PaymentContextProviderProps) {
  const [paymentSelected, setPaymentSelected] = useState();

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
