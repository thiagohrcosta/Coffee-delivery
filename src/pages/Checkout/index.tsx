import Navbar from "../../components/Navbar";
import { CheckoutContainer, CheckoutInputs, SelectedCoffeeContainer } from "./styles";

import { useForm } from "react-hook-form";
import { MapPinLine, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import Payment from "./components/Payment";
import PaymentContextProvider from "../../contexts/PaymentContext";
import { CartContext } from "../../contexts/CartContext";


export default function Checkout() {
  const { cart } = useContext(CartContext);

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

  const [totalOrder, setTotalOrder] = useState([]);

  const [productSelected, setProductSelected] = useState([

  ]);

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

  function handleDisplayTotalPrice(value: any) {
    const itemValue = parseFloat(value[2]);
    const itemAmount = parseFloat(value[5]);
    const totalPrice = parseFloat(itemValue * itemAmount).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return (
      <>
        {totalPrice}
      </>
    )
  }

  function handleTotalOrder() {
    const total = cart.reduce((acc, item) => {
      return acc + item[2] * item[5];
    }, 0);
    setTotalOrder(total);
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
                      <input className="address-cep" type="text" defaultValue={cep} placeholder="Busque pelo CEP" {...register("example")} onChange={(e) => selectedCep(e.target.value) } />
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
              <SelectedCoffeeContainer>
                <h2>Cafés selecionados</h2>
                <div className="selected-coffee-container" >
                  {cart.map((coffee:any) => {
                    console.log(cart)
                    return(
                      <div className="coffee-item">
                        <div>
                          <img src={coffee[4]} alt="Café" />
                        </div>
                        <div>
                        <p>{coffee[0]}</p>
                        <div className="coffee-item-counter">
                          <p>{coffee[5]}</p>
                          <div className="remove-coffee">
                            <Trash size={16} color="#8047F8" />
                            <span>REMOVER</span>
                          </div>
                        </div>
                        </div>
                        <div>
                          <p className="coffee-price">{handleDisplayTotalPrice(coffee)}</p>
                        </div>
                      </div>
                    )
                  })}
                  <div className="total-order">
                    <div className="total-order-item">
                      <p>Total de itens</p>
                      <p>R$ 45,90</p>
                    </div>
                    <div className="total-order-item">
                      <p>Entrega</p>
                      <p>R$ 3,50</p>
                    </div>
                    <div className="total-order-item">
                      <h3>Total</h3>
                      <h3>R$ 3,50</h3>
                    </div>
                    <button>CONFIRMAR PEDIDO</button>
                  </div>
                </div>
              </SelectedCoffeeContainer>
            </div>
          </form>
        </CheckoutContainer>
        <Payment />
      </PaymentContextProvider>
    </>
  )
}
