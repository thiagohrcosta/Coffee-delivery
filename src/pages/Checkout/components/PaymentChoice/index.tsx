import { Bank, CreditCard, Money } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { PaymentContext } from "../../../../contexts/PaymentContext";
import { PaymentChoiceContainer } from "./styles";

export default function PaymentChoice() {
  const [paymentOption, setPaymentOption] = useState("");
  const { paymentSelected, setPaymentSelected } = useContext(PaymentContext);

  useEffect(() => {
    setPaymentSelected(paymentOption);
  }, [paymentOption]);

  return (
    <PaymentChoiceContainer>
      <div className={paymentOption == "CARTÃO DE CRÉDITO" ? "choice-container payment-selected" : "choice-container"} onClick={(e) => setPaymentOption("CARTÃO DE CRÉDITO")}>
        <CreditCard size={32} color="#8047F8" />
        <p>CARTÃO DE CRÉDITO</p>
      </div>
      <div className={paymentOption == "CARTÃO DE DÉBITO" ? "choice-container payment-selected" : "choice-container"} onClick={(e) => setPaymentOption("CARTÃO DE DÉBITO")}>
        <Bank size={32} color="#8047F8" />
        <p>CARTÃO DE DÉBITO</p>
      </div>
      <div className={paymentOption == "DINHEIRO" ? "choice-container payment-selected" : "choice-container"} onClick={(e) => setPaymentOption("DINHEIRO")}>
        <Money size={32} color="#8047F8" />
        <p>DINHEIRO</p>
      </div>
    </PaymentChoiceContainer>
  )
}
