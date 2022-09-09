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

interface CartItemProps {
  name: string;
  description: string;
  price: string;
  tags: string[];
  logo: string;
  amout: number;
}

export default function Navbar() {
  const { cart } = useContext<CartItemProps | any>(CartContext);
  const [itemsInCart, setItemsInCart] = useState(0);

  function add(acc: any, a: any) {
    return acc + a;
  }

  useEffect(() => {
    console.log(cart)
    let amoutOfItems = cart.map((item: any) => item[5]);
    setItemsInCart(amoutOfItems.reduce(add, 0));
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
