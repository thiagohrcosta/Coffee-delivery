import {
  CartContainer,
  CityContainer,
  NavbarContainer,
  NavbarLocation,
  CheckoutNumber
} from "./styles";

import Logo from "../../assets/images/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [itemsInCart, setItemsInCart] = useState(0);

  function add(acc, a) {
    return acc + a;
  }

  useEffect(() => {
    let items = [];

    cart.map((item: any) => {
      items.push(item[5])
    })

    setItemsInCart(items.reduce(add, 0))
  },[cart])

  return (
    <NavbarContainer>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div>
        <NavbarLocation>
          <CityContainer>
            <MapPin
              weight="fill"
              size={32}
              color="#8047F8"
            />
            <p>Belo Horizonte, MG</p>
          </CityContainer>
          <CartContainer>
            <Link to="/checkout">
              <ShoppingCart size={32} color="#c47f17" />
            </Link>
          </CartContainer>
          <CheckoutNumber>
            <span>{itemsInCart}</span>
          </CheckoutNumber>
        </NavbarLocation>

      </div>
    </NavbarContainer>
  )
}
