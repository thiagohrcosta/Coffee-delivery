import Navbar from "../../components/Navbar";
import { CheckoutContainer, CheckoutInputs, SelectedCoffeeContainer } from "./styles";

import { useForm } from "react-hook-form";
import { MapPinLine, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import Payment from "./components/Payment";
import PaymentContextProvider, { PaymentContext } from "../../contexts/PaymentContext";
import { CartContext } from "../../contexts/CartContext";


export default function Checkout() {
  const { cart, addCoffeeQuantityByOne } = useContext(CartContext);
  const { paymentSelected } = useContext(PaymentContext);

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

  const [totalOrder, setTotalOrder] = useState(0);
  const [orderPlusDelivery, setOrderPlusDelivery] = useState(0);

  const [productSelected, setProductSelected] = useState([]);

  const [finalPaymentSelection , setFinalPaymentSelection] = useState(paymentSelected);

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
    const itemValue = parseFloat(value[2].replace(',', '.'));
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
      return parseFloat(acc) + parseFloat(item[2].replace(',', '.')) * parseFloat(item[5]);
    }, 0);
    setTotalOrder(total);
  }

  function handleToltalOrderPlusDelivery() {
    const delivery = 3.50;
    const total = totalOrder + delivery;
    setOrderPlusDelivery(total);
  }

  function handleCheckoutOrder(e: any) {
    e.preventDefault();
    if (street == "" || neighborhood == "" || city == "" || state == "") {
      alert("Preencha todos os campos de endereço!");
    } else {
      const order = {
        street,
        addressComplement,
        streetNumber,
        neighborhood,
        city,
        state,
        totalOrder,
        orderPlusDelivery,
        productSelected,
        finalPaymentSelection
      }
      const data = JSON.stringify(order);
      localStorage.setItem('@coffee-delivery:order', data);

      window.location.href = "/finished";
    }
  }

  useEffect(() => {
    handleTotalOrder()
    handleToltalOrderPlusDelivery()
    setFinalPaymentSelection(paymentSelected)
  }, [cart, cep, paymentSelected])

  useEffect(() => {
  },[cart[5]])

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
                          <input type="text" defaultValue={addressComplement} placeholder="Complemento (Opcional)" onChange={(e) => setAddressComplement(e.target.value)} />
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
                <Payment />

              </div>

              <SelectedCoffeeContainer>
                <h2>Cafés selecionados</h2>
                <div className="selected-coffee-container" >
                  {cart.map((coffee:any) => {
                    return(
                      <div className="coffee-item">
                        <div>
                          <img src={coffee[4]} alt="Café" />
                        </div>
                        <div>
                        <p>{coffee[0]}</p>
                        <div className="coffee-item-counter">
                          <div className="coffe-counter-container">
                            <span>-</span>
                            <p>{coffee[5]}</p>
                            <span onClick={(e) => addCoffeeQuantityByOne(e)}>+</span>
                          </div>
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
                      <p>{totalOrder.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </div>
                    <div className="total-order-item">
                      <p>Entrega</p>
                      <p>R$ 3,50</p>
                    </div>
                    <div className="total-order-item">
                      <h3>Total</h3>
                      <h3>{orderPlusDelivery.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
                    </div>
                    <button onClick={(e) => handleCheckoutOrder(e)}>CONFIRMAR PEDIDO</button>
                  </div>
                </div>
              </SelectedCoffeeContainer>
            </div>
          </form>
        </CheckoutContainer>
      </PaymentContextProvider>
    </>
  )
}
