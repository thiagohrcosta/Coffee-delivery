import { CartContainer, CityContainer, NavbarContainer, NavbarLocation } from "./styles";

import Logo from "../../assets/images/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export default function Navbar() {
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
            <ShoppingCart size={32} color="#c47f17" />
          </CartContainer>
        </NavbarLocation>

      </div>
    </NavbarContainer>
  )
}
