import { NavbarContainer } from "./styles";

import Logo from "../../assets/images/logo.svg";

export default function Navbar() {
  return (
    <NavbarContainer>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
    </NavbarContainer>
  )
}
