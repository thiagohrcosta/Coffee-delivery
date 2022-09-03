import { CartContainer, CityContainer, NavbarContainer, NavbarLocation } from "./styles";

import Logo from "../../assets/images/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <NavbarContainer>
      <div className="logo">
        <img src={Logo} alt="logo" />
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
            <ShoppingCart size={32} color="#c47f17" /> <span>{cart.length}</span>
          </CartContainer>
        </NavbarLocation>

      </div>
    </NavbarContainer>
  )
}
