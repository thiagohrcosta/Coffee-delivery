import Navbar from "../../components/Navbar";
import { CheckoutContainer, CheckoutInputs } from "./styles";

import { useForm } from "react-hook-form";
import { MapPinLine } from "phosphor-react";
import { useState } from "react";
import Payment from "./components/Payment";
import PaymentContextProvider from "../../contexts/PaymentContext";


export default function Checkout() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const [cep, selectedCep] = useState("");
  const [street, setStreet] = useState("");
  const [addressComplement, setAddressComplement] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [addressCompleted, setAddressCompleted] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  function searchCEP(e: any) {
    e.preventDefault();
    setIsloading(true);
    const data = fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data =>{
        setStreet(data.logradouro);
        setNeighborhood(data.bairro);
        setCity(data.localidade);
        setState(data.uf);
      })

      if (street != "" && neighborhood != "" && city != "" && state != "") {
        setAddressCompleted(true);
      }
      setIsloading(false);
  }

  return (
    <>
      <Navbar />
      <PaymentContextProvider>
        <CheckoutContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="checkout-container">
              <div className="checkout-left-card">
                <h2>Complete seu pedido</h2>
                <div className="checkout-left-content">
                  <div className="checkout-header">
                    <MapPinLine size={32} color="#c47f17" />
                    <div>
                      <h3>Endereço de entrega</h3>
                      <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                  </div>
                  <CheckoutInputs>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input type="text" defaultValue={cep} placeholder="Busque pelo CEP" {...register("example")} onChange={(e) => selectedCep(e.target.value) } />
                      <button onClick={(e) => searchCEP(e)}>Buscar</button>

                      {addressCompleted && (
                        <div className="input-completed">
                          <div className="input-logradouro">
                            <input type="text" defaultValue={street} placeholder="Rua" />
                            <input type="text" defaultValue={streetNumber} placeholder="Número" onChange={(e) => setStreetNumber(e.target.value)}/>
                          </div>
                          <input type="text" defaultValue={addressComplement} placeholder="Complemento (Opcional)" />
                          <input type="text" defaultValue={neighborhood} placeholder="Bairro" />
                          <div className="input-cidade">
                            <input type="text" defaultValue={city} placeholder="Cidade" />
                            <input type="text" defaultValue={state} placeholder="Estado" />
                          </div>
                        </div>
                      )}
                    </form>
                  </CheckoutInputs>
                </div>
              </div>
              <div>
                <h2>Cafés selecionados</h2>
              </div>
            </div>
          </form>
        </CheckoutContainer>
        <Payment />
      </PaymentContextProvider>
    </>
  )
}
