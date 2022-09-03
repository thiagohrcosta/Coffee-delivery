import { Bank, CurrencyDollar, Money } from "phosphor-react";
import PaymentChoice from "../PaymentChoice";
import { PaymentContainer } from "./styles";

export default function Payment() {
  return (
    <PaymentContainer>
      <div className="payment-header">
        <CurrencyDollar size={32} color="#8047F8" />
        <div className="payment-message">
          <h3>Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </div>
      <PaymentChoice />
    </PaymentContainer>
  )
}
