import Navbar from "../../components/Navbar";
import { FinishedContainer } from "./styles";

import DeliveryImage from "../../assets/images/delivery.svg";
import { useEffect, useState } from "react";
import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";

export default function Finished() {
  const [storedInfo, setStoredInfo] = useState([]);

  const storedStateAsJSON = localStorage.getItem("@coffee-delivery:order");

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem("@coffee-delivery:order");
    if (storedStateAsJSON) {
      setStoredInfo(JSON.parse(storedStateAsJSON));
    }
    console.log(storedInfo.street)
  },[])

  return (
    <>
      <Navbar />
      <FinishedContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
        <div className="delivery-container">
          <div className="delivery-resume">
            <div className="delivery-item">
              <MapPin size={32} color="#ffffff"  weight="fill" style={{background: "#8047F8", padding: "5px", borderRadius: "50%"}}  />
              <div className="delivery-message">
                <p>Entrega em <b>{storedInfo.street}, {storedInfo.streetNumber} {storedInfo.addressComplement != "" ? `, ${storedInfo.addressComplement},` : ","}</b></p>
                <p>{storedInfo.neighborhood}, {storedInfo.city } - {storedInfo.state}</p>
              </div>
            </div>
            <div className="delivery-item">
              <Timer size={32} color="#ffffff" weight="fill" style={{background: "#DBAC2C", padding: "5px", borderRadius: "50%"}}/>
              <div className="delivery-message">
                <p>Previsão de entrega</p>
                <p><b>20min - 30min</b></p>
              </div>
            </div>
            <div className="delivery-item">
              <CurrencyDollarSimple size={32} color="#ffffff" weight="fill" style={{background: "#c47f17", padding: "5px", borderRadius: "50%"}}  />
              <div className="delivery-message">
                <p>Total (Forma de pagamento)</p>
                <p><b>{parseFloat(storedInfo.orderPlusDelivery).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} (Dinheiro)</b></p>
              </div>
            </div>
          </div>
          <div>
            <img src={DeliveryImage} alt="Entrega" />
          </div>
        </div>
      </FinishedContainer>
    </>
  )
}
